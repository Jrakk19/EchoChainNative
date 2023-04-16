import { G } from "react-native-svg";

const apiURL = 'http://192.168.0.159:8080/guess'

export const getNextPrompt = async (gameIndex, player) => {
    const requestObject = {
      gameIndex: gameIndex,
      player: player,
    };
    const requestJson = JSON.stringify(requestObject);
    const encodedRequestJson = encodeURIComponent(requestJson);
    const url = `${apiURL}/next-guess`;
  
    let options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        // 'Authorization': 'Bearer <your_token_here>',
      },
    };
  
    let result = await fetch(`${url}?request=${encodedRequestJson}`, options).then((response) => {
      return response.json();
    });
  
    console.log('THIS IS THE PROMPT', result);
  
    return result;
  };

  export const makeGuess = async(title, roomId, gameIndex, chainId, playerId) => {

    console.log("THIS IS THE VAIRABLE", title, roomId, gameIndex, chainId, playerId )
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            title: title,
            roomId: roomId,
            gameIndex: gameIndex,
            chainId: chainId,
            playerId: playerId
        })
    }

    await fetch(`${apiURL}/create`, options).then(response => {
        return response.json()
    })
  }
  