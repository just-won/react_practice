import React, {useState, useEffect, useRef} from "react";

const todos = [
  [
    {id: 1, value: "Wash dishes"},
    {id: 2, value: "Clean the bed"},
    {id: 3, value: "Running"},
    {id: 4, value: "Learning"}
  ],
  [
    {id: 3, value: "Running"},
    {id: 4, value: "Learning"},
    {id: 1, value: "Wash dishes"},
    {id: 2, value: "Clean the bed"}
  ],
  [
    {id: 2, value: "Clean the bed"},
    {id: 4, value: "Learning"},
    {id: 1, value: "Wash dishes"},
    {id: 3, value: "Running"}
  ]
]

const App =()=> {

  const [items, setItems] = useState(todos[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 3);
      setItems(todos[random]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleDoneClick = (todo) => {
    setItems((items) => items.filter((item) => item !== todo));
  }

  const handleRestoreClick = () => {
    setItems((items) => [
      ...items,
      todos.find((item) => !items.includes(item)) // find => item : todos의 요소들 [find안에서 반복문 실행]
    ]);
  }

  const handleFindClick = () => {
    todos.find((item)=> {
      console.log(item);
    });
  }

  return (
    <>
      {items.map((todo, index) => (
        <div key={index}>
          <button onClick={()=> handleDoneClick(todo)}>
            {todo.value}
          </button>
        </div>
      ))}
      <br/>
      <br/>
      <button onClick={handleRestoreClick}>Restore</button>
      <button onClick={handleFindClick}>Find</button>
    </>
  );
}

export default App;
