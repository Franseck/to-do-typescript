import { IoMdRemoveCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { TodoProps } from "../../types/AllTypes";

const Todo = ({todoProps} : TodoProps) => {
  const {id, content} = todoProps;
  return (
    <div className="todo">
        <div>{content}</div>
<div className="icons">
    <IoMdRemoveCircle/>
    <GrEdit/>

</div>

    </div>
  )
}

export default Todo