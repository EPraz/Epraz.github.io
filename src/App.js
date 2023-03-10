// import logo from './logo.svg';
import React from 'react';

import { About, Footer, Header, Skills, Work, Testimonial } from './container';
import { Navbar } from './components'

import './App.scss';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default App;
