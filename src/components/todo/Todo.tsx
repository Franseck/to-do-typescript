import { IoMdRemoveCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { TodoProps } from "../../types/AllTypes";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../../features/todoSlice";
import { useState } from "react";

const Todo = ({todoProps} : TodoProps) => {
  const {id, content} = todoProps;
const dispatch = useDispatch();

const [edit, setEdit]= useState<boolean>(false);
const [newTodo, setNewTodo] = useState<string>(content);

const handleRemoveTodo =()=>{
dispatch(removeTodoById(id))
};

const handleUpdateTodo =()=>{
  const payload = {
    id:id,
    content : newTodo
  }
  dispatch(updateTodo(payload))
  setEdit(false)
}


  return (
    <div className="todo">
        {edit ? <input type="text" value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setNewTodo(e.target.value)} /> :
        <div>{content}</div>}

<div className="icons">
    <IoMdRemoveCircle onClick={handleRemoveTodo} />
    {edit ? <FaCheckCircle  onClick={handleUpdateTodo}/> :<GrEdit onClick={()=>setEdit(true)}/> }
    

</div>

    </div>
  )
}

export default Todo