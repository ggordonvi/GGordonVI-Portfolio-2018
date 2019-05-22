import React, { Component } from 'react';

// Images
import JillRealtorPic from '../../assets/images/jillrealtor2.png';
import JillRealtorPic1 from '../../assets/images/jillrealtor3.png';
import JillRealtorPic2 from '../../assets/images/jillrealtor.png';

// CSS
import '../../assets/css/global.css';
import '../../assets/css/projects.css';

class JillRealtor extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 offset-xl-1 mtb-auto">
          <div id="carouselExampleFade1" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={JillRealtorPic} className="d-block pics" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src={JillRealtorPic1} className="d-block pics" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src={JillRealtorPic2} className="d-block pics" alt="..."></img>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade1" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade1" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4 mtb-auto project-text project-grid pt-4">
          <p className="h3 white">Jill Sells the Carolinas</p>
          <p className="h4 complement">Angular &#38; Node.js Web Application</p>
          <ul className="project-info">
            <li>Angular 7, Node.js, Bootstrap.</li>
            <li>Local property listings pulled from listings API.</li>
            <li>Contact forms to retrieve potential client information made with Nodemailer and AWS-SDK.</li>
            <li>Contact form validation includes Google reCaptcha.</li>
            <li>SEO optimization and Google Analytics.</li>
            <li>AWS ElasticBeanstalk and AWS SES hosting.</li>
          </ul>
          <div className="project-navigate">
            <a className="project-button" href="http://jillsellsthecarolinas.com" target="_blank" rel="noopener noreferrer">View</a>
            {/*<a className="project-button" href="https://github.com/sixtheddie/Seating-App" target="_blank" rel="noopener noreferrer">Source</a>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default JillRealtor;