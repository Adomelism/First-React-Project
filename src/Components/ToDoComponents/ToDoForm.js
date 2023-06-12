import { useState } from "react";

const ToDoForm = ({onNewTask}) => {

    let [name, setName] = useState('')
    let [description, setDescription] = useState('')
    let [isDone, setIsDone] = useState(false)
    let [dueDate, setDueDate] = useState('')

    const nameHandler = (event) => setName(event.target.value)
    const descriptionHandler = (event) => setDescription(event.target.value)
    const isDoneHandler = (event) => setIsDone(event.target.checked)
    const dueDateHandler = (event) => setDueDate(event.target.value)


    const onTaskHandler = (event) => {
        event.preventDefault();

        const newItem = 
        {
            taskName: name,
            description,
            isDone,
            dueDate,
        }

        onNewTask(newItem);
    }

  return (
    <form onSubmit={onTaskHandler}>
    <div>
        <label htmlFor="TaskName">Task Name: </label>
        <input type="text" id="TaskName" name="TaskName" value={name} onChange={nameHandler}></input>
    </div>
    <div>
        <label htmlFor="TaskDescription">Task Description: </label>
        <textarea id="TaskDescription" name="TaskDescription" value={description} onChange={descriptionHandler} />
    </div>
    <div>
        <label htmlFor="isTaskDone">Task Done: </label>
        <input type="checkbox" id="isTaskDone" name="isTaskDone" checked={isDone} onChange={isDoneHandler}/>
    </div>
    <div>
        <label htmlFor="taskDueDate">Task Due Date: </label>
        <input type="date" id="taskDueDate" name="taskDueDate" value={dueDate} onChange={dueDateHandler}/>
    </div>
    <div>
        <button type="submit" id="submit" name="submit">Create Task</button>
    </div>
</form>
  )
}

export default ToDoForm