import { useState } from "react"


const CounterPage = () => {

    const [count, setCount] = useState(5)

    const plus1Handler = () => setCount(count +1);
    const minus1Handler = () => setCount(count -1);
    const plus2Handler = () => setCount(count +2);
    const minus2Handler = () => setCount(count -2);
    const plus5Handler = () => setCount(count +5);
    const minus5Handler = () => setCount(count -5);
    const resetHandler = () => setCount(5);

  return (
    <div>
    <h3>{count}</h3>
    <button onClick={minus5Handler} disabled={count <6}>-5</button>
    <button onClick={minus2Handler} disabled={count <3}>-2</button>
    <button onClick={minus1Handler} disabled={count <2}>-1</button>
    <button onClick={resetHandler}>Reset</button>
    <button onClick={plus1Handler} disabled={count >=10}>+1</button>
    <button onClick={plus2Handler} disabled={count >=9}>+2</button>
    <button onClick={plus5Handler} disabled={count >=5}>+5</button>
    </div>
  )
}

export default CounterPage