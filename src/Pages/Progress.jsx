import { useEffect, useState } from "react"

function Progress(){

const [todos,setTodos] = useState([])

useEffect(()=>{

const saved = JSON.parse(localStorage.getItem("todos"))

if(saved){
setTodos(saved)
}

},[])

const total = todos.length
const completed = todos.filter(todo=>todo.completed).length

const percent = total === 0 ? 0 : Math.round((completed/total)*100)

return(

<div className="app" style={{marginTop:"120px"}}>

<h1>Task Progress</h1>

<p>Total Tasks: {total}</p>

<p>Completed Tasks: {completed}</p>

<div className="progress-bar">

<div
className="progress-fill"
style={{width:`${percent}%`}}
>

</div>

</div>

<p>{percent}% Completed</p>

</div>

)

}

export default Progress