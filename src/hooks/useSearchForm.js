import {useState} from 'react';

const useSearchForm = () => {
    const [inputValueSearch, setInputValueSearch] = useState('');

    function search(event) {
        setInputValueSearch(event.target.value);
    }

    return {inputValueSearch, search};
};

export default useSearchForm;
