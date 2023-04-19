import React from "react";
import { StyleSheet, View, Text } from "react-native";
import  Button from "../Components/AppButton";

const CreateOrJoinGame = ({handleCreateGame, handleJoinGame}) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
            <View style={styles.viewContainer}>
                <Text style={styles.title}>Echo Chain</Text>
            </View>
            <View style={styles.viewContainer}>
                <Button 
                title="Create Game" 
                onPress={() => handleCreateGame()}
                />
            </View>
            <View style={styles.viewContainer}>
                <Button
                title="Join Game"
                onPress={() => handleJoinGame()}
                />
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: '#121212',
        width: '100%',
        shadowColor: "#0AFFF7",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 40,
    },
    innerContainer: {
        flex:0.95,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: '#121212',
        shadowColor: "#0AFFF7",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 3,
        width: '95%',
        borderRadius: 20,
        
    },
    viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
 
    },
    title: {
        fontSize: 50,
        color: '#0AFFF7',
        textShadowColor: '#0AFFF7',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 20,
        padding: 20

    },
});

export default CreateOrJoinGame;