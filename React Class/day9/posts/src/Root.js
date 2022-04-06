import { Route, Routes } from "react-router-dom";
import App from "./App";
import SelectPost from "./components/SelectPost";

const Root = () => {
    return (
       <Routes>
           <Route path="/" element={<App />} />
           <Route path="/:id" element={<SelectPost />} />
       </Routes>
    )
}

export default Root;