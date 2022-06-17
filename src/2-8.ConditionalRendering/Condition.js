import React from 'react'

const UserGreeting = (props) => {

    return (
        <h1>{props.name && `${props.name},`} Welcome {props.count && `It's ${props.count} times`} times</h1>
    );
}
const GuestGreeting = (props) => {

    return (
        <h1>Please sign up.</h1>
    );
} 

const Greeting = (props) => {

    // if(props.isLoggedIn) {
    //     return <UserGreeting name="jimmy" count={0}/>
    // }

    // return (
    //     <GuestGreeting />
    // );

    return props.isLoggedIn ? <UserGreeting name="timmy" count={0}/> : <GuestGreeting />
}

const Condition = () => {

    const isLoggedIn = true;

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}></Greeting>
        </div>
    )
}

export default Condition