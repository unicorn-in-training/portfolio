import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Photography extends Component {
    render() {
        return (
          <section id="main">
        		<h1>Digital Photography</h1>
        		<hr />
        		<p>I enjoy taking photos and have been lucky enough to combine two of my passions, photography and gymnastics, by taking photos for the University of Washington gymnastics team! Check out my photos that they have featured in articles on their website as well as some of my other photo galleries on Flickr and my <a href="http://www.istockphoto.com/portfolio/susieb" target="_blank" rel="noopener noreferrer" >Getty Images/iStock profile</a>.</p>
        		<h3>NCAA Gymnastics Photography for the University of Washington:</h3>
        		<ul>
        			<li class="camera"><a href="http://gohuskies.com/news/2018/1/16/gymnastics-get-to-know-evanni-roberson.aspx?path=wgym" target="_blank" rel="noopener noreferrer" >January 16, 2018 - "Get To Know: Evanni Roberson"</a></li>
        			<li class="camera"><a href="http://gohuskies.com/news/2017/12/27/gymnastics-after-big-2017-gymdawgs-set-sights-higher-for-2018.aspx?path=wgym" target="_blank" rel="noopener noreferrer" >January 11, 2018 - "After Big 2017, GymDawgs Set Sights Higher For 2018"</a></li>
        			<li class="camera"><a href="http://gohuskies.com/news/2017/3/17/gymnastics-gymdawgs-head-to-stanford-for-pac-12-championships.aspx?path=wgym" target="_blank" rel="noopener noreferrer" >March 17, 2017 - "GymDawgs Head To Stanford For Pac-12 Championships"</a></li>
        			<li class="camera"><a href="http://www.gohuskies.com/news/2017/3/13/gymnastics-huskies-to-compete-in-session-two-of-pac-12-championships.aspx" target="_blank" rel="noopener noreferrer" >March 13, 2017 - "Huskies To Compete In Session Two of Pac-12 Championships"</a></li>
        			<li class="camera"><a href="http://www.gohuskies.com/news/2017/3/12/gymnastics-gymdawgs-top-spu-in-regular-season-finale.aspx" target="_blank" rel="noopener noreferrer" >March 12, 2017 - "GymDawgs Top SPU In Regular Season Finale"</a></li>
        			<li class="camera"><a href="http://www.gohuskies.com/news/2017/2/20/gymnastics-huskies-continue.aspx?path=wgym" target="_blank" rel="noopener noreferrer" >Feb 20, 2017 - "Huskies Roll Past No. 25 Arizona With Season-High 197.175"</a></li>
        			<li class="camera"><a href="http://www.gohuskies.com/news/2017/1/22/gymnastics-burleson-crowned-all-around-champ-duranczyk-wins-beam-at-cal.aspx" target="_blank" rel="noopener noreferrer" >Jan 22, 2017 - "Burleson Crowned All-Around Champ, Duranczyk Wins Bars At Cal"</a></li>
        			<li class="camera"><a href="http://www.gohuskies.com/news/2017/1/19/gymnastics-gymdawgs-hit-the-road-to-face-cal-sjsu-in-tri-meet.aspx" target="_blank" rel="noopener noreferrer" >Jan 19, 2017 - "GymDawgs Hit the Road Saturday To Face Cal, SJSU In Tri-Meet"</a></li>
        			<li class="camera"><a href="http://www.gohuskies.com/news/2017/1/18/washington-gymnastics-to-host-kids-clinic.aspx" target="_blank" rel="noopener noreferrer" >Jan 18, 2017 - "Washington Gymnastics To Host Kid's Clinic"</a></li>
        			<li class="camera"><a href="http://www.gohuskies.com/news/2017/1/12/gymnastics-gymdawgs-open-up-season-with-quad-meet-at-ohio-state.aspx?path=wgym" target="_blank" rel="noopener noreferrer" >Jan 12, 2017 - "GymDawgs Open Up 2017 Season with Ohio State Quad Meet"</a></li>
        		</ul>
        		<h3>Misc Photography</h3>
        		<p>View my <a href="http://www.istockphoto.com/portfolio/susieb" target="_blank" rel="noopener noreferrer" >Getty Images/iStock profile</a>, <a href="http://www.flickr.com/susieboyland" target="_blank" rel="noopener noreferrer" >Flickr photostream</a> or visit the following Flickr portfolio albums:</p>
        		<div id="flickr">
        			<a href="https://www.flickr.com/gp/susieboyland/9JW30P" target="_blank" rel="noopener noreferrer" ><div id="photo_nature"><h2>Nature</h2></div></a>
        			<a href="https://flic.kr/s/aHskHxp9GJ" target="_blank" rel="noopener noreferrer" ><div id="photo_city"><h2>Cities</h2></div></a>
        			<a href="https://www.flickr.com/photos/90207556@N05/collections/72157666162832782/" target="_blank" rel="noopener noreferrer" ><div id="photo_gym"><h2>Gymnastics</h2></div></a>
        			<a href="https://flic.kr/s/aHskDKAizU" target="_blank" rel="noopener noreferrer" ><div id="photo_aerial"><h2>Aerial Shots</h2></div></a>
        		</div>
        		<p class="center"><b><Link to="/Portfolio">Return to Portfolio</Link></b></p>
        	</section>
        );
    }
}

export default Photography;
