import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import fetchUsers from '../../api/fetchUsers';

function ListUsersItem(props) {
    const {login} = props;
    const {response} = fetchUsers(`/users/${login}`);
    const [user, setUser] = useState([]);

    useEffect(function () {
        if (response !== null) setUser(response);
    }, [response]);

    return (
        <tr key={user.node_id}>
            <td style={{textAlign: 'center'}}>
                <img src={user.avatar_url} alt={`Avatar ${user.name}`}
                     style={{borderRadius: '50px', width: '40px'}}/>
            </td>
            <td style={{alignItems: 'middle'}}>{user.name}</td>
            <td style={{alignItems: 'middle'}}>{user.login}</td>
            <td style={{alignItems: 'middle'}}>{user.location}</td>
            <td>
                <Button variant="light" style={{display: 'block', margin: 'auto'}}>More</Button>
            </td>
        </tr>
    )
}

export default ListUsersItem
