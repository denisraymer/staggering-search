import React from 'react';
import {Form} from 'react-bootstrap';

function SearchForm(props) {
    const {inputSearch, search} = props;

    return (
        <React.Fragment>
            <Form.Control type='text' placeholder='Search' value={inputSearch} onChange={event => search(event)}/>
        </React.Fragment>
    )
}

export default SearchForm
