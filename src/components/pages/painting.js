import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Painting extends Component {
    render() {
        return (
          <section id="main">
              <h1>Painting</h1>
              <hr />
              <img src="../images/paintings/Swans.jpg" className="imgborder" alt="Swans" /><br />
              <img src="../images/paintings/Whale.jpg" className="imgborder" alt="Whale" /><br />
              <img src="../images/paintings/Squirrel.jpg" className="imgborder" alt="Squirrel" /><br />
              <p className="center"><b><Link to="/Portfolio">Return to Portfolio</Link></b></p>
          </section>
        );
    }
}

export default Painting;
