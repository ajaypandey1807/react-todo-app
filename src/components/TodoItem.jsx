
import { useState } from "react"

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }){

const [editing,setEditing] = useState(false)
const [text,setText] = useState(todo.text)

const saveEdit = ()=>{
editTodo(todo.id,text)
setEditing(false)
}

return(

<div className="todo-item">

<div className="todo-content">

{editing ? (

<input
value={text}
onChange={(e)=>setText(e.target.value)}
/>

) : (

<span
className={todo.completed ? "completed" : ""}
onClick={()=>toggleTodo(todo.id)}
>

{todo.text}

</span>

)}

<div className="todo-meta">

{todo.category && (
<span className="category">
📂 {todo.category}
</span>
)}

{todo.date && (
<span className="date">
📅 {todo.date}
</span>
)}

</div>

</div>

<div className="buttons">

{editing ? (
<button onClick={saveEdit}>💾</button>
) : (
<button onClick={()=>setEditing(true)}>✏</button>
)}

<button onClick={()=>deleteTodo(todo.id)}>🗑</button>

</div>

</div>

)

}

export default TodoItem

