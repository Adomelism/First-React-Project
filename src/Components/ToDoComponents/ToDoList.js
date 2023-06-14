import ToDoItem from "./ToDoItem"

const ToDoList = ({data, onDoneTask, onRemoveTask, onEditTask}) => {

  return (
    <div>
        {data.map((task, index) => {
        return <ToDoItem task={task} key={index} onDoneTask={onDoneTask} onRemoveTask={onRemoveTask} onEditTask={onEditTask}></ToDoItem>
    })}
    </div>
   
  )
}

export default ToDoList