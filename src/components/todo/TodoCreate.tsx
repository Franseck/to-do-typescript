import { useDispatch } from "react-redux"
import "../../scss/todo.scss"
import { useState } from "react";
import { createTodo } from "../../features/todoSlice";
import { TodoType } from "../../types/AllTypes";

const TodoCreate = () => {
const dispatch = useDispatch();
const [newTodo, setNewTodo] = useState<string>("")
const handleCreateTodo =()=>{
if(newTodo.trim().length==0){
  alert("add a todo!")
  return
}
const payload:TodoType ={
  id:Math.floor(Math.random()*99999),
  content : newTodo
}
dispatch(createTodo(payload));
setNewTodo("")
}
  return (
    <div className="todo-create">
        <input 
        value={newTodo}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNewTodo(e.target.value)}
        className="todo-input" 
        type="text" 
        placeholder="add a task"
        
        />
        <button onClick={handleCreateTodo} className="todo-create-button" >Add</button>
        

    </div>
  )
}

export default TodoCreate