import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, Platform, TouchableOpacity } from "react-native";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';
import { getNextPrompt } from '../../APIMethods/GuessRequests/GuessAPI';
import AppButton from '../Components/AppButton';

const audioRecorderPlayer = new AudioRecorderPlayer();

const RecordAudio = ({room, handleNavigation, player, gameIndex}) => {
    const [recordSecs, setRecordSecs] = React.useState(0);
    const [recordTime, setRecordTime] = React.useState(0);
    const [prompt, setPrompt] = React.useState('');
    const [isRecording, setIsRecording] = React.useState(false);
    const [recording, setRecording] = React.useState(0);

    const path = RNFS.DocumentDirectoryPath + '/audio.m4a';

    useEffect(async() => {
        
        const prompt = await getNextPrompt(gameIndex, player)


        setPrompt(prompt)

        console.log('WE ARE IN RECORDING RIGHT HERE', prompt)


    }, [])
    const onStartRecord = async () => {
        setIsRecording(true);
        const result = await audioRecorderPlayer.startRecorder();
        audioRecorderPlayer.addRecordBackListener((e) => {
            setRecordSecs(e.current_position);
            setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.current_position)));
            return;
        });
        console.log('THIS IS THE RESULT',result);
    }

    const sendAudio = async (uri) => {
        console.log("Uploading " + uri);
  let apiUrl = 'http://192.168.0.159:8080/recording';
  let uriParts = uri.split('.');
  let fileType = uriParts[uriParts.length - 1];
    
  console.log("URI PARTS", uriParts);
    console.log("FILE TYPE", fileType);

  let formData = new FormData();
  formData.append('file', {
    uri,
    name: `recording.mp3`,
    type: `audio/mp3`,
  });

  formData.append('playerId', player.id);
  formData.append('gameIndex', prompt.gameIndex)
  formData.append('roomId', room.id)
  formData.append('chainId', prompt.chainId)


  let options = {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };

  console.log("POSTing " + uri + " to " + apiUrl);
   await fetch(apiUrl, options).then(response => response.json());

   return await fetch(apiUrl, {method: "GET"}).then(response => {
    console.log("response", response);
       return response
   }
    ).catch(error => {
        console.log('THIS IS THE ERROR 2',error);
    }
    )
}

const onStopRecord = async () => {
    console.log('Recording Stopped');
    setIsRecording(false);
    let result = await audioRecorderPlayer.stopRecorder();
    setRecording(result);

    audioRecorderPlayer.removeRecordBackListener();

}

const submitHandler = async() => {
    sendAudio(recording)
    handleNavigation('loading')
}
return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={{fontSize: 20}}>Your Prompt is: </Text>
      </View>
      <View style={styles.promptContainer}>
        <Text style={styles.text}>{prompt.title}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            isRecording ? onStopRecord() : onStartRecord();
          }}>
          <Text style={{fontSize: 30}}>{isRecording ? 'Stop' : 'Record'}</Text>
        </TouchableOpacity>
        <AppButton title="Submit" onPress={() => submitHandler()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 60,
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '20%',
    marginTop: 200,
  },
  promptContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
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
});

export default RecordAudio;