import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AppButton from '../Components/AppButton';
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';



const GuessPage = ({handleNavigation, player}) => {
    const path = RNFS.DocumentDirectoryPath + '/test.m4a';
    const [guess, setGuess] = React.useState('');
    const [isPlaying, setIsPlaying] = React.useState(false);

    const getAndPlayAudio = async () => {
        await RNFS.downloadFile({ fromUrl: 'http://192.168.0.159:8080/recording/28fee129-cef4-424c-b6db-056345122d67', toFile: path }).promise.then(() => {
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
    console.log('USER ID', player._j.id)
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress = {() => {getAndPlayAudio()}}>
          <Text style={{fontSize: 30}}>Listen Again</Text>
        </TouchableOpacity>
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
      }
});

export default GuessPage;