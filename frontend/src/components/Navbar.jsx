import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-dark container">
                <h4><Link className="link" to="/"> Home </Link></h4>
                <h4><Link className="link" to="/notes"> Notes </Link></h4>
                <h4><Link className="link" to="/create"> Create Note </Link></h4>
            </nav>)
    }
}