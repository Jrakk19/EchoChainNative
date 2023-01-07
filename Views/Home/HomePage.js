import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button} from '@react-native-material/core';

const HomePage = ({ navigation, handleLoginView, handleRegisterView }) => {

  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() => handleLoginView()}
        style={styles.button}
      />
      <Button
        title="Register"
        onPress={() => handleRegisterView()}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '30%',
    margin: 10,
  },
});

export default HomePage;