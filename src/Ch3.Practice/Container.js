import React from 'react'
import Test from './Test'

const Container = () => {

    const tests = [
        { id : 'title', value : '연습이다앙'},
        { id : 'id', value : 'practice'},
        { id : 'pw', value : 'well'},
    ]

    return (
        <div>
            {tests.map((test)=> <Test key={test.id} test1={test.id} test2={test.value}/>)}
        </div>
    )
}

export default Container