import {
  Alert,
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/color';
import IonIcons from 'react-native-vector-icons/Ionicons';

const AddQuiz = ({navigation}) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(Array(4).fill(''));
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const difficultyData = ['Easy', 'Medium', 'Hard'];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add - Quiz</Text>
      {navigation.canGoBack() && (
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => {
            navigation.goBack();
          }}>
          <IonIcons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.addQuizContainer}>
          <Text style={styles.inputQues}>Question :</Text>
          <TextInput
            style={styles.input}
            inputMode="text"
            keyboardType="alphanumeric"
            placeholder="Enter Question"
            value={question}
            onChangeText={text => {
              setQuestion(text);
            }}
          />
          <Text style={styles.inputQues}>Options :</Text>
          {answer.map((item, index) => {
            return (
              <TextInput
                key={index}
                style={styles.input}
                placeholder={'Option ' + (index + 1)}
                inputMode="text"
                keyboardType="default"
                value={item}
                onChangeText={text => {
                  const newAnswers = [...answer];
                  newAnswers[index] = text;
                  setAnswer(newAnswers);
                }}
              />
            );
          })}
          <Text style={styles.inputQues}>Correct Answer</Text>
          <TextInput
            style={styles.input}
            inputMode="text"
            keyboardType="alphanumeric"
            placeholder="Correct Answer"
            value={correctAnswer}
            onChangeText={text => {
              setCorrectAnswer(text);
            }}
          />
          <Text style={styles.inputQues}>Category</Text>
          <TextInput
            style={styles.input}
            inputMode="text"
            keyboardType="alphanumeric"
            placeholder="Category (Ex. General , Coding , Foods etc...)"
            value={category}
            onChangeText={text => {
              setCategory(text);
            }}
          />
          <Text style={styles.inputQues}>Difficulty</Text>
          <FlatList
            data={difficultyData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <Pressable
                  key={index + item}
                  style={[
                    styles.difficulty,
                    difficulty == item ? styles.selectedDifficulty : '',
                  ]}
                  onPress={() => {
                    setDifficulty(item);
                  }}>
                  <Text
                    style={[
                      styles.difficultyTxt,
                      difficulty == item ? styles.selectedDifficultyTxt : '',
                    ]}>
                    {item}
                  </Text>
                </Pressable>
              );
            }}
          />
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => {
              Alert.alert('Success', 'Quiz was added successfully!');
            }}>
            <Text style={styles.addBtnTxt}>Add Quiz</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddQuiz;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
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
  addQuizContainer: {
    marginTop: 30,
  },
  inputQues: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    backgroundColor: colors.white,
    fontSize: 14,
    color: colors.black,
    marginVertical: 8,
    padding: 10,
    letterSpacing: 0.6,
    borderRadius: 6,
  },
  addBtn: {
    backgroundColor: '#9fa8da',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  addBtnTxt: {
    color: '#283593',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  difficulty: {
    flex: 1,
    backgroundColor: '#d4cecd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 6,
  },
  selectedDifficulty: {
    // backgroundColor: '#80cbc4',
    backgroundColor: 'gray',
  },
  difficultyTxt: {
    fontSize: 14,
    color: '#403d3d',
    fontWeight: '700',
  },
  selectedDifficultyTxt: {
    // color: '#004d40',
    color: 'black',
  },
});
