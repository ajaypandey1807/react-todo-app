
import TodoItem from "./TodoItem"

function TodoList({ todos, deleteTodo, toggleTodo, editTodo }){

if(todos.length === 0){
return <p className="empty">No tasks yet 🚀</p>
}

return(

<div className="todo-list">

{todos.map(todo => (

<TodoItem
key={todo.id}
todo={todo}
deleteTodo={deleteTodo}
toggleTodo={toggleTodo}
editTodo={editTodo}
/>

))}

</div>

)

}

export default TodoList

