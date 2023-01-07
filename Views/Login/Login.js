import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from '@react-native-material/core'

const Login = ({ handleLoginUser }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <View style={styles.container}>
      <Text variant='h3' style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLoginUser} tintColor={'white'} color={'#4ED14B'}/>
    </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '80%',
        marginBottom: '20%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    button: {
        color: 'red'
    },
    title: {
        marginBottom: '20%'
    }
  });

export default Login;