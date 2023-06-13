import dayjs from "dayjs";

const ToDoItem = ({task, onDoneTask}) => {
  let {taskName, description, isDone, dueDate, date, id} = task;
  
  let isItDone = '';
  let doneTag = false;
   
    if (isDone) {
      doneTag = true;
        isItDone = 'Task was completed.'
    } else {
        doneTag = false;
        isItDone = 'Task is not yet completed.'
    }

    const completionStatusHandler = () => {
      onDoneTask(id);
    }

    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)
    const untilDeadline = dayjs().to(dayjs(dueDate));

  return (
    <div>
        <h3>{taskName}</h3>
        <h4>You need to {description} by {dueDate}</h4>
        <div>Task was created {date}.</div>
        <div>Task needs to be completed {untilDeadline}.</div>
        <div>
          <h5>{isItDone}</h5>
          <form>
            <label htmlFor="toggleCompletion">Mark as done: </label>
            <input type='checkbox' id='toggleCompletion' name='toggleCompletion' checked={doneTag} onChange={completionStatusHandler}></input>
          </form>
        </div>
    </div>
  )
}

export default ToDoItem