import React, {createContext, useContext, useEffect, useState} from 'react';
import useGetUserData from '../../hooks/useGetUserData';
import useSearchForm from '../../hooks/useSearchForm';

const ListUsersContext = createContext(null);

export default function ListUsersProvider({children}) {
    const [{isLoading, userData}] = useGetUserData();
    const {inputValueSearch, search} = useSearchForm();
    const [thisData, setThisData] = useState([]);

    function validate(user, value) {
        return user.toLowerCase().includes(value.toLowerCase().trim());
    }

    function searchUsers(userData) {
        return userData.filter((user) => {
            if (user.login !== null && user.name !== null && user.location !== null) {
                return validate(user.login, inputValueSearch) || validate(user.name, inputValueSearch) || validate(user.location, inputValueSearch);
            }
        });
    }

    useEffect(function () {
        if (inputValueSearch !== '') {
            setThisData([...searchUsers(userData)]);
        } else {
            setThisData([...userData]);
        }
    }, [userData, inputValueSearch]);

    return (
        <ListUsersContext.Provider
            value={{
                userData: thisData,
                isLoading,
                inputValueSearch,
                search
            }}>
            {children}
        </ListUsersContext.Provider>
    )
}

export const useListUsers = () => useContext(ListUsersContext);
