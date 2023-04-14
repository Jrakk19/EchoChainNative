import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppButton from "../Components/AppButton";
import PlayerCard from "../Components/PlayerCard";
import { getAllPlayersInGame } from "../../APIMethods/RoomRequests/RoomAPI";
import {
    Pusher,
    PusherMember,
    PusherChannel,
    PusherEvent,
  } from '@pusher/pusher-websocket-react-native';

  

const Lobby = ({room, handleStartGame, handleNavigation}) => {

      
    const [players, setPlayers] = useState(null);


    useEffect(() => {
        const pusher = Pusher.getInstance();

        const initPusher = async () => {
            await pusher.init({
            apiKey: 'd2348725df402f73b423',
            cluster: 'us3',
        });

      await pusher.connect();

      const channel = await pusher.subscribe({
        channelName: room.code,
        onEvent: (event) => {
          console.log(`Event received: ${event}`);
          if(event.eventName == 'player-joined'){
            console.log('HELL YA')
            updatePlayers();
          }else if(event.eventName == 'start-game'){
            handleNavigation('prompt_form')
          }
        },
      });
    };
        const getPlayers = async () => {
            const currentPlayers = await getAllPlayersInGame(room.id);
            console.log(currentPlayers)
            setPlayers(currentPlayers);
            console.log('PLAYERS SET', players)

        };
        initPusher();
        getPlayers();
    }, []);
    const updatePlayers = async() => {
        const currentPlayers = await getAllPlayersInGame(room.id);
            console.log(currentPlayers)
            setPlayers(currentPlayers);
            console.log('PLAYERS UPDATED', players)
    }
    return (
        <View style={styles.container}>
            <View style={styles.roomCode}>
                <Text style={{fontSize: 20}}>Room Code: {room.code}</Text>
            </View>
            <View style={styles.playerCards}>
                {players ? players.map((player) => (
                    <PlayerCard player={{name: player.displayName}} key={player.id} />
                )) : null}
            </View>
            <View style={styles.viewContainer}>
                <AppButton title="Start Game" onPress={() => handleStartGame()}/>
            </View>
        </View>
    );
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
    roomCode: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    playerCards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: '50%',
    }
});

export default Lobby;
