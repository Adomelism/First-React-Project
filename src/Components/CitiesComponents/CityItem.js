
const CityItem = ({city}) => {
    let {name, population, location, touristAttraction, isCapital} = city;
  return (
<div>
    <h2>{name}</h2>
    <p>{name} is located in {location.continent} and has population of {population} people.</p>
    <h3>Main Tourist attraction of {name} is:</h3>
    
</div>
  )
}

export default CityItem

        // console.log(city)
        // console.log(city.name)
        // console.log(city.population)
        // console.log(city.location.continent)
        // console.log(city.location.country)
        // console.log(city.touristAttractions)
        // console.log(city.isCapital)


