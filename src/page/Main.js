import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import SearchForm from '../components/SearchForm';
import ListUsersProvider from '../components/ListUsers/ListUsersContext';
import ListUsers from '../components/ListUsers/ListUsers';

function Main() {
    return (
        <ListUsersProvider>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SearchForm/>
                    </Col>
                    <Col xl={12}>
                        <ListUsers/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className='footer'>КБ D.Raymer V0.1.0</div>
                    </Col>
                </Row>
            </Container>
        </ListUsersProvider>
    )
}

export default Main
