import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Writing extends Component {
    render() {
        return (
          <section id="main">
              <h1>Writing</h1>
              <hr />
              <p>I have dabbled in blogging here and there, most notably as a contributor for popular blog <em><a href="https://aballeteducation.com/" target="_blank" rel="noopener noreferrer" >A Ballet Education</a></em>. I also wrote a few articles for my Gymtertainment blog before I started to focus my efforts on gymnastics artwork and photography instead.</p>
          		<h3>A Ballet Education</h3>
          		<ul>
          			<li><a href="https://aballeteducation.com/2016/04/19/goodbye-ballet/" target="_blank" rel="noopener noreferrer" >Opinion Piece: Goodbye Ballet</a></li>
          			<li><a href="https://aballeteducation.com/2015/04/13/so-your-professional-dance-career-didnt-work-out-now-what/" target="_blank" rel="noopener noreferrer" >Opinion Piece: So Your Professional Dance Career Didn't Work Out - Now What?</a></li>
          			<li><a href="https://aballeteducation.com/2016/06/16/the-dynamic-duo-on-pnbs-american-stories/" target="_blank" rel="noopener noreferrer" >Jointly-written Ballet Review: The Dynamic Duo on PNB's American Stories</a></li>
          		</ul>
          		<a href="https://aballeteducation.com/2015/04/13/so-your-professional-dance-career-didnt-work-out-now-what/" target="_blank" rel="noopener noreferrer" >
              <img src="../images/4_blog.jpg" alt="A Ballet Education Blog" className="imgborder" /></a>
          		<h3>Gymtertainment</h3>
          		<ul>
          			<li><a href="http://gymtertainment.blogspot.com/2015/08/5-reasons-why-ncaa-event-finals-should.html" target="_blank" rel="noopener noreferrer" >5 Reasons Why NCAA Event Finals Should Stay</a></li>
          			<li><a href="http://gymtertainment.blogspot.com/2015/08/how-important-is-pre-olympic-year.html" target="_blank" rel="noopener noreferrer" >How Important is the Pre-Olympic Year?</a></li>
          			<li><a href="http://gymtertainment.blogspot.com/2015/09/the-world-championships-competing-for.html" target="_blank" rel="noopener noreferrer" >The "World" Championships - Competing for Another Country</a></li>
          			<li><a href="http://gymtertainment.blogspot.com/2015/08/5-current-gymnastics-trends-which-need.html" target="_blank" rel="noopener noreferrer" >5 Current Gymnastics Trends That Need To Go</a></li>
          		</ul>
          		<a href="http://gymtertainment.blogspot.com/2015/08/5-reasons-why-ncaa-event-finals-should.html" target="_blank" rel="noopener noreferrer" >
              <img src="../images/gym_blog.jpg" alt="Gymtertainment Blog" className="imgborder" /></a>
              <p className="center"><b><Link to="/Portfolio">Return to Portfolio</Link></b></p>
          </section>
        );
    }
}

export default Writing;
