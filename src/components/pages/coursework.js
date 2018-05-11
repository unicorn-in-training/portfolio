import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Coursework extends Component {
    render() {
        return (
          <section id="main">
        		<h1>UC Davis Web Development Certificate Coursework</h1>
        		<hr />
        		<h3><a href="http://susieboyland.com/FinalProject" target="_blank" rel="noopener noreferrer" >PHP/MySQL Class Final Project</a></h3>
        		<p>The PHP class final project was to create a small website that would connect to a sample database for employees of a fictional Classic Cars company.<br />
        		The following pages were required:
        		<div class="classic_cars">
        		<ol>
        			<li>Public homepage with user login</li>
        			<li>Public account creation page</li>
        			<li>Private welcome page</li>
        			<li>Private Product Inventory report</li>
        			<li>Private Customer entry page</li>
        			<li>Private Bar chart report</li>
        			<li>Public - RSS feed of vehicle types</li>
        			<li>Private logout page</li>
        		</ol>
        		</div>
        		<a href="http://susieboyland.com/FinalProject" target="_blank" rel="noopener noreferrer" ><img src="/images/classic-cars-r-us.jpg" width="400" className="imgborder" alt="Classic Cars R Us Screenshot" /></a>
        		</p>
        		<h3><a href="http://susieboyland.com/JavaScript" target="_blank" rel="noopener noreferrer" >JavaScript Class Final Project</a></h3>
        		<p>The final project was to build a combination stopwatch and countdown timer. The application would allow the user to start either a stopwatch or a countdown timer but only one timer should be able to run at a time. A debug mode was also required.</p>
        		<a href="http://susieboyland.com/JavaScript" target="_blank" rel="noopener noreferrer" ><img src="/images/stopwatch-timer.jpg" width="400" className="imgborder" alt="Stopwatch Timer Screenshot" /></a>
        		<p>Code is available in its <a href="https://github.com/unicorn-in-training/stopwatch-timer" target="_blank" rel="noopener noreferrer" >GitHub repository</a>.</p>
                <p class="center"><b><Link to="/Portfolio">Return to Portfolio</Link></b></p>
            </section>
        );
    }
}

export default Coursework;
