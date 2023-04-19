import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Sound from 'react-native-sound';
import RNFS from 'react-native-fs';

const ChainBox = (item) => {
    console.log('CHAINBOX ITEM', item.item)

    const path = RNFS.DocumentDirectoryPath + '/test.m4a';

    const playAudio = async() => {
        if(item.item.s3Key) {
            await RNFS.downloadFile({
                fromUrl: `https://echo-chain-api.herokuapp.com/recording/${item.item.id}`,
                toFile: path}).promise.then(() => {
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
                })});
        }
    }
    useEffect(async() => {
        playAudio();
    }, [])


   
  return (
    <TouchableOpacity style ={styles.container} onPress={() => playAudio()}>
    
        {item.item.title ? <Text style={styles.text}>{item.item.title}</Text> : <Text style={styles.text}>Audio</Text>}
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderWidth: 1,
        borderColor: '#0AFFF7',
        borderRadius: 10,
        margin: 10,
        height: 100,
        shadowColor: '#0AFFF7',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,

    },
    text: {
        color: '#0AFFF7',
        fontSize: 20,
        textShadowColor: '#0AFFF7',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 1,

    }
});

export default ChainBox;