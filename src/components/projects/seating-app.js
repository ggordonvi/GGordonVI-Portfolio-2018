import React, { Component } from 'react';

// Images
import SeatingAppPic from '../../assets/images/seatingapp.png';
import SeatingAppPic1 from '../../assets/images/seatingapp1.png';
import SeatingAppPic2 from '../../assets/images/seatingapp4.png';
import SeatingAppPic3 from '../../assets/images/seatingapp2.png';

// CSS
import '../../assets/css/global.css';
import '../../assets/css/projects.css';

class SeatingApp extends Component {
  render() {
    return (
        <div className="row pt-0">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 offset-xl-1 mtb-auto">
              <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={SeatingAppPic} className="d-block pics" alt="..."></img>
                  </div>
                  <div className="carousel-item">
                    <img src={SeatingAppPic1} className="d-block pics" alt="..."></img>
                  </div>
                  <div className="carousel-item">
                    <img src={SeatingAppPic2} className="d-block pics" alt="..."></img>
                  </div>
                  <div className="carousel-item">
                    <img src={SeatingAppPic3} className="d-block pics" alt="..."></img>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4 mtb-auto project-text project-grid pt-4">
            <p className="h3 white">Seating App</p>
            <p className="h4 complement">MEAN Stack Web Application</p>
            <ul className="project-info">
              <li>Angular 7, Node.js, Express, Mongoose.</li>
              <li>Password hashing and session tokens.</li>
              <li>Fluid UI reactions to user selection.</li>
              <li>RESTful API and CRUD database operations.</li>
              <li>Jasmine and Karma unit testing.</li>
              <li>Selenium behavioral testing.</li>
              <li>Interactive floorplans built with Fabric.js framework.</li>
              <li>AWS Elastic Beanstalk and MongoDB hosting.</li>
            </ul>
            <p className="h5 complement">Check out this web application at <a className="web-link" href="http://seating-app.us-east-1.elasticbeanstalk.com/landing" target="_blank" rel="noopener noreferrer">www.seatingapp.com*</a>.</p>
            <p className="h5 complement">*App still in development.</p>
          </div>
        </div>
    );
  }
}

export default SeatingApp;