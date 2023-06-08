import { useState } from "react"

const AddCityForm = () => {


const [input, setInput] = useState('')

const inputChangeHandler = (event) => {
    const newValue = event.target.value;
    console.log(event.target.value)
    setInput(prevState => {
        const newState = [newValue, ...prevState]
    })
}

  return (
    <form>
        <label htmlFor="city">City: </label>
        <input type="text" id="city" name="city" value={input} onChange={() => inputChangeHandler}></input>
        <label htmlFor="isCapital"> Is city a capital of this country? </label>
        <input type="checkbox" id="isCapital" name="isCapital" checked={true}></input>
        <label htmlFor="population"> Population: </label>
        <input type="number" id="population" name="population" value={input} onChange={() => inputChangeHandler}></input>
        <label htmlFor="population"> Population: </label>
        <input type="number" id="population" name="population" value={input} onChange={() => inputChangeHandler}></input>
        <label htmlFor="continent"> Continent: </label>
        <input type="text" id="continent" name="continent" value={input} onChange={() => inputChangeHandler}></input>
        <label htmlFor="country"> Country: </label>
        <input type="text" id="country" name="country" value={input} onChange={() => inputChangeHandler}></input>
        <label htmlFor="touristAttractions"> Tourist Atrractions: </label>
        <input type="text" id="touristAttractions" name="touristAttractions" value={input} onChange={() => inputChangeHandler}></input>


        <label htmlFor="submitForm"></label>
        <button type="submit" id="submitForm">Add City</button>


    </form>
  )
}

export default AddCityForm