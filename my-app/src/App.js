import './App.css';
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import "./pages/pages.css";
import Navbar from "./components/Navbar"
import {BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { NameInput, UserList, ErrorAlert } from './components';

function App() {
  return (
      <div>
        <Router>
          <div>
            <Navbar/>
            <NameInput />
            <ErrorAlert />
            <UserList />
            <Routes>
              <Route exact path="/" element = {<Home/>}/>
              <Route path="/about" element={<About />}/>
            </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;
