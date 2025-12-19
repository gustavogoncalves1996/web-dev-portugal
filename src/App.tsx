import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div id="home">
        <Header />
      </div>
      <Navigation />
      <Portfolio />
      <Skills />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;