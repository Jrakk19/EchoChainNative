import React, { useState, useEffect} from 'react';
import HomePage from './Views/Home/HomePage';
import { View, StyleSheet } from 'react-native';
import Login from './Views/Login/Login';
import Registration from './Views/Registration/Registration';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const checkLoggedIn = async() => {
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      console.log(loggedIn);
      console.log('Is logged in: ' + isLoggedIn)
      if (loggedIn === 'true') {
        setIsLoggedIn(true);
        setCurrentView('register')
      }else{
        setIsLoggedIn(false);
        setCurrentView('home')
      }
    };
    checkLoggedIn();

  }, []);

  const handleView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomePage
            handleLoginView={() => setCurrentView('login')}
            handleRegisterView={() => setCurrentView('register')}
          />
        );
      case 'login':
        return (
          <Login
            handleLoginUser={() => {
              setCurrentView('home');
              handleLoginUser();
            }}
          />
        );
      case 'register':
        return <Registration handleRegisterUser={handleRegisterUser}/>;
      default:
        return <HomePage />;
    }
  };

  const handleRegisterUser = (email, password, displayName) => {
    console.log('Register user');
    console.log(email);
    console.log(password);
    console.log(displayName);

    setCurrentView('home');
  };

  const handleLoginUser = async() => {
    console.log('Login user');
    setIsLoggedIn(true);
    AsyncStorage.setItem('isLoggedIn', 'true');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {handleView()}
    </View>
  );
};

export default App;