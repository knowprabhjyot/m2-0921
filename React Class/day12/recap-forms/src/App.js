import "./App.css";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { useState } from "react";

function App() {

  // Controlled Forms 

  // This is selected Time
  const [selectedNumber, setSelectedNumber ] = useState();
  const [backgroundColor, setBackgroundColor] = useState("red");
  const [timer, setTimer] = useState();
  // const [randomColor, setRandomColor] = useState();

  const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


  const timeout = () => {
    setTimeout(() => {
      setBackgroundColor('green');
    }, selectedNumber)
    // change it after the given seconds provided
  }

  const interval = () => {
    // Capture the given time provided
    // Find a random color from the array
    let time = setInterval(() => {
      // Find Random Number
      const randomIndex = Math.floor( Math.random() * colorArray.length);

      // Find Random color from the given array based on the given random index
      const randomColor = colorArray[randomIndex];
      setBackgroundColor(randomColor);
    }, selectedNumber)

    setTimer(time);
    // set the background color provided
  }


  const stopInterval = () => {
    clearInterval(timer);
  }

  return (
    <div className="App" style={{ backgroundColor: backgroundColor}}>
      <Grid container spacing={2} className="grid-container">
        <Grid item xs={6} md={8} className="grid-item">
          {/* Its just stylised input box */}
          <TextField
            required
            id="outlined-required"
            label="Enter Time"
            type="number"
            value={selectedNumber}
            onChange={(event) => setSelectedNumber(event.target.value)}
          />
          <Button variant="contained" color="warning" onClick={timeout}>Timeout</Button>
          <Button variant="contained" color="primary" onClick={interval}>Interval</Button>
          <Button variant="contained" color="secondary" onClick={stopInterval}>Stop Interval</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
