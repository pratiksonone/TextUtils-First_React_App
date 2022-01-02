import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from 'react'
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {

  const [btntext, setBtntext] = useState('Theme');

  const [mode, setMode] = useState('light');
  const toggleStyle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "black";
      setBtntext(<i className="fad fa-moon fs-4"></i>);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      setBtntext(<i className='fad fa-sun fs-3'></i>);
    }
  }

  return (
    <>

      <Router>

        <Navbar mode={mode} onClick={toggleStyle} title={btntext} />

        <Routes>
          <Route exact path="/" element={<TextArea mode={mode} />}></Route>
          <Route path="/about" element={<About mode={mode} />}></Route>
        </Routes>
        <Footer mode={mode} />
      </Router>
    </>
  );
}
export default App;
