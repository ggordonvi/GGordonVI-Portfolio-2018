import React, { Component } from 'react';

// CSS
import '../../assets/css/global.css';
import '../../assets/css/banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid banner primary2-bg">
        <div className="container">
          <h1 className="display-5 complement g-font2 pb-3">Hello! I'm a web developer.</h1>
          <p className="lead primary g-font2">My name is George Edward Gordon VI but to make it easier just call me Eddie.</p>
        </div>
      </div>
    );
  }
}

export default Banner;