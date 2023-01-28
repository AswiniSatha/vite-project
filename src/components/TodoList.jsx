import React from "react";
import Todo from "./Todo";

function TodoList({todos,togglecompleted,removeElement})
{
    return(<div>
        {
        todos.map((todo,index)=>
        (
            <Todo key={index} todo={todo} togglecompleted={togglecompleted} removeElement={removeElement}/>
        
        ))
    }
    </div>
    )
}

export default TodoList;