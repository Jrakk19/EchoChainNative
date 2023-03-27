import React from 'react';
import {StyleSheet, View} from 'react-native';
import { TextInput, Text } from '@react-native-material/core';
import AppButton from '../Components/AppButton';
import { createPrompt } from '../../APIMethods/PromptRequests/PromptAPI'
const PromptForm = ({room, handleNavigation}) => {
  //Create a text box and a button to join a game
  const [prompt, setPrompt] = React.useState('');

  const submitPrompt = async() => {

    createPrompt(prompt, room.id, 0);

    handleNavigation('loading');
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={{fontSize: 50}}>EchoChain</Text>
        <Text style={{fontSize: 25}}>Enter a Prompt</Text>
      </View>
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.input}
          value={prompt}
          onChangeText={newPrompt => setPrompt(newPrompt)}
          placeholder="Original Prompt"
        />
      </View>
      <View style={styles.viewContainer}>
        <AppButton title="Submit" onPress={() => submitPrompt(prompt)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    width: '100%',
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: '80%',
    marginBottom: '10%',
},
});

export default PromptForm;
