## API-Oauth2 application example
# Below is the quired parameters for this example

```
// Clear Clouds api based url
// Replace fqdn with the server fqdn provided by your admin
const base_url = "https://fqdn/ns-api";

const query = {
    // For this example we will keep password as the grant_type
    grant_type : 'password',

    // Portal user name with at least Office Manager scope or hihger
    username : '',

    // Portal password
    password : '',

    // Client id provided by your administrator
    client_id : '',

    // Cliend Secrete provided by your administrator
    client_secret : '' 
}

const extension = "", // User extension
    domain = "" // domain user belongs
```