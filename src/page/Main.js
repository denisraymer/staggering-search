import React from 'react';
import {Col, Container, Row, Table} from 'react-bootstrap';
import SearchForm from '../components/SearchForm';

function Main() {
    return (
        <Container>
            <Row>
                <Col xl={12}>
                    <br/>
                    <SearchForm/>
                </Col>
                <Col xl={12}>
                    <br/>
                    <h4>Search results</h4>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default Main
