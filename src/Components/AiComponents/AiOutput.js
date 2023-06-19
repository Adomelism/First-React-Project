
const AiOutput = ({data}) => {

    if (!data) {
        return '';
    }

    const {name, nationality, age, gender} = data;

  return (
    <div>
        <h1>Information about {name}:</h1>
        <ul>
            <li>Age: {age}</li>
            <li>Gender: {gender}</li>
            <li>Nationality: {nationality}</li>
        </ul>
    </div>
  )
}

export default AiOutput