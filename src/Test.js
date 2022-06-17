import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React, { useState, useEffect} from 'react'

// rafce
const Test = () => {

    const [date, setDate] = useState(new Date());

    useEffect ( ()=> {
        const interval = setInterval(()=> tick(), 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    const tick =()=> {
        setDate(new Date());
    };

    return (
        <div>
            <h1>Hello, world! Functional</h1>
            <h2>It is {date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Test