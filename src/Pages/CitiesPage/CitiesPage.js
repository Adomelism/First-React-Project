import './CitiesPage.css';
import { useState } from 'react';
import CityItem from '../../Components/CitiesComponents/CityItem';
import Container from '../../Components/Container/Container';

const CitiesPage = () => {

    let citiesData = [
        {
            name: 'Vilnius',
            population: 500000,
            location: {
                continent: 'Europe',
                country: 'Lietuva',
            },
            touristAttractions: ['Gedimino pilies bokstas', 'Vilniaus katedra'],
            isCapital: true,
        },
        {
            name: 'New York',
            population: 8500000,
            location: {
                continent: 'North America',
                country: 'United States',
            },
            touristAttractions: [],
            isCapital: false,
        },
        {
            name: 'Tokyo',
            population: 14000000,
            location: {
                continent: 'Asia',
                country: 'Japan',
            },
            touristAttractions: ['Sensō-ji'],
            isCapital: true,
        },
        {
            name: 'Amsterdam',
            population: 1400000,
            location: {
                continent: 'Europe',
                country: 'Netherlands',
            },
            touristAttractions: ['Van gogh museum', 'Rijksmuseum', 'Anne Frank museum'],
            isCapital: true,
        },
        {
            name: 'Monaco',
            population: 40000,
            location: {
                continent: 'Europe',
                country: 'Monaco',
            },
            touristAttractions: [],
            isCapital: true,
        },
        {
            name: 'Havana',
            population: 2400000,
            location: {
                continent: 'North America',
                country: 'Cuba',
            },
            touristAttractions: ['National Capitol of Cuba', 'Plaza de la Catedral'],
            isCapital: true,
        },
        {
            name: 'Singapore',
            population: 5600000,
            location: {
                continent: 'Asia',
                country: 'Singapore',
            },
            touristAttractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Singapore Zoo'],
            isCapital: true,
        },
        {
            name: 'Melbourne',
            population: 5000000,
            location: {
                continent: 'Australia',
                country: 'Australia',
            },
            touristAttractions: ['Melbourne Skydeck'],
            isCapital: false,
        },
        {
            name: 'Sapporo',
            population: 1900000,
            location: {
                continent: 'Asia',
                country: 'Japan',
            },
            touristAttractions: ['Hokkaido Jingu'],
            isCapital: false,
        },

    ];

const [cities, setCities] = useState(citiesData);

const oddCitiesClass = cities.length % 2 !== 0 ? ' odd-cities' : '';


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

    setCities(prevState => [newCity, ...prevState]);
    setcityName('')
    setIsCapital(false)
    setPopulation('')
    setContinent('')
    setCountry('')
    setTouristAttractions('')

}
  return (
<Container>

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
   


    <div className={'cities-list' + oddCitiesClass}>
    {cities.map((city, index) => {
        return <CityItem key={index} city={city} />
    })}
    </div>
</Container>  
)
}

export default CitiesPage