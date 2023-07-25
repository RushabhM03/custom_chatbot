//import { useState } from 'react'
import MainC from "./components/MainC";
import Navbar from "./components/Navbar";
import Tailbar from "./components/Tailbar";
import {BrowserRouter} from 'react-router-dom';


function App() {
  return(
    <div>    
      
      <BrowserRouter>
        <Navbar/>
        <MainC/>
        <Tailbar/>
      </BrowserRouter>
     
    </div>
  )
}

export default App
