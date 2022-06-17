import React, { useState, useEffect } from 'react'

const ControlledComponent = () => {
    
    const [name, setName] = useState('');
    const [flavor, setFlavor] = useState('Coconut');
    const [essay, setEssay] = useState("This is essay.");

    const handleSubmit = (event) => {

        alert(`name: ${name}, essay: ${essay}`)
        event.preventDefault();
    }

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleEssayChange = (event) => {
        setEssay(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChange}/>
            </label>
            <br/>
            <br/>
            <label>
                Essay:
                <textarea value={essay} onChange={handleEssayChange}/>
            </label>
            <input type="submit" value="submit"/>
        </form>
    )
}

export default ControlledComponent