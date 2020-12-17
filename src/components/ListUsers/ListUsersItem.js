import React from 'react';
import {Button} from 'react-bootstrap';
import fetchUsers from '../../api/fetchUsers';

function ListUsersItem(props) {
    const {login} = props;
    const {response} = fetchUsers(`/users/${login}`);

    return (
        <tr key={response.node_id}>
            <td style={{textAlign: 'center'}}>
                <img src={response.avatar_url} alt={`Avatar ${response.name}`}
                     style={{borderRadius: '50px', width: '40px'}}/>
            </td>
            <td style={{alignItems: 'middle'}}>{response.name}</td>
            <td style={{alignItems: 'middle'}}>{response.login}</td>
            <td style={{alignItems: 'middle'}}>{response.location}</td>
            <td>
                <Button variant="light" style={{display: 'block', margin: 'auto'}}>More</Button>
            </td>
        </tr>
    )
}

export default ListUsersItem
