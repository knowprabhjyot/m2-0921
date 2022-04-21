import { useDispatch, useSelector } from "react-redux";
import { decrementNumber, incrementNumber } from "./actions/action";
import "./App.css";

function App() {

  // useSelector --> Excessing the global state, similar to useContext
  // useDispatch

  // Use Dispatch is a hook used to transmit what kind of action is fired
  const dispatch = useDispatch();
  const state = useSelector((value) => value.changeTheNumber);

  return (
    <div className="App">
      <button onClick={() => dispatch(incrementNumber())}>+</button>
      <span>{state}</span>
      <button onClick={() => dispatch(decrementNumber())}>-</button>
    </div>
  );
}

export default App;
