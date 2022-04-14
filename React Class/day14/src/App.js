import { Routes, Route } from "react-router-dom";
import Animal from "./Animal";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import './App.css';

const App = () => {
    return (
        <div>
           <Routes>
                <Route path="/componentA" element={<ComponentA />} />
                <Route path="/componentB" element={<ComponentB />} />
                <Route path="/animal/:type" element={<Animal />} />
           </Routes>
        </div>
    )
}

export default App;