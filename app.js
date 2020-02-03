
// We use axios to send http requests
const axios = require('axios');

// We use query-string to parameterize js objects
const qs = require('query-string');

// Clear Clouds api based url
const base_url = "https://fqdn/ns-api";

// Token params
const query = {
    grant_type : '',
    username : '',
    password : '',
    client_id : '',
    client_secret : '' 
}

const extension = "", // User extension
    domain = "" // domain user belongs

const getToken = () => { 
    return axios.post( base_url + '/oauth2/token?' + qs.stringify(query) ) 
}

getToken().then( (response) => {    
//  console.log(response.data);   
    getUserInfo( response.data.access_token, extension, domain)
    .then( user => console.log( user.data)) 
    .catch( error => console.log(error.response.headers['warning']))
}).catch( error => {
    console.log(error.response.status)
    console.log(error.response.statusText)
    console.log(error.response.headers['warning'])
})

function getUserInfo(token, user,domain ){
    const authorization = { authorization : 'Bearer ' +  token };
    const query = { 
        object : 'subscriber', 
        action : 'read', 
        user, 
        domain 
    };
    return axios({
        url : base_url + '?' + qs.stringify(query),
        headers : authorization
    })
}

