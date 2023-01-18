import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import TeamDetails from './Components/TeamDetails/TeamDetails';
export const UserContext = createContext();

function App() {
    const [teamDetails, setTeamDetails] = useState([]);
    return (
        <div className='App'>
            <UserContext.Provider value={[teamDetails, setTeamDetails]}>
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
            </UserContext.Provider>
        </div>
    );
}

export default App;
