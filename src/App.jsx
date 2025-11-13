import React, { Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const Projects = React.lazy(() => import('./pages/Projects'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));


function LoadingFallback() {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#0a192f', color: '#64ffda' }}>
      Cargando...
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;