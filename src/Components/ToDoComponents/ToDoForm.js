
const ToDoForm = () => {
  return (
    <form>
    <div>
        <label htmlFor="TaskName">To Do Task: </label>
        <input type="text" id="TaskName" name="TaskName"></input>
    </div>
    <div>
        <label htmlFor="TaskDescription">Task Description: </label>
        <textarea id="TaskDescription" name="TaskDescription" />
    </div>
    <div>
        <label htmlFor="isTaskDone">Task Done: </label>
        <input type="checkbox" id="isTaskDone" name="isTaskDone" />
    </div>
    <div>
        <label htmlFor="taskDueDate">Task Due Date: </label>
        <input type="date" id="taskDueDate" name="taskDueDate" />
    </div>
    <div>
        <button type="submit" id="submit" name="submit">Create Task</button>
    </div>
</form>
  )
}

export default ToDoForm