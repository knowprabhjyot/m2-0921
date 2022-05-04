import React, { useState } from 'react';
import './App.css';
import Login from './login';

function App() {

  const [email, setEmail] = useState<string>("knowprabh@gmail.com");
  const [password, setPassword] = useState<string>("xyz");
  return (
    <div className="App">
      <Login email={email} password={password} />
    </div>
  );
}

export default App;
