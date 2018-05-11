import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Artwork extends Component {
    render() {
        return (
          <div id="artwork">
          	<section id="main">
          		<h1>Digital Artwork</h1>
          		<hr />
          		<img src="/images/artwork-jump.png" className="imgborder" alt="Ballerina jump" /><br />
          		<img src="/images/artwork-beam.gif" className="imgborder" alt="Gymnast balance beam" /><br />
          		<img src="/images/artwork-loso.gif" className="imgborder" alt="Layout Stepout" /><br />
          		<img src="/images/artwork-Swan-Lake.gif" className="imgborder" alt="Swan Lake" /><br />
          		<img src="/images/artwork-leap.gif" className="imgborder" alt="Gymnast leap" /><br />
          		<img src="/images/artwork-ring-leap.gif" className="imgborder" alt="Gymnast leap" /><br />
          		<p className="center"><b><Link to="/Portfolio">Return to Portfolio</Link></b></p>
          	</section>
          </div>
        );
    }
}

export default Artwork;
