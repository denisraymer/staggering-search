import {useEffect, useState} from 'react';
import getUsers from '../api/getUsers';

const useGetUserData = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(function () {
        getUsers('users', setResponse, setError);
    }, []);

    useEffect(function () {
        if (isLoading && response !== null) {
            function getUser(data) {
                return setUserData(prevState => [...prevState, data]);
            }

            response.map(item => getUsers(`users/${item.login}`, getUser, setError));

            setIsLoading(false);
        }
    }, [isLoading, response]);

    return [{userData, isLoading, error}];
};

export default useGetUserData;
