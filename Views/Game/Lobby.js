import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AppButton from "../Components/AppButton";
import PlayerCard from "../Components/PlayerCard";

const Lobby = () => {
    return (
        <View style={styles.container}>
            <View style={styles.roomCode}>
                <Text style={{fontSize: 10}}>Room Code: 1234</Text>
            </View>
            <View style={styles.playerGrid}>
                <PlayerCard player={{name: 'Player 1'}}/>
                <PlayerCard player={{name: 'Player 2'}}/>
            </View>
            <View>
                <AppButton />
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
    playerGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        //alignItems: 'center',
        width: '100%',
    },
    roomCode: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
    }
});

export default Lobby;