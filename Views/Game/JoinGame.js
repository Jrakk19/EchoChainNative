import React from 'react';
import {StyleSheet, View} from 'react-native';
import { TextInput, Text } from '@react-native-material/core';
import AppButton from '../Components/AppButton';
const JoinGame = ({handleJoinGame}) => {
  //Create a text box and a button to join a game
  const [roomCode, setRoomCode] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={{fontSize: 50}}>Echo Chain</Text>
      </View>
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.input}
          value={roomCode}
          onChangeText={newRoomCode => setRoomCode(newRoomCode.toUpperCase())}
          placeholder="Room Code"
        />
      </View>
      <View style={styles.viewContainer}>
        <AppButton title="Next" onPress={() => handleJoinGame(roomCode)} />
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

export default JoinGame;
