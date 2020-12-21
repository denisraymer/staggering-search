import axios from 'axios';

const getUsers = (url, setData, setError) => {
    const token = '';

    axios.get(`https://api.github.com/${url}`).then(function (result) {
        setData(result.data);
    }).catch(function (error) {
        setError(error.response.data);
    });
}

export default getUsers;
