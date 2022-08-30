import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {ANSWERS} from '../data/answers';
import {useDispatch, useSelector} from 'react-redux';
import {answer} from '../helpers/user';

const Counter = () => {
  const {currentQuestion} = useSelector(state => state.user.value);
  const dispatch = useDispatch();

  const [tempsPasse, setTimeLeft] = useState(0);
  let timer = () => {};

  const startTimer = () => {
    timer = setTimeout(() => {
      if (tempsPasse >= ANSWERS[currentQuestion].time) {
        dispatch(answer({currentQuestion: currentQuestion + 1}));
        setTimeLeft(0);
        clearTimeout(timer);
        return false;
      }
      setTimeLeft(tempsPasse + 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      <View style={{flex: 2, margin: 2, alignItems: 'center'}}>
        <Text>Question</Text>
        <Text style={styles.boxText}>
          {currentQuestion} / {ANSWERS.length}
        </Text>
      </View>
      <View style={{flex: 3, margin: 2, alignItems: 'center'}}>
        <Text>Temps ecoule</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.boxText}>{tempsPasse}</Text>
          <Text style={[styles.boxText, {color: '#f58742'}]}>
            {ANSWERS[currentQuestion].time}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 16,
    position: 'absolute',
    bottom: -50,
    left: '10%',
  },
  box: {
    backgroundColor: '#d4daff',
  },
  boxText: {
    padding: 10,
    margin: 2,
    color: '#2f48d6',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#d4daff',
    borderRadius: 4,
  },
});

export default Counter;
