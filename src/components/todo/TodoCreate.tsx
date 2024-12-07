import "../../scss/todo.scss"

const TodoCreate = () => {
  return (
    <div className="todo-create">
        <input className="todo-input" type="text" placeholder="add a task"/>
        <button className="todo-create-button" >Add</button>
        

    </div>
  )
}

export default TodoCreate