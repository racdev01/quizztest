import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Counter from './Counter';
import Question from './Question';
import Score from './Score';
import {ANSWERS} from '../data/answers';

const Layout = () => {
  const {username, profileImage, currentQuestion} = useSelector(
    state => state.user.value,
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{paddingHorizontal: 20}}>
          <Image
            style={styles.logo}
            source={{
              uri: `${profileImage}`,
            }}
          />
          <Text style={styles.greetingTitle}>Hi , {username}</Text>
          <Text style={styles.text}>Lorem ipsum dolor sit amet</Text>
        </View>
        {currentQuestion < ANSWERS.length ? <Counter /> : null}
      </View>
      {currentQuestion < ANSWERS.length ? <Question /> : <Score />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  header: {
    height: 200,
    backgroundColor: '#66b9ed',
    borderRadius: 18,
    paddingTop: 50,
  },
  logo: {
    alignSelf: 'flex-end',
    width: 50,
    height: 50,
    borderRadius : 16
  },
  greetingTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Layout;
