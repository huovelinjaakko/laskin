import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState();

  const addPressed = () => {
    setResult(parseInt(number1) + parseInt(number2));
  }

  const subtractPressed = () => {
    setResult(parseInt(number1) - parseInt(number2));
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput keyboardType='numeric' style={styles.input} placeholder='First number' onChangeText={number => setNumber1(number)} value={number1} />
      <TextInput keyboardType='numeric' style={styles.input} placeholder='Second number' onChangeText={number => setNumber2(number)} value={number2} />
      <View style={styles.button}>
        <Button onPress={addPressed} title="+" />
        <View style={styles.space} />
        <Button onPress={subtractPressed} title="-" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 100,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  button: {
    flexDirection: 'row',
    margin: 20,
  },
  space: {
    width: 20,
    height: 20
  },
});
