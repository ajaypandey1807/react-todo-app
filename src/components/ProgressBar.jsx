function ProgressBar({todos}){

const completed = todos.filter(todo=>todo.completed).length
const total = todos.length

const percent = total === 0 ? 0 : (completed/total)*100

return(

<div className="progress">

<div
className="progress-bar"
style={{width:percent+"%"}}
>

</div>

</div>

)

}

export default ProgressBar