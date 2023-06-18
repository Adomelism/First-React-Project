import { useState } from "react"

const AiForm = ({onNameSubmit}) => {

    const [name, setName] = useState('')

    const nameHandler = event => setName(event.target.value)

    const formSubmitHandler = event => {
      event.preventDefault();
      onNameSubmit(name);
    setName('');
    }

  return (
    <div>
         <form onSubmit={formSubmitHandler}>
            <label htmlFor='search-name'>Enter a name:</label>
            <input type='text' id='search-name' value={name} onChange={nameHandler}></input>
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default AiForm