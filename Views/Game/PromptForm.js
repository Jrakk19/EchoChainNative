import React, { useEffect } from 'react';
import {StyleSheet, View} from 'react-native';
import { TextInput, Text } from '@react-native-material/core';
import AppButton from '../Components/AppButton';
import { createPrompt } from '../../APIMethods/PromptRequests/PromptAPI'
import { getPlayerInfo } from '../../APIMethods/PlayerRequests/PlayerAPI';
import { fontSize } from '@mui/system';
const PromptForm = ({room, handleNavigation, playerId, setPlayer}) => {
  //Create a text box and a button to join a game
  const [prompt, setPrompt] = React.useState('');

  useEffect(async() => {
    const updatedPlayer = await getPlayerInfo(playerId);
    console.log('UPDATED PLAYER', updatedPlayer)
    setPlayer(updatedPlayer);
  },[])
  const submitPrompt = async() => {
    handleNavigation('loading');
    setTimeout(() => {
      createPrompt(prompt, room.id, 0, playerId);

    }, 1000)

    
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <View style={styles.viewContainer}>
        <Text style={styles.title}>EchoChain</Text>
        <Text style={[styles.title, {fontSize: 25}]}>Enter a Prompt</Text>
      </View>
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.input}
          value={prompt}
          onChangeText={newPrompt => setPrompt(newPrompt)}
          placeholder="Original Prompt"
          variant='standard'
          color='#0AFFF7'
          inputStyle={{color: '#0AFFF7'}}
        />
      </View>
      <View style={styles.viewContainer}>
        <AppButton title="Submit" onPress={() => submitPrompt(prompt)} />
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#121212',
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
    backgroundColor: '#121212', 
    borderColor: '#0AFFF7', 
    borderWidth: 1, 
    borderRadius: 10, 
    color: '#0AFFF7', 
    paddingHorizontal: 10, 
    shadowColor: "#0AFFF7",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 3,

},
innerContainer: {
  flex:0.95,
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: '#121212',
  shadowColor: "#0AFFF7",
  shadowOffset: {width: 0, height: 0},
  shadowOpacity: 1,
  shadowRadius: 3,
  width: '95%',
  borderRadius: 20,
},
title: {
  fontSize: 50,
      color: '#0AFFF7',
      textShadowColor: '#0AFFF7',
      textShadowOffset: {width: 0, height: 0},
      textShadowRadius: 20,
      padding: 20

},
});

export default PromptForm;
