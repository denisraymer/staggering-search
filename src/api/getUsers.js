import axios from 'axios';

const getUsers = (url, setData, setError) => {
    axios.get(`https://api.github.com/${url}`, {
        headers: {
            Authorization: `Bearer 6c8135e53970dc85362f400935c8af46a202ba42`,
            'Content-Type': 'application/json'
        }
    }).then(function (result) {
        setData(result.data);
    }).catch(function (error) {
        setError(error.response.data);
    });
}

export default getUsers;
