
const AiOutput = ({data}) => {

    if (!data) {
        return '';
    }

    let {name, nationality, age, gender} = data;

  return (
    <div>
        <h1>Information about {name}:</h1>
        <ul>
            <li>{age}</li>
            <li>{gender}</li>
            <li>{nationality}</li>
        </ul>
    </div>
  )
}

export default AiOutput