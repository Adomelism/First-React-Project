import { useState } from 'react';


const CitiesForm = ({onNewCity}) => {

const [cityName, setcityName] = useState('')
const [isCapital, setIsCapital] = useState(false)
const [population, setPopulation] = useState('')
const [continent, setContinent] = useState('')
const [country, setCountry] = useState('')
const [touristAttractions, setTouristAttractions] = useState('')

const addCityHandler = (event) => {
    event.preventDefault();
    const newCity = {
            name: cityName,
            population: population,
            location: {
                continent: continent,
                country: country,
            },
            touristAttractions: touristAttractions.split(',').map(attraction => attraction.trim()),
            isCapital: isCapital,
        }

        onNewCity(newCity);

    // setCities(prevState => [newCity, ...prevState]);


    setcityName('')
    setIsCapital(false)
    setPopulation('')
    setContinent('')
    setCountry('')
    setTouristAttractions('')

}
    
  return (
    <form onSubmit={addCityHandler}>
    <div>
        <label htmlFor="city">City: </label>
        <input type="text" id="city" name="city" value={cityName} onChange={(event) => setcityName(event.target.value)}></input>
    </div>
    <div>
        <label htmlFor="isCapital"> Is capital: </label>
        <input type="checkbox" id="isCapital" name="isCapital" checked={(isCapital)} onChange={(event) => setIsCapital(event.target.checked)}></input>
    </div>
    <div>
        <label htmlFor="population"> Population: </label>
        <input type="number" id="population" name="population" value={population} onChange={(event) => setPopulation(event.target.value)}></input>
    </div>
    <div>
        <label htmlFor="continent"> Continent: </label>
        <input type="text" id="continent" name="continent" value={continent} onChange={(event) => setContinent(event.target.value)}></input>
    </div>
    <div>
        <label htmlFor="country"> Country: </label>
        <input type="text" id="country" name="country" value={country} onChange={(event) => setCountry(event.target.value)}></input>
    </div>
    <div>
        <label htmlFor="touristAttractions"> Tourist Atrractions: </label>
        <textarea id="touristAttractions" name="touristAttractions" value={touristAttractions} onChange={(event) => setTouristAttractions(event.target.value)} />
    </div>
    <div>
        <label htmlFor="submitForm"></label>
        <button type="submit" id="submitForm">Add City</button>
    </div>
</form>
  )
}

export default CitiesForm