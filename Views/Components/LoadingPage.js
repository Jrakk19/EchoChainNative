import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import {
    Pusher,
    PusherMember,
    PusherChannel,
    PusherEvent,
  } from '@pusher/pusher-websocket-react-native';
  import Hypnosis from './LoadingSymbol';
  
const LoadingPage = ({roomCode, handleNavigation}) => {


    console.log("ROOM CODE RIGHT HERE", roomCode)
    useEffect(() => {
        const pusher = Pusher.getInstance();

        const initPusher = async () => {
            await pusher.init({
            apiKey: 'd2348725df402f73b423',
            cluster: 'us3',
        });

      await pusher.connect();

      const channel = await pusher.subscribe({
        channelName: roomCode,
        onEvent: (event) => {
          console.log(`Event received: ${event}`);
          if(event.eventName == 'guess'){
            console.log('HELL YA');
            handleNavigation('guess');
          }else if(event.eventName == 'start-game'){
            handleNavigation('prompt_form')
          }else if(event.eventName == 'record'){
            handleNavigation('record_audio')
          }else if(event.eventName == 'end-game'){
            handleNavigation('final-screen');
          }
        },
      });
    };
        
        initPusher();
       
}, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212', width: '100%' }}>

      <ActivityIndicator size="large" color="#0AFFF7" />
      <Text style={[styles.title, { marginTop: 10 }]}>Waiting For Other Players...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#0AFFF7',
    textShadowColor: '#0AFFF7',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 20,
    padding: 20

},
});
export default LoadingPage;
