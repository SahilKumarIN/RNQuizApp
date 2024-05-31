import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../constants/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import QuizComp from '../../components/QuizComp';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>RN - Quiz App</Text>
      </View>

      {/* All Quizes created by the user. */}

      <View style={styles.quizContainer}>
        <Text style={styles.heading}>Your Polls</Text>
        {/* Here the quizzes will be shown in horizontal way. */}
        <QuizComp
          data={{
            createdBy: 'Sahil Kumar',
            dateCreated: '2024-05-28 18:17',
            question: 'What is your name ?',
            answers: ['Sahil', 'Pawan', 'Atul', 'Sumit'],
          }}
        />
      </View>

      {/* All Quizes created by other users except the user loggedIn */}

      <View style={styles.quizContainer}>
        <Text style={styles.heading}>All Quizzes</Text>
        {/* Here the quizzes will be shown vertical manner */}
        <View>
          <QuizComp
            data={{
              createdBy: 'Sahil Kumar',
              dateCreated: '2024-05-28 18:17',
              question: 'What is your name ?',
              answers: ['Sahil', 'Pawan', 'Atul', 'Sumit'],
            }}
          />
        </View>
      </View>

      {/* ADD QUIZ BTN */}
      <View style={styles.iconBG}>
        <Icon name="plus" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.BG_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  header: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  appName: {
    letterSpacing: 4,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
  },
  iconBG: {
    backgroundColor: 'darkslategray',
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
  quizContainer: {
    marginTop: 20,
    // padding: 10,
  },
  heading: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
});

export default Home;
