import ToDoItem from "./ToDoItem"

const ToDoList = ({data, onDoneTask, onRemoveTask}) => {

  return (
    <div>
        {data.map((task, index) => {
        return <ToDoItem task={task} key={index} onDoneTask={onDoneTask} onRemoveTask={onRemoveTask}></ToDoItem>
    })}
    </div>
   
  )
}

export default ToDoList