import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import {
    Pusher,
    PusherMember,
    PusherChannel,
    PusherEvent,
  } from '@pusher/pusher-websocket-react-native';
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
          }
        },
      });
    };
        
        initPusher();
       
}, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '100%' }}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={{ marginTop: 10 }}>Loading...</Text>
    </View>
  );
};

export default LoadingPage;
