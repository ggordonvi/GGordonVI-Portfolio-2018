import React, { Component } from 'react';

// CSS
import '../../assets/css/header.css';
import '../../assets/css/global.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-xl navbar-light">
        <a className="navbar-brand complement shadow-md" href="/">GGVI</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;