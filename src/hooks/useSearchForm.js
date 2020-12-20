import {useState} from 'react';

const useSearchForm = () => {
    const [inputValueSearch, setInputValueSearch] = useState('');

    function search(event) {
        setInputValueSearch(event.target.value.toLowerCase());
    }

    return {inputValueSearch, search};
};

export default useSearchForm;
