import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function SettingsScreen(props) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    message: {
      textAlign: 'center',

    }
  
  })
  return(
    <View style={styles.container}>
      <Text style={styles.message}>Welcome {props.email}</Text>
    </View>
  )

}