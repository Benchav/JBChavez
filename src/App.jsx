import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Projects />
        <Contact/>
      </main>
      <Footer />
    </>
  );
}

export default App;