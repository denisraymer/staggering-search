import React from 'react';
import {Col, Container, Row, Spinner} from 'react-bootstrap';
import SearchForm from '../components/SearchForm';
import useSearch from '../hooks/useSearch';

function Main() {
    const [{inputSearch, filteredUsers}, search] = useSearch();

    return (
        <Container>
            <Row>
                <Col xl={12}>
                    <br/>
                    <SearchForm inputSearch={inputSearch} search={search}/>
                </Col>
                <Col xl={12}>
                    <br/>
                    {/*{filteredUsers === null ? <Spinner animation='border'/> : <ListUsers listUsers={filteredUsers}/>}*/}
                </Col>
            </Row>
        </Container>
    )
}

export default Main
