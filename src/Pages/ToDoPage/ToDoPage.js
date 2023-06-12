import ToDoForm from "../../Components/ToDoComponents/ToDoForm";

const ToDoPage = () => {

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

{tasksList.map((task) => {
        let isItDone = '';
        let {taskName, description, isDone, dueDate} = task;

        console.log(taskName)
        console.log(description)
        console.log(isDone)
        console.log(dueDate)

         if (isDone) {
        isItDone = 'Task was completed.'
    } else {
        isItDone = 'Task is not yet completed.'
    }
    return <div>
                <h3>{taskName}</h3>
                <h4>You need to {description} by {dueDate}</h4>
                <h5>{isItDone}</h5>
            </div>
    })}


        <ToDoForm />
    </div>
   
  )
}

export default ToDoPage