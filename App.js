import React, { useState, useEffect} from 'react';
import HomePage from './Views/Home/HomePage';
import { View, StyleSheet } from 'react-native';
import Login from './Views/Login/Login';
import Registration from './Views/Registration/Registration';
import AsyncStorage from '@react-native-community/async-storage';
import CreateOrJoinGame from './Views/Game/CreateOrJoinGame';
import Lobby from './Views/Game/Lobby';
import { Pusher } from '@pusher/pusher-websocket-react-native';
import GuessPage from './Views/Game/GuessPage';
import JoinGame from './Views/Game/JoinGame';
import PromptPage from './Views/Game/Prompt';
import { getPlayerInfo } from './APIMethods/PlayerRequests/PlayerAPI';
import { createRoom, getRoomByCode } from './APIMethods/RoomRequests/RoomAPI';
import { login } from './APIMethods/UserRequests/UserAPI';
import DisplayNameForm from './Views/Game/DisplayNameForm';
import { initializeGame } from './APIMethods/RoomRequests/RoomAPI';
import LoadingPage from './Views/Components/LoadingPage';
import PromptForm from './Views/Game/PromptForm';
import RecordAudio from './Views/Game/RecordAudio';
import FinalScreen from './Views/Game/FinalScreen';

const REFRESH_INTERVAL = 60000;

const App = () => {
 
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [player, setPlayer] = useState(null);
  const [currentView, setCurrentView] = useState('home');
  const [room, setRoom] = useState(null);
  const [gameIndex, setGameIndex] = useState(0);

  useEffect(() => {
    const checkLoggedIn = async() => {
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      console.log(loggedIn);
      console.log('Is logged in: ' + isLoggedIn)
      if (loggedIn === 'true') {
        setIsLoggedIn(true);
        setCurrentView('create_or_join');
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
      case 'create_or_join':
        return <CreateOrJoinGame handleCreateGame={handleCreateGameView} handleJoinGame={handleJoinGameView} />;
      case 'lobby':
        return <Lobby handleStartGame={handleStartGame} room = {room} handleNavigation={setCurrentView}/>;
      case 'join_game':
        return <JoinGame handleJoinGame={handleJoinGame}/>;
      case 'prompt': 
        return <PromptPage prompt = {'cry'} handleNavigation ={setCurrentView}/>;
      case 'guess':
        return <GuessPage roomId={room.id} handleNavigation ={setCurrentView} player = {player} setGameIndex={setGameIndex} gameIndex = {gameIndex} />;
      case 'displayName':
        return <DisplayNameForm handleNavigation = {setCurrentView} setPlayer = {setPlayer} roomCode = {room.code}/>
      case 'loading':
        return <LoadingPage roomCode={room.code} handleNavigation={setCurrentView}/>
      case 'prompt_form':
        return <PromptForm room={room} handleNavigation={setCurrentView} playerId={player.id}/>
      case 'record_audio':
        return <RecordAudio room={room} handleNavigation={setCurrentView} player = {player} gameIndex={gameIndex} />
      case 'final-screen':
        return <FinalScreen roomId={room.id} handleNavigation={setCurrentView} player = {player} />
        default:
        return <HomePage />;
    }
  };

  const handleCreateGameView = async() => {
    let room = await createRoom();
    console.log(room)
    setRoom(room);

    setCurrentView('displayName');
    //create room from api and set state
    //send user to lobby of created room
    
  }

  const handleJoinGameView = () => {
    setCurrentView('join_game');
    //join room from api and set state
    //send user to lobby of joined room
  }

  const handleStartGame = () => {
    //start game from api and set state
    initializeGame(room.id);
    //send user to game
    // setTimeout(() => {
    //   setCurrentView('lobby');
    // }, 5000);
  }
  const handleJoinGame = async(roomCode) => {
    //join room from api and set state
    //send user to lobby of joined room
    let roomy = await getRoomByCode(roomCode);

    setRoom(roomy);

    setCurrentView('displayName')

    console.log(roomy)
    console.log('Joining game: ' + roomCode);
  }
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
    setCurrentView('create_or_join');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {handleView()}
    </View>
  );
};

export default App;