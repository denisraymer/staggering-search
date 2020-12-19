import React from 'react';
import {Col, Container, Row, Spinner} from 'react-bootstrap';
import SearchForm from '../components/SearchForm';
import useGetUserData from '../hooks/useGetUserData';
import ListUsers from '../components/ListUsers/ListUsers';

function Main() {
    const {isLoading, userData} = useGetUserData();

    return (
        <Container>
            <Row>
                <Col xl={12}>
                    <SearchForm/>
                </Col>
                <Col xl={12}>
                    {isLoading ? <Spinner animation='border'/> : <ListUsers userData={userData}/>}
                </Col>
            </Row>
        </Container>
    )
}

export default Main
