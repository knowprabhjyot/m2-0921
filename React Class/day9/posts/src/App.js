import { useEffect, useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import RandomPost from "./components/RandomPost";

// HOOKS
// 1. Use State, it stores the state of the component. I.E the data that a component will hold
// 2. Use Effect, it is a kind of function that gets called on the page load
// And if we provide a dependency then use effect is called again

function App() {
  const [posts, setPosts] = useState([]); // Giving default value as empty array so  that UI doesn't break
  const [randomPostItem, setRandomPost] = useState(null); // This state stores the random post, when we click on random post button
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(function () {
    // Remember fetch returns a promise
    fetch(url)
      .then(function (response) {
        // The fetch api returns a promise, so we have to convert it of type JSON
        return response.json();
      })
      .then(function (data) {
        // So we are updating our use State to store the data that's coming from the API
        setPosts(data);
      });
  }, []); // We are not giving any dependency, so the useEffect will be fired only once!


  // this function selects a random post everytime
  function selectRandomPost() {
    let randomIndex = Math.floor(Math.random() * 100 ); // generates the random index
    let randomPost = posts[randomIndex]; // it generates random post based on random index
    setRandomPost(randomPost);
  }

  return (
    <div className="App">
      {/* We passed posts data from the api to the post list component  */}

      <section>
        <div className="section-title">
          <span>Random Post</span>
          <button className="select-random-button" onClick={selectRandomPost}>Select Random</button>
        </div>

        {
          randomPostItem ? <div style={{ margin: "20px"}}><RandomPost post={randomPostItem} /> </div>: <>There is no post selected</>
        }

      </section>
      <section>
        <div className="section-title">
          <span>Posts List</span>
        </div>
        <PostList posts={posts} />
      </section>
    </div>
  );
}

export default App;
