import { useSelector } from 'react-redux'
import Todo from './Todo'
import { RootState } from '../../app/store'
import { TodoType } from '../../types/AllTypes'


const TodoList = () => {
const {todos} = useSelector((state:RootState)=>state.todo)

  return (
    <div className='todoList'>
      {todos && todos.map((todo:TodoType)=>(
            <Todo key={todo.id} todoProps = {todo}/>
      ))}
    
    </div>
  )
}

export default TodoList