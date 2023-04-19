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
      <View style={styles.innerContainer}>
      <View style={styles.viewContainer}>
        <Text style={styles.title}>Echo Chain</Text>
      </View>
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.input}
          value={displayName}
          onChangeText={newDisplayName => setDisplayName(newDisplayName)}
          placeholder="Display Name"
          variant='standard'
          color='#0AFFF7'
          inputStyle={{color: '#0AFFF7'}}
        />
      </View>
      <View style={styles.viewContainer}>
        <AppButton title="Join Game" onPress={() => handleJoinGame()} />
        <View style={{height: 20}} />
        <AppButton title="Back" onPress={() => handleNavigation("create_or_join")} />
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
  title: {
    fontSize: 50,
        color: '#0AFFF7',
        textShadowColor: '#0AFFF7',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 20,
        padding: 20
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
});

export default DisplayNameForm;
