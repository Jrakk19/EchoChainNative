import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AppButton from '../Components/AppButton';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';

const audioRecordPlayer = new AudioRecorderPlayer();

const PromptPage = ({prompt, handleNavigation}) => {
  const [isRecording, setIsRecording] = React.useState(false);
  const [recordSecs, setRecordSecs] = React.useState(0);
  const [recordTime, setRecordTime] = React.useState(0);
  const [recording, setRecording] = React.useState(0);

  const StartRecording = async () => {
    console.log('Start Recording');
    setIsRecording(true);
    const result = await audioRecordPlayer.startRecorder();
    audioRecordPlayer.addRecordBackListener(e => {
      setRecordSecs(e.current_position);
      setRecordTime(audioRecordPlayer.mmssss(Math.floor(e.current_position)));
      return;
    });
    console.log('Recording Started', result);
  };

  const StopRecording = async () => {
    console.log('Recording Stopped');
    setIsRecording(false);
    let result = await audioRecordPlayer.stopRecorder();
    setRecording(result);

    audioRecordPlayer.removeRecordBackListener();

    //handleNavigation('guess');
  };
  const sendAudio = async uri => {
    console.log('Uploading ' + uri);
    let apiUrl = 'http://192.168.0.159:8080/recording';
    let uriParts = uri.split('.');
    let fileType = uriParts[uriParts.length - 1];

    console.log('URI PARTS', uriParts);
    console.log('FILE TYPE', fileType);

    let formData = new FormData();
    formData.append('file', {
      uri,
      name: `recording.mp3`,
      type: `audio/mp3`,
    });

    formData.append('playerId', '75c34d43-15ce-48b4-9455-05077542e0a3')
    formData.append('gameIndex', 1)
    formData.append('roomId', '18f8e9f7-d660-4c30-bc23-b0c2308f26ab')
    let options = {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };

    console.log('POSTing ' + uri + ' to ' + apiUrl);
    await fetch(apiUrl, options).then(response => response.json());

    return await fetch(apiUrl, {method: 'GET'})
      .then(response => {
        console.log('response', response);
        return response;
      })
      .catch(error => {
        console.log('THIS IS THE ERROR 2', error);
      });
  };

  const submitHandler = async() => {
     let result = await sendAudio(recording).then(response => {
      console.log("this is the response", response);
      return response;
    }).catch(error => {
      console.log('ERROR', error);
    })

    handleNavigation('guess')

  }
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={{fontSize: 20}}>Your Prompt is: </Text>
      </View>
      <View style={styles.promptContainer}>
        <Text style={styles.text}>{prompt}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            isRecording ? StopRecording() : StartRecording();
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

export default PromptPage;
