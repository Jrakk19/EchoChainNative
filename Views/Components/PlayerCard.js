import React from "react";
import { StyleSheet, View, Text } from "react-native";

const PlayerCard = ({ player }) => {
    //return a card with the player's name
    return (
        <View style={styles.container}>
            <Text>{player.name}</Text>
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: 'red',
        width: '40%',
        height: '20%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
    },
    text: {
        fontSize: 20,
    }
});

export default PlayerCard;