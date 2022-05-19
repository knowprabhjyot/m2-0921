import "./App.css";
import { useState } from "react"; 
import axios from 'axios';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setcontact] = useState("");


  const submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/v1/users', {
      name,
      email,
      password,
      contact
    }).then((response) => {
      alert(response.data.message);
    }).catch((error) => {
      alert(error.message);
    })
  }


  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Type Name" />
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Type Email" />
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Type Password" />
        <label>Email</label>
        <input value={contact} onChange={(e) => setcontact(e.target.value)} type="number" placeholder="Type Contact" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;



// CORS (Cross Origin Resource Sharing)

// Browser is secure by default
// Front End - localhost:3000
//  Backend - localhost:5000

// Browser says why they are different ?
// So it believes that it can be a threat/vulnerability


// npm install cors



