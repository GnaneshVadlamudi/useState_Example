import React from "react";
import { useState } from "react";
import "./styles.css";

const App = () =>{

  /*here we have handled cases like number,string
  object and using function to initialize state*/

  const [count,setCount] = useState(100);
  const [age, setAge] = useState(25);
  const [state, setState] = useState({ fullName:'gnanesh', fullAge: 19,})
  const [token] = useState(() => {
    let token = window.localStorage.getItem("my-token");
    return token || "default"
  })
  
  /*
  setState will make (object merge) and useState will make (object replace)  
  */
  
  const handleCounter = () => {
    setCount(count + 1);
  }

  const handleAge = () => {
    setAge(age + 1)
  }

  const handleObject = val =>{
    setState({
      ...state,
      [val]: state[val] + 1
    });
  }
  const { fullName, fullAge } = state;
  
  return (
    <div>
      <h1>Hello React</h1>
      <h2>counter state value is {count}</h2>
      <h2>age state value is {age}</h2>
      <p>Myself {fullName} and age is {fullAge}</p>
      <p>token value is {token}</p>
      <button onClick={handleCounter}>+Counter</button>
      <button onClick={handleAge}>+Age</button>
      <button onClick={handleObject.bind(null, 'fullAge')}>Object</button>
    </div>
  );
}

export default App;
