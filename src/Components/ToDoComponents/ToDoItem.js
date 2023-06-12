
const ToDoItem = ({task}) => {
    let isItDone = '';

    let {taskName, description, isDone, dueDate} = task;
   
    if (isDone) {
        isItDone = 'Task was completed.'
    } else {
        isItDone = 'Task is not yet completed.'
    }

  return (
    <div>
        <h3>{taskName}</h3>
        <h4>You need to {description} by {dueDate}</h4>
        <h5>{isItDone}</h5>
    </div>
  )
}

export default ToDoItem