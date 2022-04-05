import logo from './logo.svg';
import './App.css';
import RandomJoke from './RandomJoke';
import JokeList from './JokeList';
import { useEffect, useState } from 'react';


function App() {

  // This is a state for saving jokes list
  const [jokes, setJokes] = useState([]);
  const [randomJoke, setRandomJoke] = useState();
  
  // NOTE: If you don't pass a dependency array [], inside of useffect then it gets called unlimited times which is bad for performance and will block your UI
  useEffect(() => {
    fetch('https://type.fit/api/quotes').then((response) => {
      return response.json()
    }).then((data) => {
      // Slice method

      // I am using this slice method just to split the 2000 array list ---> 30 array list so that UI doesn't hang
      const manipulatedArray = data.slice(0, 30);
      setJokes(manipulatedArray);
    }).catch((error) => {
      setJokes([]);
      console.log(error);
    })
  }, [])


  function selectRandomJoke() {
    // Math.random gives you a random number between 0 and 1, 
    // but what we want is random numnber between 0 and 30
      const randomIndex = Math.floor(Math.random() * 30)
      const randomJoke = jokes[randomIndex];
      setRandomJoke(randomJoke);
  }

  return (
    <div className="App">
      <div className='random-joke-button'>
        <button onClick={selectRandomJoke}>Select Random Joke</button>
      </div>
      {/* Passing random joke as a prop again */}


      {/* Ternary operator to conditionally set the random JOke, which means if select random joke button is clicked, then only show the random joke */}
      { 
          randomJoke ? <RandomJoke randomJoke={randomJoke} /> : null
      }


     {/* SENDING PROPS TO JOKE LIST COMPONENT */}
     <JokeList data={jokes} />
    </div>
  );
}

export default App;
