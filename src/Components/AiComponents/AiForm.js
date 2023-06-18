import { useState } from "react"

const AiForm = ({nameFormHandler}) => {

    const [name, setName] = useState('')

    const nameHandler = event => setName(event.target.value)

    const formSubmitHandler = event => event.preventDefault();
    nameFormHandler(name);
    setName('');

  return (
    <div>
         <form onSubmit={formSubmitHandler}>
            <label htmlFor='search-name'>Enter a name:</label>
            <input onChange={nameHandler} type='text' id='search-name'></input>
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default AiForm