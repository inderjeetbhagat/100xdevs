import { useState } from 'react'

import './App.css'
//anytime a parent re render, its childe re render as well
function App() {
  const [todos, setTodos] = useState([{
    title: "Go To Gym",
    description: "Go from 9-5",
    completed: false
  },{
    title: "Study DSA",
    description: "Do Striver Sheet",
    completed: true
  }]);

  function addTodo(){
    setTodos([...todos, {
      title: "new Todo",
      description: " Hi there"
    }])
  }

  return (
  <div>
    <button onClick={addTodo}>Add a Random TODO</button>
    {todos.map(function(todo) {
      return <Todo title={todo.title} description={todo.description}/>
    })}
    
  </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>

  </div>
}

export default App
