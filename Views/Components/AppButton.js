import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "@react-native-material/core";

const AppButton = ({ title, onPress, color = "#4ED14B" }) => {
    return (
        <Button
        title={title}
        onPress={onPress}
        style={[styles.button, { backgroundColor: color , }]}
        />
    );
};

const styles = StyleSheet.create({
    button: {
        width: 282,
        height: 72,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default AppButton;
