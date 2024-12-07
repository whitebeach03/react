// import logo from './logo.svg';
import { Prev } from 'react-bootstrap/esm/PageItem';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [todo, setTodo] = useState('');
  const [todolist, setTodolist] = useState([]);


  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  function handleButtonClick() {
      alert('入力されたToDo: ' + todo)
      setTodolist((prev) => [...prev, todo])
  }

  return (
    <div className="App">
      <h1>Hello World.</h1>
      <h2>My Name Is Takumi Shirahama.</h2>

      <input 
        type='text'  
        placeholder='ToDoの入力' 
        onChange={handleTodo}
      />

      <button onClick={handleButtonClick}> ケツ穴確定ボタン </button>

      {
        todolist.map(
           (todo, index) => {
            return (
              <p key={index}>{todo}</p>
            );
           }
        )
      }

    </div>
  );
}

export default App;
