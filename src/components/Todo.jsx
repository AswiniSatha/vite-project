import React from "react";
import './Todo.css'

function Todo({todo, togglecompleted,removeElement})
{

    return(<div className="todo-container" key={todo.id}>
        <input type="checkbox" checked={todo.isCompleted}
        onChange={()=>togglecompleted(todo.id)} />
        <p style={todo.isCompleted? {textDecoration:'line-through',color:'#898989'}:{textDecoration:'none'}}>{todo.text}</p>
        <div className="todo-time">
            <p>{todo.time}</p>
            <p>{todo.date}</p>
        </div>
        <button onClick={() => removeElement(todo.id)}>X</button>
        {/* <svg fill="#ff0000" height="29px" width="29px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <path class="cls-1" d="M13,4.66667,9.66667,7.99917,13,11.33333,11.33333,13,8,9.66667,4.66667,13,3,11.33333,6.33333,7.99917,3,4.66667,4.66667,3,8,6.33333,11.33333,3Z"></path> </g></svg></button> */}
       
            {/*  */}
    </div>)
}

export default Todo;