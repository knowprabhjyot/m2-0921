import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import PhotoCard from './components/Card';
import PhotoContext from './context/PhotoContext';
import PhotoList from './components/PhotoList';

function App() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {

    // Fetch api is used for calling API's
    // fetch('https://jsonplaceholder.typicode.com/photos').then(function(response) {
    //   return response.json();
    // }).then(function(data) {
    //   setPhotos(data);
    // })
    // Axios is also used for calling API's (Axios is a wrapper over Fetch API)
    axios.get('https://jsonplaceholder.typicode.com/photos').then(function(response) {
     setPhotos(response.data.slice(0, 50));
    }).catch((error) => {
      console.log(error);
      setPhotos([]); // Just to avoid UI breakage
    })
  }, []);

  return (
    <PhotoContext.Provider value={photos}>
         <div className="App">
            <PhotoList />
        </div>
    </PhotoContext.Provider>
  );
}

export default App;
