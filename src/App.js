import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './Assets/css/default.min.css';

//components
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'
import About from './components/pages/about';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
import Websites from './components/pages/websites';
import Photography from './components/pages/photography';
import Coursework from './components/pages/coursework';
import Writing from './components/pages/writing';
import Music from './components/pages/music';
import Videos from './components/pages/videos';
import Artwork from './components/pages/artwork';
import Painting from './components/pages/painting';

class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
        <Header />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Portfolio' component={Portfolio} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/Portfolio/Websites' component={Websites} />
          <Route exact path='/Portfolio/Photography' component={Photography} />
          <Route exact path='/Portfolio/Coursework' component={Coursework} />
          <Route exact path='/Portfolio/Writing' component={Writing} />
          <Route exact path='/Portfolio/Music' component={Music} />
          <Route exact path='/Portfolio/Videos' component={Videos} />
          <Route exact path='/Portfolio/Artwork' component={Artwork} />
          <Route exact path='/Portfolio/Painting' component={Painting} />
        <Footer />
      </div>
        </Router>
    );
  }
}

export default App;
