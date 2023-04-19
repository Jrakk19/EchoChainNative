import React, { useEffect } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AppButton from '../Components/AppButton';
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';
import { TextInput } from '@react-native-material/core';
import { makeGuess } from '../../APIMethods/GuessRequests/GuessAPI';
import { getCurrentAudio } from '../../APIMethods/AudioRequests/AudioAPI';



const GuessPage = ({handleNavigation, player, gameIndex, roomId, setGameIndex}) => {
    const path = RNFS.DocumentDirectoryPath + '/test.m4a';
    const [guess, setGuess] = React.useState('');
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [audioData, setAudioData] = React.useState();

    console.log('THIS IS THE GUESS PLAYER', player.id);
    
    useEffect(async() => {
        const audio = await getCurrentAudio(gameIndex, player);

        setAudioData(audio);

        console.log('AUDIO API', audio)
        console.log("AUDIO DATA", audioData)

        setGameIndex(gameIndex + 1)

    }, [])

    let request = {
        gameIndex: gameIndex - 1,
        player: player
      };
      
      const apiURL = 'https://echo-chain-api.herokuapp.com/recording';
      const requestJson = JSON.stringify(request);
      const encodedRequestJson = encodeURIComponent(requestJson);
      const url = `${apiURL}/next-audio`;

    const getAndPlayAudio = async () => {
        await RNFS.downloadFile({ fromUrl: `${url}?request=${encodedRequestJson}` , toFile: path, method: "GET", headers: {          Accept: 'application/json',
    } }).promise.then(() => {
            Sound.setCategory('Playback');
            const sound = new Sound(path, '', (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                    return;
                }
                sound.play((success) => {
                    if (success) {
                        console.log('successfully finished playing');
                        sound.release();
                    } else {
                        console.log('playback failed due to audio decoding errors');
                    }
                }
                );
        });
        })
        
    }

    const submitGuess = async(guess) => {

        console.log("THIS IS THE AUDIO DATA", audioData)
        console.log('GAME INDEX', gameIndex);
        handleNavigation('loading');
        setTimeout(() => {
            makeGuess(guess, roomId, gameIndex, audioData.chainId, player.id );

        }, 1000)
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
            <View>
                <Text style={[styles.title, {fontSize: 40}]}>Make Your Guess</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress = {() => {getAndPlayAudio()}}>
          <Text style={[styles.title, {fontSize: 25, textShadowRadius: 1}]}>Listen Again</Text>
        </TouchableOpacity>
        <TextInput 
            value= {guess}
            style={styles.input}
            onChangeText={newGuess => setGuess(newGuess)}
            placeholder="Guess"
            variant='standard'
          color='#0AFFF7'
          inputStyle={{color: '#0AFFF7'}}
            /> 

            <AppButton title="Submit" onPress={() => submitGuess(guess)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: '#121212',
        width: '100%',
    },
    viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
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
    button: {
        justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '15%',
    borderRadius: 500,
    marginTop: 20,
    borderColor: '#0AFFF7',
    borderWidth: 3,
    shadowColor: "#0AFFF7",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 3,
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
    title: {
        fontSize: 50,
            color: '#0AFFF7',
            textShadowColor: '#0AFFF7',
            textShadowOffset: {width: 0, height: 0},
            textShadowRadius: 20,
            padding: 20,
            justifyContent: 'center',
      
      },
});

export default GuessPage;