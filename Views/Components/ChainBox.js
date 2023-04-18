import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Sound from 'react-native-sound';
import RNFS from 'react-native-fs';

const ChainBox = (item) => {
    console.log('CHAINBOX ITEM', item.item)

    const path = RNFS.DocumentDirectoryPath + '/test.m4a';

    useEffect(async() => {
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
    }, [])


   
  return (
    <View style={styles.container}>
        {item.item.title ? <Text>{item.item.title}</Text> : <Text>Audio</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        margin: 10,
        height: 100,
    }
});

export default ChainBox;