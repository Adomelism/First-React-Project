import { useState, useEffect } from "react"
import { v4 as uuid } from "uuid";


const DogsForm = ({onBreedSelect, selectedBreed}) => {

    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
      fetch(' https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        // setBreeds(data.message)
        const breedsData = data.message;
        // console.log(breedsData)

        const updatedArr = [];

        for (let mainBreed in breedsData) {
            // console.log(mainBreed)
            const subBreeds = breedsData[mainBreed]
            // console.log(subBreeds)
           
            const breedObject = {mainBreed, subBreeds}
            // console.log(breedObject)

            updatedArr.push(breedObject)
            // console.log(updatedArr)
        }
        
        setBreeds(updatedArr);

      })
      
    }, [])

const breedsOptionElements = breeds.map(data => {
    const mainBreed = data.mainBreed
    const subBreeds = data.subBreeds

    if (subBreeds.length > 0) {
        const subBreedsOptionElements = subBreeds.map(subBreed => <option key={uuid()} value={`${mainBreed}/${subBreed}`}>{mainBreed} ({subBreed})</option>);
        return  subBreedsOptionElements;
    } else {
        return <option key={uuid()} value={mainBreed}>{mainBreed}</option>
    }

}) 
    if (breeds.length === 0) {
        return '';
    }

  return (
    <div>
        <form>
            <select value={selectedBreed} onChange={(e) => onBreedSelect(e.target.value)}>
                <option value='' disabled>select a breed</option>
                {breedsOptionElements}
            </select>
        </form>
    </div>
  )
}

export default DogsForm