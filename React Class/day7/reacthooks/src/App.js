import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  // state = {
  //   count: 0
  // }

  // This takes care of thee component's life cycle
  // useEffect(() => {
  //   console.log('I am called');
  // }) // This works like component did mount


  

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  
  // useEffect(() => {
  //   console.log("Name was changed");
  // }, [name])


  // useEffect(() => {
  //   console.log("Count was updated");
  // }, [count])

    useEffect(() => {
    console.log(data, "value");
  }, [data])



  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2').then((response) => {
      return response.json();
    })
    .then((finalResponse) => {
      console.log(finalResponse);
      setData(finalResponse);
    })
  } , [])

  // Arrays destructuring

  // let [a, b ] = [1,2,3];


  // // this.setState({
  //   count : this.state.count + 1
  // })

  const increment = () => {
    setCount(count  + 1);
  }

  const decrement = () => {
    setCount(count  - 1);
  }

  return (
    <div className="App">
      {/* <div>{data.total}</div> */}
      <button onClick={increment}>+</button>
      <span>{ count }</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
