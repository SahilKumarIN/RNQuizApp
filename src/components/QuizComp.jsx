import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../constants/color';
import Icon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
const QuizComp = ({data}) => {
  const {
    createdBy,
    dateCreated,
    question,
    answers,
    correctAnswer,
    category,
    difficulty,
  } = data;
  const [selectedAns, setSelectedAnswer] = useState('');

  return (
    <View style={styles.quizBox}>
      <View style={styles.category}>
        <Text style={styles.categoryTxt}>{category || 'General'}</Text>
        <Text style={styles.categoryTxt}>{difficulty || 'Easy'}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.createdBy}>{createdBy}</Text>
        <Text style={styles.dateCreated}>{dateCreated}</Text>
      </View>
      <Text style={styles.question} numberOfLines={2}>
        {'Q.' + question}
      </Text>
      <View style={styles.answerContainer}>
        {answers.map((answer, index) => {
          return (
            <View key={index} style={styles.answerBox}>
              <Pressable
                style={[
                  styles.selectIcon,
                  selectedAns === answer
                    ? {
                        backgroundColor:
                          selectedAns == correctAnswer ? 'green' : 'red',
                        borderColor:
                          selectedAns == correctAnswer ? 'green' : 'red',
                      }
                    : null,
                ]}
                onPress={() => {
                  !selectedAns ? setSelectedAnswer(answer) : '';
                }}
              />

              <Text
                style={styles.answerTxt}
                onPress={() => {
                  !selectedAns ? setSelectedAnswer(answer) : '';
                }}>
                {answer}
              </Text>
              {answer === selectedAns && selectedAns === correctAnswer ? (
                <Icon name="check" color="green" size={20} />
              ) : null}
              {answer === selectedAns && selectedAns !== correctAnswer ? (
                <AntDesignIcon name="close" color="red" size={20} />
              ) : null}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default QuizComp;

const styles = StyleSheet.create({
  quizBox: {
    marginTop: 10,
    backgroundColor: colors.white,
    width: '98%',
    marginHorizontal: 'auto',
    minHeight: 200,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  categoryTxt: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#bec1c4',
    borderRadius: 6,
    color: '#4c4e52',
    fontWeight: '600',
    fontSize: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  createdBy: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  dateCreated: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  question: {
    color: 'black',
    marginTop: 6,
    fontSize: 18,
    fontWeight: '700',
    overflow: 'scroll',
  },
  answerContainer: {
    marginTop: 10,
    gap: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  selectIcon: {
    width: 24,
    height: 24,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 10,

    // backgroundColor: 'black',
  },
  answerBox: {
    flexDirection: 'row',
  },
  answerTxt: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 14,
    marginRight: 20,
  },
});
