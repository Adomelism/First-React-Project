import { useState, useEffect } from "react";

const ToDoForm = ({onNewTask, editToDoData}) => {
    let [name, setName] = useState('')
    let [description, setDescription] = useState('')
    let [isDone, setIsDone] = useState(false)
    let [dueDate, setDueDate] = useState('')

    useEffect(() => {
        if (editToDoData) {
            setName(editToDoData.taskName)
            setDescription(editToDoData.description)
            setDueDate(editToDoData.dueDate)
        }
    }, [editToDoData])

    const nameHandler = (event) => setName(event.target.value)
    const descriptionHandler = (event) => setDescription(event.target.value)
    const dueDateHandler = (event) => setDueDate(event.target.value)

    const onTaskHandler = (event) => {
        event.preventDefault();

        const date = new Date();
        const fullDate = date.toISOString().slice(0, 10);
        let newItem = {};

        if (editToDoData) {
            newItem = 
        {
            taskName: name,
            description,
            isDone: editToDoData.isDone,
            dueDate,
            date: fullDate,
            id: editToDoData.id,
            edited: fullDate,
        }
        } else {
            newItem = 
        {
            taskName: name,
            description,
            isDone,
            dueDate,
            date: fullDate,
            id: Math.random(),
        }
        }
        
        onNewTask(newItem);
        setName('');
        setDescription('');
        setDueDate('');

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
        <label htmlFor="taskDueDate">Task Due Date: </label>
        <input type="date" id="taskDueDate" name="taskDueDate" value={dueDate} onChange={dueDateHandler}/>
    </div>
    <div>
        <button type="submit" id="submit" name="submit">{editToDoData ? 'Edit Task' : 'Create Task'}</button>
    </div>
</form>
  )
}

export default ToDoForm