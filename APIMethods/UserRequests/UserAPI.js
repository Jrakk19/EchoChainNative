const apiUrl = 'http://echo-Publi-1S8K57V8SJDAW-1256388934.us-east-1.elb.amazonaws.com::8080/auth'

export const login = async(username, password) => {

    let options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: {
            username: username,
            password: password
        }
      };
    let result = await fetch(`${apiUrl}/login`, options).then(response => {return response.json()})
    
    console.log(result);
    
    return result;
}