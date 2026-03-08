
import { useState } from "react"

function TodoInput({ addTodo }){

const [text,setText] = useState("")
const [category,setCategory] = useState("General")
const [date,setDate] = useState("")

const handleAdd = ()=>{

if(text.trim()==="") return

addTodo({
text,
category,
date
})

setText("")
setDate("")

}

return(

<div className="input-box">

<input
type="text"
placeholder="Enter new task..."
value={text}
onChange={(e)=>setText(e.target.value)}
/>

<select
value={category}
onChange={(e)=>setCategory(e.target.value)}
>

<option>General</option>
<option>Work</option>
<option>Study</option>
<option>Personal</option>

</select>

<input
type="date"
value={date}
onChange={(e)=>setDate(e.target.value)}
/>

<button onClick={handleAdd}>
Add
</button>

</div>

)

}

export default TodoInput

