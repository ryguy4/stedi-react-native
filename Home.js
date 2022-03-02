import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';

function Home(props) {
  const logOut = () =>{
    try{
      props.setUserLoggedIn(false);
      // console.log(props.setUserLoggedIn)
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <View>
      <Bar setUserLoggedIn={props.setUserLoggedIn}/>
      <Icons />
    </View>
  );
};

export default Home;
