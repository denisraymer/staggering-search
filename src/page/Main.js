import React from 'react';
import {Col, Container, Row, Spinner} from 'react-bootstrap';
import SearchForm from '../components/SearchForm';
import fetchUsers from '../api/fetchUsers';
import ListUsers from '../components/ListUsers/ListUsers';

function Main() {
    const {isLoading, response} = fetchUsers('/users');

    return (
        <Container>
            <Row>
                <Col xl={12}>
                    <br/>
                    <SearchForm/>
                </Col>
                <Col xl={12}>
                    <br/>
                    <h4>List of users</h4>
                    {isLoading ? <Spinner animation='border'/> : <ListUsers listUsers={response}/>}
                </Col>
            </Row>
        </Container>
    )
}

export default Main
