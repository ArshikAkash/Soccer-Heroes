import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import './Team.css';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

const useStyles = makeStyles({
    root: {
        width: 270,
        maxWidth: 270,
        height: 440,
        maxHeight: 440,
        flexGrow: 1,
    },
    media: {
        marginLeft: 25,
        height: 220,
        width: 220,
    },
    button: {
        marginLeft: 68,
    },
});

const Team = (props) => {
    const classes = useStyles();
    const [teamDetails, setTeamDetails] = useContext(UserContext);

    const { strTeam, strStadiumLocation, strTeamBadge } = props.team;

    const history = useHistory();
    const showTeamDetails = () => {
        const url = `/team/${strTeam}`;
        history.push(url);
    };
    const setDetails = () => {
        setTeamDetails(props.team);
        console.log(teamDetails);
    };

    return (
        <div className='teamBox'>
            <Card className={classes.root}>
                <CardActionArea style={{ height: '375px' }}>
                    <CardMedia
                        component='h2'
                        className={classes.media}
                        image={strTeamBadge}
                        title='Contemplative Reptile'
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                            {strTeam}
                        </Typography>
                        <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
                        >
                            <b>Origin: {strStadiumLocation}</b>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        onMouseOver={() => setDetails()}
                        onClick={() => showTeamDetails()}
                        variant='contained'
                        color='primary'
                        className={classes.button}
                        endIcon={<Icon>send</Icon>}
                    >
                        Explore
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Team;
