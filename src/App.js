import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import TeamDetails from './Components/TeamDetails/TeamDetails';

function App() {
    return (
        <div className='App'>
            <Router>
                <div>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/team/:id'>
                            <TeamDetails></TeamDetails>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
