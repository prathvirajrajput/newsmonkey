import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = ()=> {
    return (
      <Router>
      <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" country="in" category="general"/>}></Route>
            <Route exact path="/general" element={<News key="general" country="in" category="general"/>}></Route>
            <Route exact path="/business" element={<News key="Business"country="in" category="Business"/>}></Route>
            <Route exact path="/entertainment" element={<News key="Entertainment" country="in" category="Entertainment"/>}></Route>
            <Route exact path="/health" element={<News key="health"country="in" category="health"/>}></Route>
            <Route exact path="/science" element={<News key="science"country="in" category="science"/>}></Route>
            <Route exact path="/sports" element={<News key="sports"country="in" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News key="technology"country="in" category="technology"/>}></Route>
          </Routes>
      </div>
      </Router>
    );
  }
export default App