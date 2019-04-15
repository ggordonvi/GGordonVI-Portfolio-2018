import React, { Component } from 'react';

import ProfilePic from '../../assets/images/profile-main.JPG';
import FamilyPic from '../../assets/images/family22.png';

// CSS
import '../../assets/css/about.css';
import '../../assets/css/global.css';

class About extends Component {
  render() {
    return (
        <div className="container-fluid primary-bg">
          <div className="row">
            <div className="col-sm-12 text-center">
              <p className="white section-title">Get to know me.</p>
              <div className="section-box"></div>
            </div>
            <div className="col-sm-12 offset-lg-1 col-lg-5 text-box mtb-auto">
              <p className="sub-heading complement g-font">Where am I from?  What's my story?</p>
              <p className="text-info g-font2 pb-2">I was born and raised in Southern California.  I graduated from the University of South Carolina with a bachelor’s degree in Computer Information Systems and Business Administration.  I have been extremely fortunate to travel and live on both sides of the country.  I have a love for sports, especially if you mention beach volleyball.</p>
            </div>
            <div className="col-sm-12 col-lg-6 text-center pic-position">
              <img src={ProfilePic} className="profile-pic shadow-md" alt="..."></img>
            </div>
            <div className="spacer-pad"></div>
            <div className="col-sm-12 col-lg-6 text-center pic-position">
              <img src={FamilyPic} className="profile-pic-2 shadow-md" alt="..."></img>
            </div>
            <div className="col-sm-12 col-lg-5 text-box mtb-auto">
               <p className="sub-heading complement g-font pt-2">Why web development?</p>
              <p className="text-info g-font2">I am immensely passionate about every aspect of web development.  I have always had the “let’s see if I can do it” mentality.  I started publishing content online when I was 14 years old.  From portfolio websites built in simple HTML and CSS, to websites built with server-side logic like PHP, then moving on to more structured frameworks like Angular and React and using more flexible server-side frameworks like Node.js, the entire process from concept, to design, to functionality and usability, and eventually deployment, absolutely intrigues me.  I am a front-end web developer with full stack knowledge. </p>
            </div>
          </div>
        </div>
    );
  }
}

export default About;