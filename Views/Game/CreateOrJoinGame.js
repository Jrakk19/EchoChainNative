import React from "react";
import { StyleSheet, View, Text } from "react-native";
import  Button from "../Components/AppButton";

const CreateOrJoinGame = ({handleCreateGame, handleJoinGame}) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewContainer}>
                <Text style={{fontSize: 50}}>Echo Chain</Text>
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
    }
});

export default CreateOrJoinGame;