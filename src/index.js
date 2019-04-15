import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// Components
import Header from './components/header/header';
import Banner from './components/header/banner';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Skills from './components/about/skills';
  
  class App extends Component {
    render() {
      return (
        <div className="App primary2-bg">
          <Header />
          <Banner />
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  