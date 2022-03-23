import logo from "./logo.svg";
import "./App.css";
import List from "./list";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import SingleStudent from "./singleStudent";

// If you remember in javascript
// for loops
// in React we will make use of map function

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:rollNumber" element={<SingleStudent />} />
      </Routes>
    </div>
  );
}

export default App;
