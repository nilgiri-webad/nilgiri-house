import './App.css';
import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Switch>
                  <Route
                      path="/home"
                      component={() => {
                          window.location.href = 'https://nilgiri-house.netlify.app';
                          return null;
                      }} />
                  <Redirect to="/home"  />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
