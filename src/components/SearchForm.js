import React from 'react';
import {Form} from 'react-bootstrap';
import useSearchForm from '../hooks/useSearchForm';

function SearchForm() {
    const {inputValueSearch, search} = useSearchForm();

    return (
        <React.Fragment>
            <Form.Control type='text' placeholder='Search' value={inputValueSearch}
                          onChange={(event) => search(event)}/>
        </React.Fragment>
    )
}

export default SearchForm
