import React, {createContext, useContext} from 'react';
import useGetUserData from '../../hooks/useGetUserData';

const ListUsersContext = createContext(null);

export default function ListUsersProvider({children}) {
    const [{isLoading, userData}] = useGetUserData();

    return (
        <ListUsersContext.Provider value={{userData, isLoading}}>
            {children}
        </ListUsersContext.Provider>
    )
}

export const useListUsers = () => useContext(ListUsersContext);
