const apiUrl = 'http://echo-Publi-1S8K57V8SJDAW-1256388934.us-east-1.elb.amazonaws.com/room'
export const createRoom = async() => {

    let options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          //'Authorization': 'Bearer eyJraWQiOiJWSHViRVBwVlNKd1Zxb1hPTUhiMXRZUFA3SUR1ZExmS0MyVENxQW8rSmpFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmYmU5ZGRjOC04YmYyLTQyYWMtYTAzNi1jNzA5ZmNlZmRiNTIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfbk9DWWFYODBRIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoiamFja2pibGFja3dlbGxAZ21haWwuY29tIiwib3JpZ2luX2p0aSI6ImU3NzFlODM2LWViMGEtNGJjNy1iNWQwLTVmYzdlNWJhNDQ4NiIsImF1ZCI6ImJhcnFiNjExcGFzcGUycW5kODlqYm1rMXUiLCJldmVudF9pZCI6ImNlMTVmN2NiLWFmNmYtNDM1My1iNjc5LTYwYjc4Y2Y1MWFkOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc5ODEzMDE4LCJuYW1lIjoiQVNtaXRoMTIiLCJwaG9uZV9udW1iZXIiOiIrMTQ4MDgyNTUwMjIiLCJleHAiOjE2Nzk4MTY2MTgsImlhdCI6MTY3OTgxMzAxOCwianRpIjoiMWUwODAzNzUtZWMxZS00MDIwLWJjODAtOTFiYTY2ZjVhMjAzIiwiZW1haWwiOiJqYWNramJsYWNrd2VsbEBnbWFpbC5jb20ifQ.mhjGfYXa5zKPadJ_db5zFafKYGFLm1VLBuEU5HDsK9JERSh8hGtg3wVmMaUKIqEdT4FCBgw7zkH_bC6EUWwphq_BJAudkMW7VHYnNyJNsXydiyDcphPM86UGO-aL5A10GbWaoOqpXw4v46TwzoL2iSg-ufk_4usm9SPfwJdSHFV_r90q8_Uf9X5AZEutK-Tsd_HifxUFz33yuaNAbtp3lDTqCWzT8ccPSMI-_8ffOW6epkRjMObgu0e2zxhFm1p54PQ2QwvcE59ZX16UvvkQ7tz7affIt7maDH4aQ9LcECI4aT1dwOKqCxrHq6EOIaB6O2ldpWGBFX_4ss195yj4SQ'
        },
      };
    let result = await fetch(`${apiUrl}/`, options).then(response => {return response.json()})
    
    console.log(result);

    return result;
}

export const getAllPlayersInGame = async(roomId) => {
    let options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          //'Authorization': 'Bearer eyJraWQiOiJWSHViRVBwVlNKd1Zxb1hPTUhiMXRZUFA3SUR1ZExmS0MyVENxQW8rSmpFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmYmU5ZGRjOC04YmYyLTQyYWMtYTAzNi1jNzA5ZmNlZmRiNTIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfbk9DWWFYODBRIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoiamFja2pibGFja3dlbGxAZ21haWwuY29tIiwib3JpZ2luX2p0aSI6ImU3NzFlODM2LWViMGEtNGJjNy1iNWQwLTVmYzdlNWJhNDQ4NiIsImF1ZCI6ImJhcnFiNjExcGFzcGUycW5kODlqYm1rMXUiLCJldmVudF9pZCI6ImNlMTVmN2NiLWFmNmYtNDM1My1iNjc5LTYwYjc4Y2Y1MWFkOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc5ODEzMDE4LCJuYW1lIjoiQVNtaXRoMTIiLCJwaG9uZV9udW1iZXIiOiIrMTQ4MDgyNTUwMjIiLCJleHAiOjE2Nzk4MTY2MTgsImlhdCI6MTY3OTgxMzAxOCwianRpIjoiMWUwODAzNzUtZWMxZS00MDIwLWJjODAtOTFiYTY2ZjVhMjAzIiwiZW1haWwiOiJqYWNramJsYWNrd2VsbEBnbWFpbC5jb20ifQ.mhjGfYXa5zKPadJ_db5zFafKYGFLm1VLBuEU5HDsK9JERSh8hGtg3wVmMaUKIqEdT4FCBgw7zkH_bC6EUWwphq_BJAudkMW7VHYnNyJNsXydiyDcphPM86UGO-aL5A10GbWaoOqpXw4v46TwzoL2iSg-ufk_4usm9SPfwJdSHFV_r90q8_Uf9X5AZEutK-Tsd_HifxUFz33yuaNAbtp3lDTqCWzT8ccPSMI-_8ffOW6epkRjMObgu0e2zxhFm1p54PQ2QwvcE59ZX16UvvkQ7tz7affIt7maDH4aQ9LcECI4aT1dwOKqCxrHq6EOIaB6O2ldpWGBFX_4ss195yj4SQ'
        },
      };
    let result = await fetch(`${apiUrl}/players/${roomId}`, options).then(response => {return response.json()})

    console.log('THIS SI THE USER',result);

    return result;
}

