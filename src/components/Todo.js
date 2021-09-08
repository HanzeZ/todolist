import React , { useContext } from 'react';
import { ThemeContext } from '../App';
const Todo = ({text, todo, todos, setTodos }) => {
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        color: darkTheme ? 'black' : 'white',
        background: darkTheme ? 'white' : 'black',
      }

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const completeHandler = () =>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return(
        <div style={themeStyles} className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;