import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Videos extends Component {
    render() {
        return (
          <section id="main">
              <h1>Videos</h1>
              <hr />
              <p>Check out some of the silly videos I made starring the beloved Trixie the T-Rex. Enjoy!</p>
          		<h3>"Trixie the T-Rex: The Domestic Dinosaur"</h3>
          		<div className="center">
          			<iframe title="A Rainy Sunday" width="560" height="315" src="https://www.youtube.com/embed/zoJ7HSKqLZM" frameborder="0" allowfullscreen></iframe>
          		</div>
          		<div className="center">
          			<iframe title="Trixie the T-Rex Does Some Baking" width="560" height="315" src="https://www.youtube.com/embed/IEotC7Wk3QU" frameborder="0" allowfullscreen></iframe>
          		</div>
          		<div className="center">
          			<iframe title="Trixie Travels to Iceland" width="560" height="315" src="https://www.youtube.com/embed/19kXNBaV5AM" frameborder="0" allowfullscreen></iframe>
          		</div>
              <p className="center"><b><Link to="/Portfolio">Return to Portfolio</Link></b></p>
          </section>
        );
    }
}

export default Videos;
