import React, {createContext, useContext, useEffect, useState} from 'react';
import useGetUserData from '../../hooks/useGetUserData';
import useSearchForm from '../../hooks/useSearchForm';

const ListUsersContext = createContext(null);

export default function ListUsersProvider({children}) {
    const [{isLoading, userData}] = useGetUserData();
    const {inputValueSearch, search} = useSearchForm();
    const [thisData, setThisData] = useState([]);

    useEffect(function () {
        if (inputValueSearch !== '') {
            const result = thisData.filter((user) => {
                if (user.login !== null && user.name !== null) {
                    return user.login.toLowerCase().includes(inputValueSearch) || user.name.toLowerCase().includes(inputValueSearch);
                }
            });
            setThisData([...result]);
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
