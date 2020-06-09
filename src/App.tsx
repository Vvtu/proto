import React from 'react';

import { Link } from 'react-router-dom';


import logo from './logo.svg';

import Button from '@material-ui/core/Button';

import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                {/* <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p> */}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <br />


                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Button variant="contained" color="primary">
                    <Link to="/about">
                        Hello World
                    </Link>
                </Button>
            </header>
        </div>
    );
}

export default App;
