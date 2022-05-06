import logo from './logo.svg';
import './App.css';
import { useCallback, useMemo, useState } from "react";
import Child from './Child';

function App() {

  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);
  const mainArray = [1,2,3,4,5,6,7,8,9,10];
  const [array, setArray] = useState(mainArray);
 
  const changeNumber = (number)  => {
    setNumber(number);
  }

  const memoizedCallBack = useCallback((number) => changeNumber(number), []);

  const findMax = () => {
    console.log("I am doing computation******");
    return Math.max(...array);
  }

  const memoizedValue = useMemo(() => findMax(), [array]);

  const updateArray = () => {
    setArray([5,10,20,100,-10]);
  }


  return (
    <div className="App">
      <Child changeNumber={memoizedCallBack} number={number} />
      
      <button onClick={() => setCounter(counter + 1)}>Increment {counter} </button>

      <p>Max Number - {memoizedValue} </p>

      <button onClick={updateArray}>Update Array</button>
    </div>
  );
}

export default App;
