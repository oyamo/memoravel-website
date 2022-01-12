import React from 'react';
import logo from '../logo.svg';
import './App.css';
import {MNavbar} from "../presentation/components/Navbar/MNavbar";
import {Home} from "../presentation/pages/Home";
import {Footer} from "../presentation/components/Footer/Footer";

function App() {
  return (
    <>
        <MNavbar />
        <Home />
        <Footer />
    </>
  );
}

export default App;
