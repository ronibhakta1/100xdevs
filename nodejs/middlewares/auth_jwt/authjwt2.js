const axios = require('axios');

const url = '<https://api.example.com/resource>';
const token = 'your-access-token';

axios.get(url, {
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));