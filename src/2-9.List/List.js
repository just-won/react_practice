import React from 'react'

const List = () => {

    // const numbers = [1,2,3,4,5];

    // return (
    //     <ul>
    //         {numbers.map((item) => (
    //             <li key={item.toString()}>{item}</li>
    //         ))}
    //     </ul>
    // )

    const todos = [
        {id : 1, text: 'Drink Water'},
        {id : 2, text: 'Wash Car'},
        {id : 3, text: 'Listen Lecture'},
        {id : 4, text: 'Go to bed'}
    ];

    const Item = (props) => {
        return (
            <li>
                {/* {props.key} key는 오직 판별용으로만 사용되서 props로 값을 가져올 수 없음. */}
                {props.id} - 
                {props.text}
            </li>
        )
    }

    const todoList = todos.map((todo) => <Item {...todo} key={todo.id} id={todo.id}/>)

    return <>{todoList}</>
}

export default List