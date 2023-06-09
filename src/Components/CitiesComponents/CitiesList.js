import CityItem from '../../Components/CitiesComponents/CityItem';


function CitiesList({ cities}) {

    const oddCitiesClass = cities.length % 2 !== 0 ? ' odd-cities' : '';

  return (
    <div className={'cities-list' + oddCitiesClass}>
    {cities.map((city, index) => {
        return <CityItem key={index} city={city} />
    })}
    </div>
  )
}

export default CitiesList