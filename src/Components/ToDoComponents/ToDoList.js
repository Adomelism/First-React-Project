
const ToDoList = () => {

    const tasksList = [
        {
            task: 'laundry',
            description: 'make your parents proud',
            isDone: false,
            dueDate: '06/13/2023',
        },
        {
            task: 'car wash',
            description: 'bathtime for your vehicle',
            isDone: false,
            dueDate: '06/14/2023',
        },
        {
            task: 'shopping',
            description: 'buy lasagna ingredients',
            isDone: false,
            dueDate: '06/15/2023',
        }
    ]

    const isItDone = ''
    
    if (isDone) {
        console.log(isDone)
        isItDone = 'Task was completed.'
    } else {
        isItDone = 'Task is not yet completed.'
    }

  return (
    <div>
         <h1>{task}</h1>
        <h2>You need to {description} by {dueDate}</h2>
        <h3>{isItDone}</h3>
    </div>
   
  )
}

export default ToDoList