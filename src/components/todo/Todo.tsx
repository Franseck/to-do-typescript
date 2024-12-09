import { IoMdRemoveCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { TodoProps } from "../../types/AllTypes";
import { useDispatch } from "react-redux";
import { removeTodoById } from "../../features/todoSlice";
import { useState } from "react";

const Todo = ({todoProps} : TodoProps) => {
  const {id, content} = todoProps;
const dispatch = useDispatch();

const [edit, setEdit]= useState<Boolean>(false);

const handleRemoveTodo =()=>{
dispatch(removeTodoById(id))
};


  return (
    <div className="todo">
        <div>{content}</div>
<div className="icons">
    <IoMdRemoveCircle onClick={handleRemoveTodo} />
    {edit ? <FaCheckCircle/> :<GrEdit/> }
    

</div>

    </div>
  )
}

export default Todo