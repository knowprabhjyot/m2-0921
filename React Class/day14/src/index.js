import * as ReactDom from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById("root");

// This is basically taking the react root component and appending it to the index.html root id
ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);

// Brainstorm Assignment

// Read about Webpack and Babel
