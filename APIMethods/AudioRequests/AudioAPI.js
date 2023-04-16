const apiURL = 'http://192.168.0.159:8080/recording';
export const sendAudio = async (audio) => {
    console.log('we are here', audio);
    let uriParts = audio.split('.');
    let fileType = uriParts[uriParts.length - 1];

    console.log('fileType', fileType);

    let formData = new FormData();
    formData.append('file', {
        audio,
        name: `recording.m4a`,
        type: `audio/m4a`,
    });

    formData.append('playerId', '75c34d43-15ce-48b4-9455-05077542e0a3');
    formData.append('roomId', '18f8e9f7-d660-4c30-bc23-b0c2308f26ab');
    formData.append('gameIndex', 0);

    let options = {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            //'Authorization': `Bearer eyJraWQiOiJWSHViRVBwVlNKd1Zxb1hPTUhiMXRZUFA3SUR1ZExmS0MyVENxQW8rSmpFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmYmU5ZGRjOC04YmYyLTQyYWMtYTAzNi1jNzA5ZmNlZmRiNTIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfbk9DWWFYODBRIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoiamFja2pibGFja3dlbGxAZ21haWwuY29tIiwib3JpZ2luX2p0aSI6ImE2MWFiNmM3LWE3ZWEtNDUwYy04ZGEyLTAyN2QxMjBmMDA2NSIsImF1ZCI6ImJhcnFiNjExcGFzcGUycW5kODlqYm1rMXUiLCJldmVudF9pZCI6IjUwODc5NmNiLTRhNTYtNGEwNS05ZDZhLTExYWFjM2I4MjAzOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc1NDk3MjIxLCJuYW1lIjoiQVNtaXRoMTIiLCJwaG9uZV9udW1iZXIiOiIrMTQ4MDgyNTUwMjIiLCJleHAiOjE2NzU1MDA4MjEsImlhdCI6MTY3NTQ5NzIyMSwianRpIjoiZDRiMzIwNTAtODAyYS00ODE2LWJiOTctNzkyZDdjZjQzMDZlIiwiZW1haWwiOiJqYWNramJsYWNrd2VsbEBnbWFpbC5jb20ifQ.tq-7QppuWjZ0KiuB5BvBBE935lPaH8Os43Vy-8DIKl_t3OE_Abfvh8E5Yn0zvvcRHIRr6F3HsEmeFFt1vobVl41gr9zDdFGIXBBvw171dhkj5yO2DtXoU6yPwsIGmgnIa7nyr3O8GuE_etQWZZRkvl_bmobU1SVEOwN9A2qUJVfN8aYJq0HKw_mf4hFCqEx21oFl_mZB0cC-cHlSOYrZCXiN07dbe3qG1iGv90GYrACq6JoZq9k8BO63f8aXmLOJkt6ltMykG3Gy0R43RamRm5PGnZJR7nJHhglaOfd_3AIfPdUuPQUkPxued0tzfMXqdD6dJqXKMX9LsstBsGyCUg`
        },
    };

  
        return await fetch(apiURL, options).then(response => {
            console.log(response);
            return response
        }).catch(error => {
            console.log(error);
            return error
        });
}

export const getAudioId = async () => {
    let options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          //'Authorization': 'Bearer eyJraWQiOiJWSHViRVBwVlNKd1Zxb1hPTUhiMXRZUFA3SUR1ZExmS0MyVENxQW8rSmpFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmYmU5ZGRjOC04YmYyLTQyYWMtYTAzNi1jNzA5ZmNlZmRiNTIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfbk9DWWFYODBRIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoiamFja2pibGFja3dlbGxAZ21haWwuY29tIiwib3JpZ2luX2p0aSI6ImU3NzFlODM2LWViMGEtNGJjNy1iNWQwLTVmYzdlNWJhNDQ4NiIsImF1ZCI6ImJhcnFiNjExcGFzcGUycW5kODlqYm1rMXUiLCJldmVudF9pZCI6ImNlMTVmN2NiLWFmNmYtNDM1My1iNjc5LTYwYjc4Y2Y1MWFkOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc5ODEzMDE4LCJuYW1lIjoiQVNtaXRoMTIiLCJwaG9uZV9udW1iZXIiOiIrMTQ4MDgyNTUwMjIiLCJleHAiOjE2Nzk4MTY2MTgsImlhdCI6MTY3OTgxMzAxOCwianRpIjoiMWUwODAzNzUtZWMxZS00MDIwLWJjODAtOTFiYTY2ZjVhMjAzIiwiZW1haWwiOiJqYWNramJsYWNrd2VsbEBnbWFpbC5jb20ifQ.mhjGfYXa5zKPadJ_db5zFafKYGFLm1VLBuEU5HDsK9JERSh8hGtg3wVmMaUKIqEdT4FCBgw7zkH_bC6EUWwphq_BJAudkMW7VHYnNyJNsXydiyDcphPM86UGO-aL5A10GbWaoOqpXw4v46TwzoL2iSg-ufk_4usm9SPfwJdSHFV_r90q8_Uf9X5AZEutK-Tsd_HifxUFz33yuaNAbtp3lDTqCWzT8ccPSMI-_8ffOW6epkRjMObgu0e2zxhFm1p54PQ2QwvcE59ZX16UvvkQ7tz7affIt7maDH4aQ9LcECI4aT1dwOKqCxrHq6EOIaB6O2ldpWGBFX_4ss195yj4SQ'
        },
      };
    let result = await fetch(`${apiURL}/${playerID}`, options).then(response => {return response.json()})

    console.log('THIS SI THE USER',result);

    return result;
}

export const getNextAudio = async(gameIndex, player) => {
    let request = {
        gameIndex: gameIndex,
        player: player
      };
      
      const requestJson = JSON.stringify(request);
      const encodedRequestJson = encodeURIComponent(requestJson);
      const url = `${apiURL}/next-audio`;
      
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
}
    
export const getCurrentAudio = async(gameIndex, player) => {
    let request = {
        gameIndex: gameIndex,
        player: player
      };
      
      const requestJson = JSON.stringify(request);
      const encodedRequestJson = encodeURIComponent(requestJson);
      const url = `${apiURL}/currentAudio`;
      
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
}