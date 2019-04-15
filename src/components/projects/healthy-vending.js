import React, { Component } from 'react';

// Images
import HealthyVendingPic from '../../assets/images/healthyvending.png';

// CSS
import '../../assets/css/global.css';
import '../../assets/css/projects.css';

class HealthyVending extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 offset-xl-1 mtb-auto project-pic-box">
          <img src={HealthyVendingPic} className="project-pic-hv" alt="..."></img>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4 mtb-auto project-text project-grid pt-4">
          <p className="h3 white">Healthy Tid Bits Vending</p>
          <p className="h4 complement">Mission Statement / Client Brochure</p>
          <p className="project-info pi-hv pull-l">Company needed rebranding on brochures for potential new clients.  Graphics were highly important to Tid Bits.  The need to emphasize machine requirements, specifications, and an ability to tailor items to clients' needs -- while still conveying a message of a healthy alternative -- were key.</p>
        </div>
      </div>
    );
  }
}

export default HealthyVending;