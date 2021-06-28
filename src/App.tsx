import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

import "./styles/root.css";

function App() {
  return (
    <div className="app">
      <ProfileScreen />
      {/* <WelcomeScreen /> */}
      {/* <Router>
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
          <Route path="/welcome">
            <WelcomeScreen />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
