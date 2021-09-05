import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setfilterTodos] = useState([]);

  useEffect(()=>{
    switch(status){
      case 'completed' :
        setfilterTodos(todos.filter( todo => todo.completed === true ));
        break;
      case 'uncompleted':
        setfilterTodos(todos.filter( todo => todo.completed === false ));
        break;
      default:
        setfilterTodos(todos);
        break;
    }
  },[todos,status])



  return (
    <div className="App">
      <header>
        <h1>Han's Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
