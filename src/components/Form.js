import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { ThemeContext } from '../App';


const Form =(props)=>{
  const darkTheme = useContext(ThemeContext)
  const themeStyles = {
    color: darkTheme ? 'black' : 'white',
    background: darkTheme ? 'white' : 'grey',
  }

  const inputTextHandler = (e) =>{
    props.setInputText(e.target.value)
  };

  const SubmitTodoHandler =(e) =>{
    e.preventDefault();
    props.setTodos([
      ...props.todos, {text: props.inputText , completed: false, id: Math.random() * 1000 }
    ]);
    props.setInputText("");
  }

  const statusHandler = (e) => {
    props.setStatus(e.target.value)
  }

  return(
      <form>
          <input style={themeStyles} value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
          <button onClick={SubmitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select style={themeStyles}onChange={statusHandler} name="todos" className="filter-todo">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
    </form>
  );
}


export default Form;