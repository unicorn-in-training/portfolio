import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container-fluid">
                <section id="main">
			<h2>About</h2>
      <hr />
			<p><em>So who am I?</em><br />Well, this is a publicly available site on the internet so I'm not about to start listing my deepest darkest secrets and personal details, but here are some <b>Fun Facts:</b></p>
			<ul>
				<li><b>Dream job:</b> Already achieved phase 1 of "Operation Unicorn" by becoming a web developer for <a href="http://terrastaffinggroup.com" target="_blank" rel="noopener noreferrer" >TERRA Staffing Group</a>, so my next step as a <span class="unicorn">unicorn-in-training</span> is to continue improving my web design and development skills :)</li>
				<li><b>Favorite colors:</b> <span class="red">red</span> and <span class="turquoise">turquoise</span></li>
				<li><b>A few of my favorite things:</b> ballet, gymnastics, Formula 1 racing, rain, chocolate, pizza, whales, GIFs (and of course my family and friends!)</li>
				<li>And since you could find this by Googling me, I had a <a href="http://www.boeing.com/boeing100/stories/2015/december/landing-one-of-the-best-jobs-in-the-world-12-15.page" target="_blank" rel="noopener noreferrer">story published on the Boeing Centennial website in 2016</a> about my experience on the 757 ecoDemonstrator program:</li>
			</ul>
			<a href="http://www.boeing.com/boeing100/stories/2015/december/landing-one-of-the-best-jobs-in-the-world-12-15.page" target="_blank" rel="noopener noreferrer"><img src={"images/boeing_story.jpg"} alt="Landing One of the Best Jobs in the World" class="blueborder" /></a>
		</section>
            </div>
        );
    }
}

export default About;
