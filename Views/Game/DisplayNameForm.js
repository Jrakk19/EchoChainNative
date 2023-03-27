import React from 'react';
import {StyleSheet, View} from 'react-native';
import { TextInput, Text } from '@react-native-material/core';
import AppButton from '../Components/AppButton';
import { createPlayer } from '../../APIMethods/PlayerRequests/PlayerAPI';
const DisplayNameForm = ({handleNavigation, setPlayer, roomCode}) => {
  //Create a text box and a button to join a game
  const [displayName, setDisplayName] = React.useState('');

  const handleJoinGame = async() => {
    let newPlayer = await createPlayer(displayName, roomCode);

    setPlayer(newPlayer);

    handleNavigation('lobby')
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={{fontSize: 50}}>Echo Chain</Text>
      </View>
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.input}
          value={displayName}
          onChangeText={newDisplayName => setDisplayName(newDisplayName)}
          placeholder="Display Name"
        />
      </View>
      <View style={styles.viewContainer}>
        <AppButton title="Join Game" onPress={() => handleJoinGame()} />
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

export default DisplayNameForm;
