import "./App.css";
import { db } from "./firebase-config";
import {
  getDocs,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const photosCollectionRef = collection(db, "photos");
  const [selectedImage, setSelectedImage] = useState("");
  const [images, setImages] = useState([]);
  const [wasImageUploaded, setImageUploaded] = useState(false);

  useEffect(() => {
    fetchImages();
  }, [wasImageUploaded]);

  const uploadImage = async (event) => {
    const formData = new FormData();

    // Step 1
    formData.append("file", selectedImage);

    // Step 2
    formData.append("upload_preset", "uznpdwbj");

    try {
      const data = await axios.post(
        `https://api.cloudinary.com/v1_1/dlenryo6g/upload`,
        formData
      );
      const info = await addDoc(photosCollectionRef, {
        image: data.data.url,
      });

      // Extract the document image returned by the firebase
      // Just push the incoming object to the images state

      console.log(info, "INFO");
      setImageUploaded(!wasImageUploaded);
      alert("Succesfully uploaded image");
    } catch (error) {
      console.log(error, "error");
    }
  };

  const fetchImages = async () => {
    const imageList = await getDocs(photosCollectionRef);
    const data = imageList.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setImages(data);
  };

  const postServerImage = async (base64ImageUrl) => {
    try {
      const data = await axios.post("http://localhost:2000/api/v1/upload", {
        image: base64ImageUrl,
      });
      alert(data.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImageUsingServer = () => {
    const reader = new FileReader();

    // Allows us to use image data as url
    reader.readAsDataURL(selectedImage);

    reader.onloadend = () => {
      postServerImage(reader.result);
    };
  };

  return (
    <div className="App">
      <div className="upload-container">
        <input
          type="file"
          className="inputButton"
          onChange={(event) => setSelectedImage(event.target.files[0])}
        />
        <button onClick={uploadImage}>Upload Image</button>
        <button onClick={uploadImageUsingServer}>
          Upload Image Using Server
        </button>
      </div>

      <section className="image-container">
        {images.map((data, index) => {
          return (
            <div key={index} className="image">
              <img src={data.image} alt={data.id} />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
