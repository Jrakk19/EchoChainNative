import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../Components/AppButton";
import { leaveRoom } from "../../APIMethods/RoomRequests/RoomAPI";

const EndGameScreen = ({ player, handleNavigation }) => {
  const leaveRoomandGoHome = async (playerId) => {
    await leaveRoom(playerId);
    handleNavigation("create_or_join");
  };
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
      <Text style={styles.titleText}>Thank you for playing</Text>
      <Text style={styles.nameText}>{player.displayName}</Text>
      <Text style={styles.titleText}>Please exit the game now</Text>
        <View style={{ height: 100 }} />
      <View>
        <AppButton title="Exit Game" onPress={() => leaveRoomandGoHome(player.id)} />
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#121212",
  },
  titleText: {
    fontSize: 36,
    color: "#0AFFF7",
    textShadowColor: "#0AFFF7",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    margin: 10,
    textAlign: "center",
},
  nameText: {
    fontSize: 36,
    color: "#FF073A", // Neon red
    textShadowColor: "#FF073A",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    marginBottom: 15,
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
});

export default EndGameScreen;
