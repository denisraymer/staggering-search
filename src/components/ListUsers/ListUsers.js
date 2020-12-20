import React from 'react';
import {Spinner, Table} from 'react-bootstrap';
import ListUsersItem from './ListUsersItem';
import {useListUsers} from './ListUsersContext';

export default function ListUsers() {
    const {userData, isLoading} = useListUsers();

    if (isLoading) return <Spinner animation='border'/>

    return (
        <React.Fragment>
            <h4>List of users</h4>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th width='70px'/>
                    <th width='200px'>First name</th>
                    <th width='500px'>Login</th>
                    <th>Location</th>
                    <th width='100px'/>
                </tr>
                </thead>
                <tbody>
                {userData.map(user => <ListUsersItem user={user}/>)}
                </tbody>
            </Table>
        </React.Fragment>
    )
}