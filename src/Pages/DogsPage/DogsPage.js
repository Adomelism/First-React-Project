import Container from '../../Components/Container/Container';
import DogsForm from '../../Components/DogsComponents/DogsForm';
import DogsImages from '../../Components/DogsComponents/DogsImages';
import { useState } from 'react';

const DogsPage = () => {


    const [selectedBreed, setSelectedBreed] = useState('')

    const selectHandler = (breed) => {
        setSelectedBreed(breed)
        console.log(setSelectedBreed)
    }
    

  return (
    <Container>
        <DogsForm onBreedSelect={selectHandler} selectedBreed={selectedBreed}/>
        <DogsImages breed={selectedBreed}/>
    </Container>
  )
}

export default DogsPage