import axios from 'axios';

const getUsers = (url, setData, setError) => {
    axios.get(`https://api.github.com/${url}`, {
        headers: {
            Authorization: `Bearer 16f82012730325e323d62420e0afce0c5424375f`,
            'Content-Type': 'application/json'
        }
    }).then(function (result) {
        setData(result.data);
    }).catch(function (error) {
        setError(error.response.data);
    });
}

export default getUsers;
