import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About/>
        <Projects />
        <Contact/>
      </main>
      <Footer />
    </>
  );
}

export default App;