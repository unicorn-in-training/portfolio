import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Music extends Component {
    render() {
        return (
          <section id="main">
              <h1>Music</h1>
              <hr />
              <p>Listen to my piece "A Year Ago Still Feels Like Yesterday" which was composed in 2011.</p>
          		<iframe title="A Year Ago Still Feels Like Yesterday" width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/284567335&amp;color=961206&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
              <p class="center"><b><Link to="/Portfolio">Return to Portfolio</Link></b></p>
          </section>
        );
    }
}

export default Music;
