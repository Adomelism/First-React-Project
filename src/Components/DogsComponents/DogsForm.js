import { useState, useEffect } from "react"


const DogsForm = () => {

    const [breeds, setBreeds] = useState({});

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
            console.log(updatedArr)
        }
        
        setBreeds(updatedArr);

      })
      
    }, [])
    

  return (
    <div>
        <form>
            <select>
                <option>pirma</option>
                <option>antra</option>
            </select>
        </form>
    </div>
  )
}

export default DogsForm