import axios from 'axios';

const getUsers = (url, setData, setError) => {
    axios.get(`https://api.github.com/${url}`, {
        headers: {
            Authorization: `Bearer ebc79668cfbb8fe0db1ec7c3e1cc8ccce0120690`,
            'Content-Type': 'application/json'
        }
    }).then(function (result) {
        setData(result.data);
    }).catch(function (error) {
        setError(error.response.data);
    });
}

export default getUsers;
