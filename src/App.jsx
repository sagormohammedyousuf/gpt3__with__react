import React from 'react';
import {Footer, Blog, Header,Features , Possibility , WhatGPT3} from './container';
import {  Brand, Navbar , Cta } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;

