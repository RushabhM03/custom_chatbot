//import React from 'react'
import Home from './Home';
import Demo from './Demo';
import Steps from './Steps';
import About from './About';
import PageNotFound from './PageNotFound';
import {Routes, Route} from 'react-router-dom';

const MainC = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/steps" element={<Steps/>} />
        <Route path="/demo" element={<Demo/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default MainC