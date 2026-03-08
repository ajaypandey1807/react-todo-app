
import {useState,useEffect} from "react"

import TodoInput from "../components/TodoInput"
import TodoList from "../components/TodoList"

function Home(){

const [todos,setTodos] = useState([])

useEffect(()=>{
const saved = JSON.parse(localStorage.getItem("todos"))
if(saved) setTodos(saved)
},[])

useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

const addTodo = (text)=>{

const newTodo={
id:Date.now(),
text,
completed:false
}

setTodos([...todos,newTodo])

}

const deleteTodo = (id)=>{
setTodos(todos.filter(todo=>todo.id!==id))
}

const toggleTodo = (id)=>{

setTodos(
todos.map(todo=>
todo.id===id
? {...todo,completed:!todo.completed}
: todo
)
)

}

const editTodo = (id,newText)=>{

setTodos(
todos.map(todo=>
todo.id===id
? {...todo,text:newText}
: todo
)
)

}

const completed = todos.filter(todo=>todo.completed).length

return(

<div className="app" style={{marginTop:"100px"}}>

<TodoInput addTodo={addTodo}/>

<p className="counter">
Tasks : {todos.length}
</p>

<p className="counter">
Completed : {completed}
</p>

<TodoList
todos={todos}
deleteTodo={deleteTodo}
toggleTodo={toggleTodo}
editTodo={editTodo}
/>

<button className="clear" onClick={()=>setTodos([])}>
Clear All
</button>

</div>

)

}

export default Home

