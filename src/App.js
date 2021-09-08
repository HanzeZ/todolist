import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';


export const ThemeContext = React.createContext();

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setfilterTodos] = useState([]);
  const [darkTheme, setDarkTheme] = useState(true);

  const themeStyles = {
    color: darkTheme ? 'white' : 'black',
    backgroundColor: darkTheme ? 'black' : 'black',
  }


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

  const toggleTheme = () =>{
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
    document.body.style.backgroundImage = darkTheme ? 'linear-gradient(120deg, white 0%, #fda085 100%)' : 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)' ;
  }


  return (
    <ThemeContext.Provider value={darkTheme}>
      <div className="App">
          <button className="themebutton" onClick={toggleTheme}>Change Theme</button>
          <header>
            <h1 style={{color: themeStyles.color}}>Han's Todo List</h1>
          </header>
          <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}/>
          <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
