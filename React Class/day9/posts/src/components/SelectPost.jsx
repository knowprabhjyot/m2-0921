import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostItem from "./Posttem";

const SelectPost = () => {

    // This is another hook that we learned for capturing user routes 
    const params = useParams(); 
    const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`;
    const [selectedPost, setSelectedPost] = useState();

    useEffect(function () {
        // Remember fetch returns a promise
        fetch(url)
          .then(function (response) {
            // The fetch api returns a promise, so we have to convert it of type JSON
            return response.json();
          })
          .then(function (data) {
            // So we are updating our use State to store the data that's coming from the API
            setSelectedPost(data);
          });
      }, []); // We are not giving any dependency, so the useEffect will be fired only once!

    return (
        <div style={{ margin: "20px"}}>
            <div className="section-title">
                SELECTED POST
            </div>
         {
             selectedPost ?  <PostItem post={selectedPost} /> : <></>
         }
        </div>
    )
}

export default SelectPost;