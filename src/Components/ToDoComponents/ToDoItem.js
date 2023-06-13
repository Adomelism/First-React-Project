import dayjs from "dayjs";

const ToDoItem = ({task}) => {
    let isItDone = '';

    let {taskName, description, isDone, dueDate, date} = task;
   
    if (isDone) {
        isItDone = 'Task was completed.'
    } else {
        isItDone = 'Task is not yet completed.'
    }

    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)
    const untilDeadline = dayjs().to(dayjs(dueDate));

  return (
    <div>
        <h3>{taskName}</h3>
        <h4>You need to {description} by {dueDate}</h4>
        <div>Task needs to be completed {untilDeadline}.</div>
        <h5>{isItDone}</h5>
        <div>Task was created {date}.</div>
    </div>
  )
}

export default ToDoItem