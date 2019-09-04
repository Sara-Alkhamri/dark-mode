import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    // To retrieve an item from localStorage, call localStorage.getItem('itemName')
    // If that item doesn't exist, it will return undefined

    const [storedValue, setStoredValue] = useState(() => {
        //use key to get from localStorage
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    // Parse and return stored json or, if undefined, return initialValue
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};

export default useLocalStorage;