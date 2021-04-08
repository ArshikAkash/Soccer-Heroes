import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import flag from '../Images/flag .png';
import founded from '../Images/found.png';
import sport from '../Images/football.png';
import gender from '../Images/male-gender.png';
import facebook from '../Images/Facebook.png';
import twitter from '../Images/Twitter.png';
import youtube from '../Images/YouTube.png';
import './TeamDetails.css';
import { Button } from '@material-ui/core';

const TeamDetails = () => {
    const { id } = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTeam(data.teams[0]));
    }, [id]);
    const {
        strTeamBanner,
        strAlternate,
        strTeamFanart3,
        strTeamFanart4,
        intFormedYear,
        strStadium,
        strSport,
        strGender,
        strDescriptionEN,
        strYoutube,
        strTwitter,
        strFacebook,
    } = team;
    const genderName = { strGender };
    let imgSrc;

    if (genderName.strGender === 'Male') {
        imgSrc = { strTeamFanart3 };
        imgSrc = imgSrc.strTeamFanart3;
    } else {
        imgSrc = { strTeamFanart4 };
        imgSrc = imgSrc.strTeamFanart4;
    }

    return (
        <div className='team'>
            <img src={strTeamBanner} alt='' />
            <div className='team-details'>
                <div style={{ width: '50%' }}>
                    <h1>{strAlternate}</h1>
                    <div className='team-box'>
                        <img src={founded} alt='' />
                        <p>Founded in : {intFormedYear}</p>
                    </div>
                    <div className='team-box'>
                        <img src={flag} alt='' />
                        <p>Root : {strStadium}</p>
                    </div>
                    <div className='team-box'>
                        <img src={sport} alt='' />
                        <p>Sport Type : {strSport}</p>
                    </div>
                    <div className='team-box'>
                        <img src={gender} alt='' />
                        <p>Gender : {strGender}</p>
                    </div>
                </div>
                <div style={{ width: '50%' }}>
                    <img style={{ width: '80%' }} src={imgSrc} alt='' />
                </div>
            </div>
            <div className='fullDetails'>
                <h2>About Team</h2>
                <p>{strDescriptionEN}</p>
                <h3 style={{ borderBottom: '1px dotted white' }}>
                    Connect Us On
                </h3>
                <div className='social-links'>
                    <Button href={`https://${strFacebook}`} target='_blank'>
                        <img src={facebook} alt='' />
                    </Button>

                    <Button href={`https://${strTwitter}`} target='_blank'>
                        <img src={twitter} alt='' />
                    </Button>

                    <Button href={`https://${strYoutube}`} target='_blank'>
                        <img src={youtube} alt='' />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;
