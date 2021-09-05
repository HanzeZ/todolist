import React from 'react';
import Todo from './Todo';
const TodoList =(props)=>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {props.filteredTodos.map((todo) => (
                    <Todo todo={todo} setTodos={props.setTodos} todos={props.todos} key={todo.id} text={todo.text}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;