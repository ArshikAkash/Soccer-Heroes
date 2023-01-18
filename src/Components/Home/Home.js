import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';
import Box from '@material-ui/core/Box';
import {
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@material-ui/core';

const Home = () => {
    const [teams, setTeams] = useState([]);
    const [league, setLeague] = useState('English Premier League');
    const [loading, setLoading] = useState(true);
    const handleChange = (event) => {
        setLeague(event.target.value);
    };
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${league}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setTeams(data.teams);
                setLoading(false);
            });
    }, [setTeams, league]);
    console.log(loading);
    return (
        <div className='home'>
            <h1>🔥LEAGUE HEROES🔥</h1>
            <div>
                <FormControl>
                    <InputLabel id='demo-simple-select-label'>
                        Select League
                    </InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={league}
                        label='Age'
                        onChange={handleChange}
                    >
                        <MenuItem value={'English Premier League'}>
                            English Premier League
                        </MenuItem>
                        <MenuItem value={'German Bundesliga'}>
                            German Bundesliga
                        </MenuItem>
                        <MenuItem value={'Italian Serie A'}>
                            Italian Serie A
                        </MenuItem>
                        <MenuItem value={'French Ligue 1'}>
                            French Ligue 1
                        </MenuItem>
                        <MenuItem value={'Spanish La Liga'}>
                            Spanish La Liga
                        </MenuItem>
                        <MenuItem value={'FIFA World Cup'}>
                            FIFA World Cup
                        </MenuItem>
                        <MenuItem value={'Spanish La Liga'}>
                            Spanish La Liga
                        </MenuItem>
                        <MenuItem value={'UEFA Champions League'}>
                            UEFA Champions League
                        </MenuItem>
                        <MenuItem value={'UEFA Europa League'}>
                            UEFA Europa League
                        </MenuItem>
                        <MenuItem value={'FA Cup'}>FA Cup</MenuItem>
                        <MenuItem value={'Copa del Rey'}>Copa del Rey</MenuItem>

                        <MenuItem value={'Copa America'}>Copa America</MenuItem>
                        <MenuItem value={'UEFA Super Cup'}>
                            UEFA Super Cup
                        </MenuItem>
                        <MenuItem value={'UEFA Nations League'}>
                            UEFA Nations League
                        </MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div>
                {loading ? (
                    <CircularProgress />
                ) : (
                    <div style={{ width: '50%' }}>
                        <Box
                            className='box'
                            display='inline-flex'
                            flexWrap='wrap'
                            sx={{ maxWidth: 300 }}
                        >
                            <Box className='card-sizing' bgcolor='#4298fb00'>
                                <div className='teams'>
                                    {teams.map((team) => (
                                        <Team
                                            key={team.idTeam}
                                            team={team}
                                        ></Team>
                                    ))}
                                </div>
                            </Box>
                        </Box>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
