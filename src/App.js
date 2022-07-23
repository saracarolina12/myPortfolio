import React from 'react'
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
