import React from 'react';
import {Table} from 'react-bootstrap';
import ListUsersItem from './ListUsersItem';

function ListUsers(props) {
    const {data} = props;

    return (
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th width='70px'/>
                <th width='200px'>First name</th>
                <th width='500px'>Login</th>
                <th>Location</th>
                <th/>
            </tr>
            </thead>
            <tbody>
            {data.map(item => <ListUsersItem login={item.login}/>)}
            </tbody>
        </Table>
    )
}

export default ListUsers