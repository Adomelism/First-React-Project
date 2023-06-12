import ToDoForm from "../../Components/ToDoComponents/ToDoForm";
import ToDoList from "../../Components/ToDoComponents/ToDoList";
import Container from "../../Components/Container/Container";

const ToDoPage = () => {

    
  return (
    <div>
        <Container>
            <ToDoList />
            <ToDoForm />
        </Container> 
    </div>
   
  )
}

export default ToDoPage