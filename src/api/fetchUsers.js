import axios from 'axios';
import {useEffect, useState} from 'react';

export default url => {
    const baseUrl = 'https://api.github.com';
    const [isLoading, setIsLoading] = useState(true);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const githubToken = 'db0c8e0580656c7465bc9529a3c3947dd5a7a185';

    useEffect(function () {
        axios.get(baseUrl + url, {
            headers: {
                Authorization: `Bearer ${githubToken}`,
                'Content-Type': 'application/json'
            }
        }).then(function (result) {
            setResponse(result.data);
            setIsLoading(prevState => !prevState);
        }).catch(function (error) {
            setError(error.response.data);
            setIsLoading(prevState => !prevState);
        });
    }, []);

    return {isLoading, response, error};
}
