import {useContext, useState} from 'react';
// import {ListUsersContext} from '../page/Main';

const useSearchForm = (props) => {
    const [inputValueSearch, setInputValueSearch] = useState('');
    // const userData = useContext(ListUsersContext);

    function search(event) {
        setInputValueSearch(event.target.value.toLowerCase());
    }

    return {inputValueSearch, search};
};

export default useSearchForm;
