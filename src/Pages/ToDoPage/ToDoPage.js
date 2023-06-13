import ToDoForm from "../../Components/ToDoComponents/ToDoForm";
import ToDoList from "../../Components/ToDoComponents/ToDoList";
import Container from "../../Components/Container/Container";
import { useState } from "react";

const ToDoPage = () => {
    
    const tasksList = [
        {
            taskName: 'laundry',
            description: 'make your parents proud',
            isDone: false,
            dueDate: '06-30-2023',
            date: '06-13-2023',
        },
        {
            taskName: 'car wash',
            description: 'bathtime for your vehicle',
            isDone: true,
            dueDate: '06-30-2023',
            date: '06-13-2023',
        },
        {
            taskName: 'shopping',
            description: 'buy lasagna ingredients',
            isDone: false,
            dueDate: '06-30-2023',
            date: '06-13-2023',
        }
    ]

    // 4. Pridėti galimybę pažymėti užduotį kaip atliktą.
    // 5. Pridėti galimybę ištrinti užduotį.
    // 6. Pridėti galimybę redaguoti užduotį.
    
    const [tasks, setTasks] = useState(tasksList)

    const addNewTaskHandler = (task) => {
        setTasks(prevState => [task, ...prevState])
    }
    
  return (
    <div>
        <Container>
            <ToDoList data={tasks}/>
            <ToDoForm onNewTask={addNewTaskHandler}/>
        </Container> 
    </div>
   
  )
}

export default ToDoPage