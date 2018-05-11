import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="container-fluid">
            <section id="main">
              <h2>Contact Info</h2>
              <hr />
              <p><b>Email:</b> Susannah.Boyland@gmail.com</p>
              <p><b>LinkedIn Profile: </b><a href="https://www.linkedin.com/in/sboyland" target="_blank" rel="noopener noreferrer" >Linkedin.com/in/sboyland</a></p>
              <p><b>Twitter: </b><a href="https://twitter.com/Gymtertainment" target="_blank" rel="noopener noreferrer" >@Gymtertainment</a></p>
              <p><b>GitHub Profile: </b><a href="https://github.com/unicorn-in-training" target="_blank" rel="noopener noreferrer" >@unicorn-in-training</a></p>
              <p>Resume available upon request via email.</p>
              <img src="images/susie.jpg" class="imgborder" alt="Susie" />
            </section>
            </div>
        );
    }
}

export default Contact;
