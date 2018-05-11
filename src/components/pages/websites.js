import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';

class Websites extends Component {
    render() {
        return (
            <section id="main">
                <h1>Websites</h1>
                <hr/>
                <div class="row">
                    <div class="website_img col-sm-6" id="box_splitprecision">
                        <h3>SplitPrecision</h3>
                        <a href="http://splitprecision.com" target="_blank" rel="noopener noreferrer"><img
                            src="/images/splitprecision_snapshot.jpg" alt="SplitPrecision website"/></a>
                    </div>
                    <div class="website_img col-sm-6" id="box_cardinal">
                        <h3>Cardinal Cards</h3>
                        <a href="http://cardinal-cards.com" target="_blank" rel="noopener noreferrer"><img
                            src="/images/cardinal_snapshot.jpg" alt="Cardinal website"/></a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <p>SplitPrecision displays samples of my gymnastics photography and art work and contains links
                            to my <a href="http://tee.pub/lic/JRVl_FendN4" target="_blank" rel="noopener noreferrer">TeePublic
                                store</a>, <a
                                href="https://www.redbubble.com/people/gymtertainment/shop/recent?ref=sort_order_change_recent"
                                target="_blank" rel="noopener noreferrer">RedBubble store</a>, and <a
                                href="http://twitter.com/splitprecision" target="_blank" rel="noopener noreferrer">Twitter
                                feed</a>. Built using HTML/CSS, PHP, JavaScript/jQuery, and AJAX.</p>
                    </div>
                    <div class="col-sm-6">
                        <p>A very basic one-page site for my online greeting card business, Cardinal Cards. This page
                            links to my store at <a href="http://www.greetingcarduniverse.com/cardinal" target="_blank"
                                                    rel="noopener noreferrer">Greeting Card Universe</a>. Built using
                            HTML/CSS and JavaScript/jQuery.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="website_img col-sm-6" id="box_portfolio">
                        <h3>Digital Portfolio</h3>
                        <a href="http://susieboyland.com" target="_blank" rel="noopener noreferrer"><img
                            src="/images/susieboyland_snapshot.jpg" alt="Portfolio website"/></a>
                    </div>
                    <div class="website_img col-sm-6" id="box_wedding">
                        <h3>Wedding Website</h3>
                        <a href="http://susieandlogan.com" target="_blank" rel="noopener noreferrer"><img
                            src="/images/susieandlogan_snapshot.jpg" alt="Wedding website"/></a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <p>The site you are currently on! Newly re-built using React for the main portion of the site.
                            Other portions of the site (e.g. samples of previous coursework) are built in languages such
                            as PHP or whatever was required for that project.</p>
                    </div>
                    <div class="col-sm-6">
                        <p>Work-in-progress wedding website built using HTML/CSS, PHP, JavaScript/jQuery, and AJAX.</p>
                    </div>
                </div>
                <p class="center"><b><Link to="/Portfolio">Return to Portfolio</Link></b></p>
            </section>
        );
    }
}

export default Websites;
