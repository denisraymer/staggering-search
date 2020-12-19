import React, {useEffect, useState} from 'react';
import fetchUsers from '../api/fetchUsers';

export default () => {
    const {isLoading, response} = fetchUsers('/users');
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState(null);
    const [inputSearch, setInputSearch] = useState('');

    const searchUsers = (event) => setInputSearch(event.target.value);

    useEffect(function () {
        if (response !== null) setUsers(response);
    }, [isLoading]);

    useEffect(() => {
        if (filteredUsers === null) {

            setFilteredUsers([
                ...users.filter((user) => {
                    return user.login
                })
            ]);
        }

    }, [inputSearch, users]);

    return [{inputSearch, filteredUsers}, searchUsers];
};
