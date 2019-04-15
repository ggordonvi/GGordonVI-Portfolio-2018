import React, { Component } from 'react';

// CSS
import '../../assets/css/about.css';
import '../../assets/css/global.css';

class Skills extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 text-center">
            <p className="primary section-title">Skills I have.</p>
            <div className="section-box mb-4"></div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5 offset-xl-1 col-xl-4">
            <div className="skills-card primary-bg">
              <p className="h3 white skills-title text-center">Core Skills.</p>
              <div className="section-box mb-0"></div>
              <div className="skill-row">
                <i className="devicon-angularjs-plain colored skill-icons"></i>
                <div className="skill-bar">
                  <div className="progress skill-bg">
                    <div className="progress-bar progress-bar-striped complement-bg" role="progressbar" style={{width: 80 + '%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">80%</div>
                  </div> 
                </div>         
              </div>
              <div className="skill-row">
                <i className="devicon-html5-plain colored skill-icons"></i>
                <div className="skill-bar">
                  <div className="progress skill-bg">
                    <div className="progress-bar progress-bar-striped complement-bg" role="progressbar" style={{width: 95 + '%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">95%</div>
                  </div> 
                </div>
              </div>
              <div className="skill-row">
                <i className="devicon-css3-plain colored skill-icons"></i>
                <div className="skill-bar">
                  <div className="progress skill-bg">
                    <div className="progress-bar progress-bar-striped complement-bg" role="progressbar" style={{width: 85 + '%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">85%</div>
                  </div> 
                </div>
              </div>
              <div className="skill-row">
                <i className="devicon-bootstrap-plain colored skill-icons"></i>
                <div className="skill-bar">
                  <div className="progress skill-bg">
                    <div className="progress-bar progress-bar-striped complement-bg" role="progressbar" style={{width: 90 + '%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">90%</div>
                  </div> 
                </div>
              </div>
              <div className="skill-row">
                <i className="devicon-nodejs-plain-wordmark colored skill-icons"></i>
                <div className="skill-bar">
                  <div className="progress skill-bg">
                    <div className="progress-bar progress-bar-striped complement-bg" role="progressbar" style={{width: 70 + '%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">70%</div>
                  </div> 
                </div>
              </div>
            </div>
            <p className="sub-heading primary section-title text-center">Check out my <a className="complement link" href="#projects">projects</a> to see my work! </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5">
            <div className="skills-card primary-bg shadow-md">
              <p className="h3 white skills-title text-center">Other skills.</p>
              <div className="section-box mb-0"></div>
              <div className="skill-row-2">
                <i className="devicon-amazonwebservices-plain-wordmark colored skill-icons2"></i>
                <i className="devicon-sass-original colored skill-icons2"></i>
                <i className="devicon-typescript-plain colored skill-icons2"></i>

                <i className="devicon-wordpress-plain colored skill-icons2"></i>
                <i className="devicon-express-original colored skill-icons2"></i>
                <i className="devicon-cplusplus-plain colored skill-icons2"></i>

                <i className="devicon-javascript-plain colored skill-icons2"></i>
                <i className="devicon-mongodb-plain-wordmark colored skill-icons2"></i>
                <i className="devicon-react-original colored skill-icons2"></i>
              </div>
              <p className="h3 white skills-title text-center">Tools.</p>
              <div className="section-box mb-0"></div>
              <div className="skill-row-2">
                <i className="devicon-photoshop-line colored skill-icons2"></i>
                <i className="devicon-visualstudio-plain colored skill-icons2"></i>
                <i className="devicon-git-plain colored skill-icons2"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;