import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Portfolio extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div id="portfolio">
                <div className="row">
                  <div className="col-sm-6 col-md-3">
                  <Link to="/Portfolio/Websites">
                    <div className="portfolio_box" id="Box1">
                      <h2>Websites</h2>
                      <p>Websites built for personal use and for clients</p>
                    </div>
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-3">
                  <Link to="/Portfolio/Photography">
                    <div className="portfolio_box" id="Box2">
                      <h2>Digital Photography</h2>
                      <p>Photography work including subjects such as gymnastics, nature, landscapes, and cities</p>
                    </div>
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-3">
                  <Link to="/Portfolio/Coursework">
                    <div className="portfolio_box" id="Box3">
                      <h2>Web Dev Coursework</h2>
                      <p>Final projects from the UC Davis Web Development Certificate Program</p>
                    </div>
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-3">
                  <Link to="/Portfolio/Writing">
                    <div className="portfolio_box" id="Box4">
                      <h2>Blog Writing</h2>
                      <p>Writing samples from various blogs</p>
                    </div>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-3">
                  <Link to="/Portfolio/Music">
                    <div className="portfolio_box" id="Box5">
                      <h2>Music Composition</h2>
                      <p>Audio recordings of self-composed music pieces</p>
                    </div>
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-3">
                  <Link to="/Portfolio/Videos">
                    <div className="portfolio_box" id="Box6">
                      <h2>Videos</h2>
                      <p>Short videos starring "Trixie the T-Rex"</p>
                    </div>
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-3">
                  <Link to="/Portfolio/Artwork">
                    <div className="portfolio_box" id="Box7">
                      <h2>Digital Artwork</h2>
                      <p>Artwork created using Photoshop and other digital image-editing tools</p>
                    </div>
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-3">
                  <Link to="/Portfolio/Painting">
                    <div className="portfolio_box" id="Box8">
                      <h2>Painting</h2>
                      <p>Examples of watercolor and acrylic paintings</p>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Portfolio;
