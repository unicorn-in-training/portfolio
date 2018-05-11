import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Homepage extends Component {
    render() {
        return (
          <div id="home_links">
            <div class="col-sm-4">
              <div className="icon">
                  <Link to="/About">
                  <img src={"/images/About.png"} alt="Link to About page" />
                    <p>ABOUT</p>
                  </Link>
                </div>
              </div>
              <div class="col-sm-4">
                <div className="icon">
                  <Link to="/Portfolio">
                  <img src={"/images/Portfolio.png"} alt="Link to Portfolio page" />
                    <p>PORTFOLIO</p>
                  </Link>
                </div>
              </div>
              <div class="col-sm-4">
                <div className="icon">
                  <Link to="/Contact">
                  <img src={"/images/Contact.png"} alt="Link to Contact page" />
                    <p>CONTACT</p>
                  </Link>
                </div>
              </div>
            </div>
        );
    }
}

export default Homepage;
