const apiUrl = 'https://echo-chain-api.herokuapp.com/prompts'
export const createPrompt = async(prompt, roomId, gameIndex, playerId) => {

    console.log('VARIABLES HERE', prompt, roomId, gameIndex, playerId)
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          //'Authorization': 'Bearer <token>'
        },
        body: JSON.stringify({
          title: prompt,
          roomId: roomId,
          gameIndex: gameIndex,
          playerId: playerId
        })
      };
    await fetch(`${apiUrl}/original-prompt`, options).then(response => {return response.json()})
    

}
