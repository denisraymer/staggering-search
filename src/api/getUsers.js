import axios from 'axios';

const getUsers = (url, setData, setError) => {
    axios.get(`https://api.github.com/${url}`, {
        headers: {
            Authorization: `Bearer 7cab5e1906313d74cd99ad56362f4cd74b7b1488`,
            'Content-Type': 'application/json'
        }
    }).then(function (result) {
        setData(result.data);
    }).catch(function (error) {
        setError(error.response.data);
    });
}

export default getUsers;
