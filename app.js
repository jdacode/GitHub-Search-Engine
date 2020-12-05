/**
 * GitHub Search Engine
 * 
 *
 * @version 0.0.1
 * @author  1DaCode
 * @license MIT
 *
 **/

 // Init GitHub
const github = new Github

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (event) => {
    // Get input text
    const userText = event.target.value;
    if(userText !== ''){
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // Show Alert
                    console.log('Show Alert: ' + data.profile);
                } else {
                    // Show profile
                    console.log('Show profile: ' + data.profile);
                }
            })
    } else {
        // Clear profile
        onsole.log('Clear profile: ' + userText);
    }
});