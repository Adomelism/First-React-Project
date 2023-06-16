import Container from '../../Components/Container/Container';
import { useEffect } from 'react';
import DogsForm from '../../Components/DogsComponents/DogsForm';
import DogsImages from '../../Components/DogsComponents/DogsImages';

const DogsPage = () => {

    // 1. Sukurti formą, kuri leidžia pasirinkti šuns veislę ir grąžina atsitiktinę tos veislės nuotrauką.
    // 2. Jeigu šuns veislė yra išvestinė (sub-breed), tai šalia ji turėtų būti atvaizduojama parašant pagrindinės veislės pavadinimą (breed) ir šalia išvestinės veislės pavainimą (sub-breed).
    // viena kategorija
    // antra kategorija
    // Bulldog (French)
    // Bulldog (English)
    // Bulldog (Boston)
    // ketvirta kategorija

    

  return (
    <Container>
        <DogsForm />
        <DogsImages />
    </Container>
  )
}

export default DogsPage