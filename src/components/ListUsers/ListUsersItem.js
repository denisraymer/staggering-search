import React, {useEffect, useState} from 'react';
import 'rodal/lib/rodal.css';
import fetchUsers from '../../api/fetchUsers';
import UserModal from '../UserModal';

function ListUsersItem(props) {
    const {login} = props;
    const {response} = fetchUsers(`/users/${login}`);
    const [user, setUser] = useState([]);

    useEffect(function () {
        if (response !== null) setUser(response);

    }, [response]);

    return (
        <tr key={user.node_id}>
            <td className='text-center'>
                <img src={user.avatar_url} alt='Avatar' className='user-avatar'/>
            </td>
            <td>{user.name}</td>
            <td>{user.login}</td>
            <td>{user.location}</td>
            <td><UserModal user={user}/></td>
        </tr>
    )
}

export default ListUsersItem
