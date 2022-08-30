import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {ANSWERS} from '../data/answers';
import {useDispatch, useSelector} from 'react-redux';
import {answer} from '../helpers/user';

const Question = () => {
  const dispatch = useDispatch();
  const {currentQuestion} = useSelector(state => state.user.value);
  const [isSelectedArray, setIsSelectedArray] = useState([]);

  const saveAnswer = () => {
    dispatch(answer({currentQuestion: currentQuestion + 1}));
    console.log('currentQuestion = ' + currentQuestion);
  };

  const handleChange = index => {
    //setIsSelectedArray()
  };

  return (
    <View style={styles.container}>
      {ANSWERS.map((question, index) => {
        if (currentQuestion == index + 1) {
          return (
            <View key={question.id} style={{width: '100%', marginBottom: 10}}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                Question {question.id}
              </Text>
              <Text style={{paddingVertical: 4}}>{question.label}</Text>
              {question.answers.map((choix, checkIndex) => (
                <View key={choix.label} style={styles.checkboxContainer}>
                  <CheckBox
                    value={isSelectedArray[checkIndex]}
                    onChange={handleChange(checkIndex)}
                  />
                  <Text style={styles.label}>{choix.label}</Text>
                </View>
              ))}
            </View>
          );
        }
      })}
      <Pressable onPress={saveAnswer} style={styles.button}>
        <Text style={{color: 'white'}}>Suivant</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignItems: 'flex-start',
    position: 'absolute',
    top: 300,
    left: '10%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 4,
    //backgroundColor: 'orange',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  button: {
    backgroundColor: '#34b4eb',
    borderRadius: 20,
    paddingHorizontal: 64,
    paddingVertical: 12,
    alignSelf: 'center',
    marginTop: 8,
    zIndex: 0.5,
  },
});

export default Question;
