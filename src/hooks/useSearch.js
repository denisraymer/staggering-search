import React, {useEffect, useState} from 'react';
import fetchUsers from '../api/fetchUsers';

export default () => {
    const {isLoading, response} = fetchUsers('/users');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [inputSearch, setInputSearch] = useState('');
    const [users, setUsers] = useState([]);

    const search = (event) => setInputSearch(event.target.value);

    useEffect(function () {
        if (response !== null) setUsers(response);
    }, [isLoading]);

    useEffect(() => {
        if (filteredUsers.length) {
            setFilteredUsers(users.filter((user) => user.login.toLowerCase().includes(inputSearch.toLowerCase())));
        } else {
            setFilteredUsers(users);
        }
    }, [inputSearch, users]);

    return [{inputSearch, filteredUsers}, search];
};
