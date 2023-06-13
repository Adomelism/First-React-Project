import ToDoItem from "./ToDoItem"

const ToDoList = ({data, onDoneTask}) => {

  return (
    <div>
        {data.map((task, index) => {
        return <ToDoItem task={task} key={index} onDoneTask={onDoneTask}></ToDoItem>
    })}
    </div>
   
  )
}

export default ToDoList