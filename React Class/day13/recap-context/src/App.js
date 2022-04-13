import "./App.css";
import Home from "./components/Home";
import ThemeContext, { theme } from "./context/themeContext";
import Switch from "@mui/material/Switch";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";

function App() {

  const [appTheme, setTheme] = useState(theme.dark);


  const switchTheme = () => {
    appTheme === theme.dark ? setTheme(theme.light) : setTheme(theme.dark);
  }

  return (
    <ThemeContext.Provider value={appTheme}>
      <AppBar position="static" color="warning">
        <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
          <InputLabel>Switch Theme</InputLabel>
          <Switch defaultChecked onChange={switchTheme} />
        </Toolbar>
      </AppBar>
      <div className="App">
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
