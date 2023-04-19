import React from "react";
import { StyleSheet, View, Text } from "react-native";

const PlayerCard = ({ player }) => {
    
    //return a card with the player's name
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{player.name}</Text>
        </View>
    );
    };

    const generateRandomNeonColor = () => {
        const colors = [
          "#0AFFF7", // Neon cyan
          "#FF69B4", // Neon pink
          "#00FF00", // Neon green
          "#FF00FF", // Neon magenta
          "#FFA500", // Neon orange
          "#FFFF00", // Neon yellow
        ];
    
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      };
      const randomColor = generateRandomNeonColor();
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: 'transparent',
        width: '40%',
        height: '20%',
        borderColor: randomColor,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        shadowColor: randomColor,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    text: {
        color: randomColor,
    }
});

export default PlayerCard;