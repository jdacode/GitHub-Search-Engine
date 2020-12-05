/**
 * GitHub Search Engine
 * 
 *
 * @version 0.0.1
 * @author  1DaCode
 * @license MIT
 *
 **/



class Github {
    constructor() {
        // Get Users
        this.getOauth('oauth.json')
          .then(data => {
              this.client_id = data.client_id;
              this.client_secret = data.client_secret;
            })
          .catch(err => console.log(err));
    }

    // Make an HTTP GET Request 
    async getOauth(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData[0];
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        console.log(profile);
        return {
            // same as = profile: profile
            profile
        }
    }
}