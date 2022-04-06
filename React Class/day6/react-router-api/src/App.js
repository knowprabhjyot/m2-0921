import './App.css';
import { Component } from 'react';
import Card from './card';
import {  Routes ,Route} from 'react-router-dom';
import Home from './home';
import User from './user';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={ <User />} />
      </Routes>
    )
  }
}

export default App;
