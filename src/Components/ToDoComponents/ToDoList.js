import ToDoItem from "./ToDoItem"

const ToDoList = () => {

    const tasksList = [
        {
            taskName: 'laundry',
            description: 'make your parents proud',
            isDone: false,
            dueDate: '06/13/2023',
        },
        {
            taskName: 'car wash',
            description: 'bathtime for your vehicle',
            isDone: true,
            dueDate: '06/14/2023',
        },
        {
            taskName: 'shopping',
            description: 'buy lasagna ingredients',
            isDone: false,
            dueDate: '06/15/2023',
        }
    ]

  return (
    <div>
        {tasksList.map((task, index) => {
        return <ToDoItem task={task} key={index}></ToDoItem>
    })}
    </div>
   
  )
}

export default ToDoList