import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header.jsx'
import TodoList from './components/TodoList.jsx'
import Todo from './components/Todo.jsx'
import TodoForm from './components/TodoForm.jsx'

function App() {
  
  const [todos, setTodos]=useState([]);
  const [storeData, setStoreData]=useState([]);
  localStorage.setItem("Todo",JSON.stringify(todos));
  

  //store();
 // console.log(a[0]);

function addTodo(todo)
{
  if(todo.length===0)
  {
    alert('Please enter a Todo Task');
    return;
  }
  let todoObject={
    id:Math.floor(Math.random()*100000),
    text:todo,
    isCompleted:false,
    time:new Date().toLocaleTimeString(),
    Date:new Date().toLocaleDateString()
  }
  setTodos([...todos, todoObject]);
  console.log(todos);
  
}
function store()
{
  setTodos([...todos, t]);
}
function togglecompleted(todoid)
{
   setTodos(todos.map(todo=>{
    if(todo.id==todoid)
    {
      return{...todo,
      isCompleted:!todo.isCompleted}
    }
   return todo;}
   ))
  }
  function removeElement(todoid)
  {
   
    setTodos(todos.filter(todo=>todo.id!==todoid))
  }

  return (
    <div className="container">
      <Header/>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} togglecompleted={togglecompleted} removeElement={removeElement}/>
      
      
    </div>
  )
}

export default App
