import React from "react";
import { StyleSheet, View, Text } from "react-native";

const PlayerCard = ({ player }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{player.name}</Text>
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: 'red',
        width: '20%',
    },
    text: {
        fontSize: 20,
    }
});

export default PlayerCard;