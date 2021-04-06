import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';
import Box from '@material-ui/core/Box';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTeams(data.teams));
    }, []);
    return (
        <div className='home'>
            <h1>🔥SOCCER HEROES🔥</h1>
            <div style={{ width: '50%' }}>
                <Box
                    display='inline-flex'
                    flexWrap='wrap'
                    paddingTop={17}
                    css={{ maxWidth: 300 }}
                >
                    <Box p={2} bgcolor='#4298fb00'>
                        <div className='teams'>
                            {teams.map((team) => (
                                <Team key={team.idTeam} team={team}></Team>
                            ))}
                        </div>
                    </Box>
                </Box>
            </div>
        </div>
    );
};

export default Home;
