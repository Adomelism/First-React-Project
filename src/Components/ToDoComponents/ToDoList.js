import ToDoItem from "./ToDoItem"

const ToDoList = ({data}) => {

  return (
    <div>
        {data.map((task, index) => {
        return <ToDoItem task={task} key={index}></ToDoItem>
    })}
    </div>
   
  )
}

export default ToDoList