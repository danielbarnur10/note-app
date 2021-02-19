import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';

export default class App extends Component {

    render() {
        return (
            <Router>
                <Navbar />

                <Route path="/" exact >
                    <Home />
                </Route>

                <Route path="/notes">
                    <Notes />
                </Route>

                <Route path="/create">
                    <CreateNote />
                </Route>

            </Router>

        )
    }
}

