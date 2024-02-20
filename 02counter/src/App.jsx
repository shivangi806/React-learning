import { useState } from 'react';
import './App.css'

function App() {

  // let counter = 5;
  // old value and new value to be set to all places
  let [counter,setCounter] = useState(0);

  const addValue = function(){
    counter++;
    // console.log("Value added",counter);
    if(counter>20) counter=20;
    setCounter(counter);
  }

  const minusVal = function(){
    counter--;
    // console.log("Value added",counter);
    if(counter<0) counter=0;
    setCounter(counter);
  }
  return (
    <>
      <h1>sona and react</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}
      // we do not need to return any value from function
      > Add value</button>
      <br />
      <br />
      <button
      onClick={minusVal}
      >Remove value</button>
    </>
  )
}

export default App
