import React, { Component } from 'react';

// CSS
import '../../assets/css/global.css';
import '../../assets/css/socialmedia.css';

class SocialMedia extends Component {
  render() {
    return (
        <div className="col-sm-12 col-md-4 text-center mtb-auto">
            <a href="https://www.linkedin.com/in/ggordon-vi" target="_blank" rel="noopener noreferrer">
                <div className="social-box shadow-md">
                    <div className="logo-box">
                        <i className="fab fa-linkedin-in social-logo"></i>
                    </div>
                </div>
            </a>
            <a href="https://www.facebook.com/eddiegordon6th" target="_blank" rel="noopener noreferrer">
                <div className="social-box shadow-md">
                    <div className="logo-box">
                        <i className="fab fa-facebook-f social-logo"></i>
                    </div>
                </div>
            </a>
            <a href="https://twitter.com/GeorgeGordonVI" target="_blank" rel="noopener noreferrer">
                <div className="social-box shadow-md">
                    <div className="logo-box">
                        <i className="fab fab fa-twitter social-logo"></i>
                    </div>
                </div>
            </a>
            <a href="https://github.com/sixtheddie" target="_blank" rel="noopener noreferrer">
                <div className="social-box shadow-md">
                    <div className="logo-box">
                        <i className="fab fa-github social-logo"></i>
                    </div>
                </div>
            </a>
        </div>
    );
  }
}

export default SocialMedia;