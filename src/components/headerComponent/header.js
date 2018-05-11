import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
            <nav>
                <ul>
                    <li className="first">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="last">
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Link to="/" className="pageHeader"><h1>Susie Boyland</h1>
            <h2>Web Developer | Photographer | Artist</h2>
            </Link>
            </header>
        );
    }
}

export default Header;
