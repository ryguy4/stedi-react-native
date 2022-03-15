import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Alert } from "react-native";
import { Button } from 'react-native-elements'
// import setUserLoggedIn from './App.js'

export default function Login(props){
  const [phone, onChangeText] = React.useState(null);
  const [otp, onChangeNumber] = React.useState(null);
  const tryLogin = () => {
    try {
     fetch('https://dev.stedi.me/twofactorlogin', {
      method: 'POST',
      headers:{
        Accept:'application/text',
        "Content-Type":"application/text"
      },
      body: JSON.stringify({
        phoneNumber: phone, 
        oneTimePassword: otp
      })
    }).then((response) => response.text())
    .then((authKey) => {
      validateAuth(authKey);
      // call another function to validate authkey
    })
   } catch (error) {
     console.error(error);
   }
 }

 const validateAuth = (authKey) => {
  // console.log(authKey)
  fetch('https://dev.stedi.me/validate/' + authKey, {
      method: 'GET',
      headers:{
        Accept:'application/text',
        "Content-Type":"application/text"
      },
    }).then((response) => {
      const statusCode = response.status;
      const data = response.text();
      return [statusCode, data];
    })
    .then(([res, data]) => {
      //console.log(res, data);
      if (res == 200){
            
        props.setUserLoggedIn(true)
        props.updateEmail(data)
        // Save authkey

      }else{
        Alert.alert("Invalid Login!")
      }
    })
 }

  return (
    <SafeAreaView style={styles.textView}>
      <Text style={{alignSelf: 'center', fontSize: 30}}>
        Login
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={phone}
        placeholder="Phone Number"
      />
      <Button style={styles.bttn}
      title="Send OTP"
      onPress={() => {
        fetch('https://dev.stedi.me/twofactorlogin/' + phone, {
          method: 'POST',
          headers:{
            Accept:'application/text',
            "Content-Type":"application/text"
          }
        }
        ).then((response) => {
          if (response.status != 200){
            Alert.alert("Invalid Phone Number")
          }
          
        })
      }}
    />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={otp}
        placeholder="One Time Password"
        keyboardType="numeric"
      />
      <Button style={styles.bttn}
      title="Login"
      onPress={() => tryLogin() }
    />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '75%',
    alignSelf: 'center'
  },
  bttn: {
    alignSelf: 'center'
    
  },
  textView: {
    justifyContent: 'center',
    flex: 1
  }
});
