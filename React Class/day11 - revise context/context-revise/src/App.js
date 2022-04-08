import logo from "./logo.svg";
import "./App.css";
import UserContext from "./context/UserContex";
import ClassComponent1 from "./components/ClassComponent1";
import { Component } from "react";

class App extends Component {

  state = {
    photos: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos').then((response) => {
      return response.json() // Bedefault it doesn't return json
    }).then((data) => {
      this.setState({
        photos: data.slice(0, 100)
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <UserContext.Provider value={this.state.photos}>
        <ClassComponent1 />
      </UserContext.Provider>
    );
  }
}

export default App;
