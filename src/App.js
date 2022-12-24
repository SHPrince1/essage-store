import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Searchbar from "./components/searchbar";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Electronics from './pages/electronics';
import Footer from "./components/footer";

function App() {
  return (
    <div className="NavBox">
      <Router>
        <Navbar />
        <Searchbar />

        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/electronics" exact element={<Electronics />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
