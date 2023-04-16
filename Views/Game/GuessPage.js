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
      
      const apiURL = 'http://192.168.0.159:8080/recording';
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
            <View>
                <Text style={{fontSize: 48}}>Make Your Guess</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress = {() => {getAndPlayAudio()}}>
          <Text style={{fontSize: 30}}>Listen Again</Text>
        </TouchableOpacity>
        <TextInput 
            value= {guess}
            style={styles.input}
            onChangeText={newGuess => setGuess(newGuess)}
            placeholder="Guess"
            /> 

            <AppButton title="Submit" onPress={() => submitGuess(guess)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: 'white',
        width: '100%',
    },
    viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: '15%',
        borderRadius: 500,
        marginTop: 20,
        borderColor: 'black',
        borderWidth: 3,
      },
      input: {
        width: '80%',
        marginBottom: '10%',
    },
});

export default GuessPage;