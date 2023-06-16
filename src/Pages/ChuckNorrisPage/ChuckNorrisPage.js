import Container from '../../Components/Container/Container';
import { useEffect, useState } from 'react';

const ChuckNorrisPage = () => {
    const [randomJoke, setRandomJoke] = useState('')

    const randomJokeHandler = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => {
            setRandomJoke(data.value)
        })
    }

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
    
    }, [])

    
    const [selectedCategory, setSelectedCategory] = useState('')
    const categoryHandler = (event) => setSelectedCategory(event.target.value);
   
   useEffect(() => {
        const categoryParam = selectedCategory ? `?category=${selectedCategory}` : '';

        fetch('https://api.chucknorris.io/jokes/random' + categoryParam)
        .then(res => res.json())
        .then(data => {
            setRandomJoke(data.value)
        })
    
    }, [selectedCategory])

   
  return (
    <Container>
        <div className='random-joke'>
            <button onClick={randomJokeHandler}>Get a random Joke!</button>
        </div>
        <div>
        <form>
            <label htmlFor='category'>Select a joke by category: </label>
            
            <select onChange={categoryHandler} defaultValue=''>
                <option value='' disabled>-select-</option>
                {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
            </select>
        </form>
        </div>
        <div>
        {randomJoke}
        </div>

    </Container>
    
  )
}

export default ChuckNorrisPage