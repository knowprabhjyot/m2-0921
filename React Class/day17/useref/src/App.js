import logo from './logo.svg';
import './App.css';
import { useRef, useEffect } from 'react'; 
import TextField from './Textfield';

function App() {

  // We have a hook called as UseRef, which allows to access a particular dom element and perform any event

  // We have a function called forwardRef, which allows us to access ref in deep nested elements

  const firstName = useRef(null); // Linked it with the input box
  

  useEffect(() => {
    console.log(firstName.current);
    firstName.current.focus();
  }, [])

  // Lets say you have a usecase, as soon as the page reloads you want the input box to be focused

  return (
    <div className="App">
      <form style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        {/* <input value="Prabh" ref={firstName} type="text" placeholder="Enter Name" /> */}
     {/* You may also use any library for it like Material React for textfield */}
        <TextField  ref={firstName} /> 
      </form>
    </div>
  );
}

export default App;
