import React, { useState } from 'react';
import { View,StyleSheet } from 'react-native';
import { TextInput, Button, Text } from '@react-native-material/core';

const Registration = ({handleRegisterUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  return (
    <View style={styles.container}>

        <Text variant='h3' style={styles.title}>Register</Text>

      
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={newEmail => setEmail(newEmail)}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={newPassword => setPassword(newPassword)}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={displayName}
        onChangeText={newDisplayname => setDisplayName(newDisplayname)}
        placeholder="Display Name"
      />
      <Button title="Register" onPress={() => {handleRegisterUser(email, password, displayName)}} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    input: {
        width: '80%',
        marginBottom: '10%',
    },
    title: {
        marginBottom: '20%'
    }
});

export default Registration;