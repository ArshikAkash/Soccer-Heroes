import React from 'react';
import flag from '../Images/flag .png';
import founded from '../Images/found.png';
import sport from '../Images/football.png';
import gender from '../Images/male-gender.png';
import facebook from '../Images/Facebook.png';
import twitter from '../Images/Twitter.png';
import youtube from '../Images/YouTube.png';
import './TeamDetails.css';
import { Button } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../../App';

const TeamDetails = () => {
    const [teamDetails] = useContext(UserContext);
    const {
        strTeamBanner,
        strAlternate,
        strTeamFanart3,
        strTeamFanart4,
        intFormedYear,
        strStadium,
        strSport,
        strDescriptionEN,
        strYoutube,
        strTwitter,
        strFacebook,
        strGender,
    } = teamDetails;

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
                <div className='detail-parts'>
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
                <div className='detail-parts'>
                    <img style={{ width: '80%' }} src={imgSrc} alt='' />
                </div>
            </div>
            <div className='fullDetails'>
                <h2>About Team</h2>
                <p>{strDescriptionEN}</p>
                <h3 style={{ borderBottom: '1px dotted white' }}>
                    Connect with this team. Click on the icons
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
