import './App.css';
import { db } from "./firebase-config";
import { getDocs, collection, addDoc, doc, deleteDoc, updateDoc  } from "firebase/firestore";
import React, { useState } from "react";
import axios from "axios";

function App() {



  const photosCollectionRef = collection(db, "photos");
  const [selectedImage, setSelectedImage] = useState("");


  const uploadImage = async (event) => {
    const formData = new FormData();

    // Step 1
    formData.append("file", selectedImage);

    // Step 2 
    formData.append("upload_preset", "uznpdwbj");

    try {
      const data = await axios.post(`https://api.cloudinary.com/v1_1/dlenryo6g/upload`, formData);
      await addDoc(photosCollectionRef, {
        image : data.data.url
      });
      alert("Succesfully uploaded image");
    } catch (error) {
      console.log(error, "error");
    }

  }

  return (
    <div className="App">
      <input type="file" onChange={(event) =>  setSelectedImage(event.target.files[0])} />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
}

export default App;
