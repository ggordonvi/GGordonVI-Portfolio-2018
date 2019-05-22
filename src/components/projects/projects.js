import React, { Component } from 'react';

// Projects
import SeatingApp from './seating-app';
import JillRealtor from './jill-realtor';
import HealthyVending from './healthy-vending';

// CSS
import '../../assets/css/global.css';
import '../../assets/css/projects.css';

class Projects extends Component {
  render() {
    return (
        <div className="container-fluid projects primary-bg">
          <div className="row pb-0">
            <div className="col-sm-12 text-center">
              <p className="white section-title">Current and past work.</p>
              <div className="section-box"></div>
            </div>
          </div>
            <SeatingApp />
            <JillRealtor />
            <HealthyVending />
          <div className="row">
            <div className="col-sm-12 text-center dis-flex">
              <div className="port-info-box mlr-auto">
                <p className="sub-text white mb-0 g-font">This portfolio was built using React JS and Bootstrap.</p>
                <div className="project-navigate">
                  <a className="project-button mlr-auto" href="https://github.com/sixtheddie/ggordonvi.com" target="_blank" rel="noopener noreferrer">Source</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Projects;