export const initializeGame = async(roomId) => {
    let options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          //'Authorization': 'Bearer eyJraWQiOiJWSHViRVBwVlNKd1Zxb1hPTUhiMXRZUFA3SUR1ZExmS0MyVENxQW8rSmpFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmYmU5ZGRjOC04YmYyLTQyYWMtYTAzNi1jNzA5ZmNlZmRiNTIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfbk9DWWFYODBRIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoiamFja2pibGFja3dlbGxAZ21haWwuY29tIiwib3JpZ2luX2p0aSI6ImU3NzFlODM2LWViMGEtNGJjNy1iNWQwLTVmYzdlNWJhNDQ4NiIsImF1ZCI6ImJhcnFiNjExcGFzcGUycW5kODlqYm1rMXUiLCJldmVudF9pZCI6ImNlMTVmN2NiLWFmNmYtNDM1My1iNjc5LTYwYjc4Y2Y1MWFkOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc5ODEzMDE4LCJuYW1lIjoiQVNtaXRoMTIiLCJwaG9uZV9udW1iZXIiOiIrMTQ4MDgyNTUwMjIiLCJleHAiOjE2Nzk4MTY2MTgsImlhdCI6MTY3OTgxMzAxOCwianRpIjoiMWUwODAzNzUtZWMxZS00MDIwLWJjODAtOTFiYTY2ZjVhMjAzIiwiZW1haWwiOiJqYWNramJsYWNrd2VsbEBnbWFpbC5jb20ifQ.mhjGfYXa5zKPadJ_db5zFafKYGFLm1VLBuEU5HDsK9JERSh8hGtg3wVmMaUKIqEdT4FCBgw7zkH_bC6EUWwphq_BJAudkMW7VHYnNyJNsXydiyDcphPM86UGO-aL5A10GbWaoOqpXw4v46TwzoL2iSg-ufk_4usm9SPfwJdSHFV_r90q8_Uf9X5AZEutK-Tsd_HifxUFz33yuaNAbtp3lDTqCWzT8ccPSMI-_8ffOW6epkRjMObgu0e2zxhFm1p54PQ2QwvcE59ZX16UvvkQ7tz7affIt7maDH4aQ9LcECI4aT1dwOKqCxrHq6EOIaB6O2ldpWGBFX_4ss195yj4SQ'
        },
      };
    await fetch(`${apiUrl}/game/initialize/${roomId}`, options).then(response => {return response.json()})

   
}

export const getRoomByCode = async(roomCode) => {
    let options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          //'Authorization': 'Bearer eyJraWQiOiJWSHViRVBwVlNKd1Zxb1hPTUhiMXRZUFA3SUR1ZExmS0MyVENxQW8rSmpFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmYmU5ZGRjOC04YmYyLTQyYWMtYTAzNi1jNzA5ZmNlZmRiNTIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfbk9DWWFYODBRIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoiamFja2pibGFja3dlbGxAZ21haWwuY29tIiwib3JpZ2luX2p0aSI6ImU3NzFlODM2LWViMGEtNGJjNy1iNWQwLTVmYzdlNWJhNDQ4NiIsImF1ZCI6ImJhcnFiNjExcGFzcGUycW5kODlqYm1rMXUiLCJldmVudF9pZCI6ImNlMTVmN2NiLWFmNmYtNDM1My1iNjc5LTYwYjc4Y2Y1MWFkOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc5ODEzMDE4LCJuYW1lIjoiQVNtaXRoMTIiLCJwaG9uZV9udW1iZXIiOiIrMTQ4MDgyNTUwMjIiLCJleHAiOjE2Nzk4MTY2MTgsImlhdCI6MTY3OTgxMzAxOCwianRpIjoiMWUwODAzNzUtZWMxZS00MDIwLWJjODAtOTFiYTY2ZjVhMjAzIiwiZW1haWwiOiJqYWNramJsYWNrd2VsbEBnbWFpbC5jb20ifQ.mhjGfYXa5zKPadJ_db5zFafKYGFLm1VLBuEU5HDsK9JERSh8hGtg3wVmMaUKIqEdT4FCBgw7zkH_bC6EUWwphq_BJAudkMW7VHYnNyJNsXydiyDcphPM86UGO-aL5A10GbWaoOqpXw4v46TwzoL2iSg-ufk_4usm9SPfwJdSHFV_r90q8_Uf9X5AZEutK-Tsd_HifxUFz33yuaNAbtp3lDTqCWzT8ccPSMI-_8ffOW6epkRjMObgu0e2zxhFm1p54PQ2QwvcE59ZX16UvvkQ7tz7affIt7maDH4aQ9LcECI4aT1dwOKqCxrHq6EOIaB6O2ldpWGBFX_4ss195yj4SQ'
        },
      };
    let result = await fetch(`${apiUrl}/code/${roomCode}`, options).then(response => {return response.json()})

    console.log('THIS SI THE ROOM JOINGING',result);

    return result;
}