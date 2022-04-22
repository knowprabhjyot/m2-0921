import { useDispatch, useSelector } from "react-redux";
// import { decrementNumber, incrementNumber } from "./actions/action";
import "./App.css";
import { decrement, increment } from "./reducer/counterSlice";

function App() {

  // useSelector --> Excessing the global state, similar to useContext
  // useDispatch

  // Use Dispatch is a hook used to transmit what kind of action is fired
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;

