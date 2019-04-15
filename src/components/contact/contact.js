import React, { Component } from 'react';

import SocialMedia from './social-media';

// CSS
import '../../assets/css/global.css';
import '../../assets/css/contact.css';

class Contact extends Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="row pb-0">
            <div className="col-sm-12 text-center">
              <p className="primary section-title">Lets get in touch!</p>
              <div className="section-box"></div>
            </div>
          </div>
          <div className="row pt-0 expander">
            <div className="col-sm-12 col-md-8 mtb-auto">
              <div className="email-panel primary-bg shadow-md">
                <p className="h2 white g-font pic-text">I'm about to graduate and I'm looking for a career!</p>
                <p className="h5 white g-font spacer pic-text">Please contact me at <a className="email-me complement" href="mailto:ggordonvi@gmail.com">ggordonvi@gmail.com</a>.</p>
              </div>
            </div>
            <SocialMedia />
          </div>
        </div>
    );
  }
}

export default Contact;