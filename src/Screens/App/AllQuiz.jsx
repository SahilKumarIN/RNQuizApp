import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../constants/color';
import IonIcons from 'react-native-vector-icons/Ionicons';
import QuizComp from '../../components/QuizComp';

const AllQuiz = ({navigation}) => {
  const dataItems = [
    {
      createdBy: 'Sahil Kumar',
      dateCreated: '2024-05-28 18:17',
      question: 'What is your name ?',
      answers: ['Sahil', 'Pawan', 'Atul', 'Sumit'],
      correctAnswer: 'Sahil',
      category: 'General',
      difficulty: 'Hard',
    },
    {
      createdBy: 'Sahil Kumar',
      dateCreated: '2024-05-28 18:17',
      question: 'Where you belong to ?',
      answers: ['Bhagalpur', 'Bihar', 'Patna', 'None of the above'],
      correctAnswer: 'Bhagalpur',
    },
  ];

  const [newData, setNewData] = useState(null);

  async function getData() {
    const resp = await fetch('https://the-trivia-api.com/v2/questions', {
      method: 'GET',
    });
    const respJSON = await resp.json();
    // console.log(nd);
    setNewData(respJSON);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All - Quiz</Text>
      {navigation.canGoBack() && (
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => {
            navigation.goBack();
          }}>
          <IonIcons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={newData}
        renderItem={({item, index}) => {
          return <QuizComp data={item} />;
        }}
      />
    </View>
  );
};

export default AllQuiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  heading: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    marginTop: 8,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  goBack: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'gray',
    padding: 6,
    borderRadius: 20,
  },
});
