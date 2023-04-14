const apiUrl = 'http://echo-Publi-1S8K57V8SJDAW-1256388934.us-east-1.elb.amazonaws.com/prompts'
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
