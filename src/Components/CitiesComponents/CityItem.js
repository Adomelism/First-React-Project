
const CityItem = ({city}) => {
    let {name, population, location, touristAttractions, isCapital} = city;
    let title = name;
    let capitalText = '';
    let capitalClass = '';
    let touristAttractionText = '';

    if (isCapital) {
      title = name + ' (Capital)';
      capitalText = name + ' is capital of ' + location.country + '.';
      capitalClass = 'capital'
    }

console.log(touristAttractions.length)

    if (touristAttractions.length == 1) {
      touristAttractionText = 'Main Tourist attraction of ' + {name} + ' is:'
    } else if (touristAttractions.length > 1) {
      touristAttractionText = 'Main Tourist attractions of ' + {name} + ' are:'
    } else {
      touristAttractionText = '';
    }


  return (
<div>
    <h2 className={capitalClass}>{title}</h2>
    <p>{name} is located in {location.continent} and has population of {population} people.</p>
    <span>{capitalText}</span>
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


