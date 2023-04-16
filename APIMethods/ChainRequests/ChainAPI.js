const apiURL = 'http://192.168.0.159:8080/room'

export const getChain = (roomId, playerNumber) => {
    const requestObject = {
        roomId: roomId,
        playerNumber: playerNumber
    }
    const requestJson = JSON.stringify(requestObject);
    const encodedRequestJson = encodeURIComponent(requestJson);
    const url = `${apiURL}/get-chain`;

    let options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    };

    return fetch(`${url}?request=${encodedRequestJson}`, options).then((response) => {
        console.log("thisa is the response", response);
        return response.json();
    });
}

