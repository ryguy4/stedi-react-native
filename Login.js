import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Button } from 'react-native-elements'

const Login = () => {
  const [phone, onChangeText] = React.useState(null);
  const [otp, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={phone}
        placeholder="Phone Number"
      />
      <Button style={styles.bar}
      title="Send OTP"
      onPress={() => fetch('https://dev.stedi.me/twofactorlogin/' + phone, {method: 'POST'})}
    />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={otp}
        placeholder="One Time Password"
        keyboardType="numeric"
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
  },
  bar: {
    width: 'fit-content',
    alignSelf: 'center'
    
  },
});

export default Login;