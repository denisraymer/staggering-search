import React from 'react';
import 'rodal/lib/rodal.css';
import UserModal from '../UserModal';

function ListUsersItem({user}) {
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
