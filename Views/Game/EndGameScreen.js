import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../Components/AppButton";
import { leaveRoom } from "../../APIMethods/RoomRequests/RoomAPI";

const EndGameScreen = ({player, handleNavigation}) => {
    const leaveRoomandGoHome = async (playerId) => {
        await leaveRoom(playerId);
        handleNavigation('create_or_join');
    }
    return (
        <View style={styles.container}>
        <Text style={{fontSize: 36}}>Thank you for playing</Text>
        <Text style={{fontSize: 36}}>{player.displayName}</Text>
        <Text style={{fontSize: 36}}>Please exit the game now</Text>

        <View>
            <AppButton title="Exit Game" onPress={() => leaveRoomandGoHome(player.id)} />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    }
});

export default EndGameScreen;
