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
            dueDate: '2023-06-30',
            date: '2023-06-13',
            id: Math.random(),
        },
        {
            taskName: 'car wash',
            description: 'bathtime for your vehicle',
            isDone: true,
            dueDate: '2023-06-30',
            date: '2023-06-13',
            id: Math.random(),
        },
        {
            taskName: 'shopping',
            description: 'buy lasagna ingredients',
            isDone: false,
            dueDate: '2023-06-30',
            date: '2023-06-13',
            id: Math.random(),
        }
    ]

    const [tasks, setTasks] = useState(tasksList)
    const [editToDo, setEditToDo] = useState(null)

    const completionHandler = (id) => {
        const index = tasks.findIndex(item => item.id === id)
    
        setTasks(prevState => {
            let newState = [...prevState]
            newState[index] = {...newState[index], isDone: !newState[index].isDone}
            return newState;
        })
    }

    const addNewTaskHandler = (task) => {
        if (editToDo) {
            const index = tasks.findIndex(item => item.id === task.id)
            setTasks(prevState => {
                const newState = [...prevState];
                newState.splice(index, 1, task)

                return newState;
            })
            setEditToDo(null)
        } else {
            setTasks(prevState => [task, ...prevState])
        }
    }

    const removeTaskHandler = (id) => {

        setTasks(prevState => {
            let newState = prevState.filter(setTask => setTask.id !== id);
            return newState;
        })
    }

    const editTaskHandler = (idToEdit) => {
        let editTask = tasks.find(task => task.id === idToEdit)

        setEditToDo(editTask)
    }
    
  return (
    <div>
        <Container>
            <ToDoForm onNewTask={addNewTaskHandler} editToDoData={editToDo}/>
            <ToDoList data={tasks} onDoneTask={completionHandler} onRemoveTask={removeTaskHandler} onEditTask={editTaskHandler}/>
        </Container> 
    </div>
   
  )
}

export default ToDoPage