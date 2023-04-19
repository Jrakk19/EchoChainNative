import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Button } from "@react-native-material/core";

const AppButton = ({ title, onPress}) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
    }

    const handlePressOut = () => {
        setIsPressed(false);
    }

    return (
        <TouchableOpacity
        onPress={onPress}
        style={[styles.button, isPressed ? styles.buttonPressed : null]}
        onPressIn = {handlePressIn}
        onPressOut = {handlePressOut}
        >
        <Text style={[styles.buttonText, isPressed ? styles.textHidden : null]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 282,
        height: 72,
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: "#0AFFF7",
        borderWidth: 1,
        backgroundColor: 'transparent',
        shadowColor: "#0AFFF7",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 30,
        
    },
    buttonText:{
        color: "#0AFFF7",
        fontSize: 24,
    },
    textHidden: {
        color: '#121212'
    },
    buttonPressed: {
        backgroundColor: "#0AFFF7",
    }
});

export default AppButton;
