import "./App.css";
import React from "react";
import MyNavbar from "./MyNavbar.js";
import MainPage from "./MainPage.js";
import Cards from "./Cards.js";

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <MainPage/>
      <Cards/>
    </div>
  );
}

export default App;
