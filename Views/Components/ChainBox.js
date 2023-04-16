import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const ChainBox = (item) => {
    console.log('CHAINBOX ITEM', item.item.id)

   
  return (
    <View style={styles.container}>
        {item.item.title ? <Text>{item.item.title}</Text> : <Text>Audio</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        margin: 10,
        height: 100,
    }
});

export default ChainBox;