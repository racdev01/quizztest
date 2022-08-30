import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {startover} from '../helpers/user';
import {ANSWERS} from '../data/answers';

const Score = () => {
  const {score} = useSelector(state => state.user.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', color: 'black'}}>Felicitations !</Text>
      <Text>Voici votre score</Text>
      <Text style={styles.boxText}>
        {score} / {ANSWERS.length}
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          dispatch(startover());
        }}>
        <Text style={{color: 'white'}}>refaire le test</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 2,
    borderRadius: 16,
    paddingVertical: 16,
    marginTop: 24,
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
  button: {
    backgroundColor: '#34b4eb',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 8,
    padding: 8,
    elevation: 2,
  },
});

export default Score;
