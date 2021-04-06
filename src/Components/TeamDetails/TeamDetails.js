import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';

const TeamDetails = () => {
    const { id } = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTeam(data.teams[0]));
    }, [id]);
    const { strTeamBanner, strAlternate, strTeamFanart3 } = team;

    return (
        <div className='team'>
            <img src={strTeamBanner} alt='' />
            <div className='team-details'>
                <div style={{ width: '50%' }}>
                    <h1>{strAlternate}</h1>
                    <p>{strAlternate}</p>
                    <p>{strAlternate}</p>
                    <p>{strAlternate}</p>
                </div>
                <div style={{ width: '50%' }}>
                    <img style={{ width: '80%' }} src={strTeamFanart3} alt='' />
                </div>
            </div>
            <div className='fullDetails'>
                <h2>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Soluta, cum praesentium. Culpa mollitia veritatis accusamus
                    sequi exercitationem incidunt vel ut, quos nam quas
                    cupiditate omnis a dolor quidem consectetur amet. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                    minus doloribus dolor harum similique neque. Nobis
                    cupiditate quam, accusamus consequatur quos amet, alias
                    suscipit provident architecto ea, dolorum similique vel?
                </h2>
            </div>
        </div>
    );
};

export default TeamDetails;
