

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

    if (touristAttractions.length === 1) {
      touristAttractionText = 'Main Tourist attraction of ' + name + ' is:'
    } else if (touristAttractions.length > 1) {
      touristAttractionText = 'Main Tourist attractions of ' + name + ' are:'
    } else {
      touristAttractionText = '';
    }

  return (
      <div className="cities-item">
        <h2 className={capitalClass}>{title}</h2>
        <p>{name} is located in {location.continent}, {location.country} and has population of {population} people.</p>
        <span>{capitalText}</span>
        <h3>{touristAttractionText}</h3>
        <ul>
          {touristAttractions.map((attraction, index) => {
            return <li key={index}>{attraction}</li>
          })}
        </ul>
    </div>


  )
}

export default CityItem



