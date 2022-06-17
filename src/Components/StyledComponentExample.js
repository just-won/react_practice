import React from 'react';
import styled from "styled-components";

const StyledComponentExample = () => {

    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;

    const Wrapper = styled.section`
        padding:4em;
        background: papayawhip;
    `;

    const Button = styled.button`
        background: ${(props)=> (props.children==="Primary" ? "palevioletred" : "white")};
        color: ${(props)=> (props.children==="Primary" ? "white" : "palevioletred")};

        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius : 3px;
    `;
    
    return (
        <>
            <Wrapper>
                <Title>Hello World!</Title>
            </Wrapper>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </>
    )
}

export default StyledComponentExample