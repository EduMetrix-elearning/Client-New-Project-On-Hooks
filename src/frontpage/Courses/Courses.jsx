import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@mui/material/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./Courses.scss"
import { Box, Grid } from '@material-ui/core';
import homepagehero from "../../asset/images/Homepagevdo.mp4"
import { Typewriter } from "react-simple-typewriter"
import { Modal, TextField } from '@material-ui/core';
import ClearIcon from '@mui/icons-material/Clear';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import fullstack from "../../asset/images/Courses/fullstack.jpg"
import frontend from "../../asset/images/Courses/frontend.png"
import backend from "../../asset/images/Courses/Backend.png"



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const data = [
    {
        "image": require("../../asset/images/Courses/fullstack.jpg"),
        "title": "Full Stack Developer",
        "Details": " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        "tags": ["Javascript", "React", "Nodejs", "Mongodb"]
    },
    {
        "image": require("../../asset/images/Courses/frontend.png"),
        "title": "Frontend Developer",
        "Details": " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
        "image": require("../../asset/images/Courses/Backend.png"),
        "title": "Backend Developer",
        "Details": " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    }
]


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


export const Courses = () => {
     


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [courses, setCourses] = useState(data)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [expanded, setExpanded] = React.useState(false);
    console.log(courses)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [state] = useState({
        title: "Edumetrix Courses"
    })
    return (
        <div className='courses-typewritter-cards-main-div'>

            {/* Below Navbar  */}
            <div className='below-navbar'>
                <div className="edumetrix-header">
                    <h1 className='primary-header' ><Typewriter
                        words={['EduMetrix ', 'Full Stack Enginner']}
                        loop={10}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    /></h1>
                    <p className='secondary-header'>Coding for anyone not just for Engineers !!!</p>
                    <p className='ternary-header'>Build professional projects like the top 1% developers.Master the latest full stack and backend tech with real work-ex.Crack developer jobs at the best tech companies.</p>
                    <div className='services-btn'>
                    <button className='apply-btn' onClick={handleOpen}>Apply for Now</button>
                    <button className='apply-btn'><a href="tel:+918310715970" style={{textDecoration:"none",color:"white"}}> Call Now +918310715970 </a></button>
                    </div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Box className="inner-model">
                                <Typography id="modal-modal-title" variant="h6" component="h4">
                                    EduMetrix Courses
                                </Typography>
                                <Button onClick={handleClose}>
                                    <ClearIcon />
                                </Button>
                            </Box>
                            <hr />
                            <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="Name *" variant="standard" />
                            <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="10  digits Mobile No *" variant="standard" />
                            <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="Email *" variant="standard" />
                            <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="Message *" variant="standard" />
                            <Button fullWidth sx={{ marginTop: "20px" }} variant="contained" className='student-form-filling-btn'>I'm Interested</Button>

                        </Box>
                    </Modal>
                </div>

                <div className='main-background-image'>
                    {/* <img src={homepagehero} width="400px" height="400px" alt="" /> */}
                    <video src={homepagehero} className="auto-video-play" autoPlay loop muted />
                </div>
            </div>


            {/* All Coursess */}
            <div className='Card-div'>
                <div className='all-courses-heading'>
                    <h1 className="modernwork-heading">Modern Work <br />
                        Experience-Based <br />
                        Learning Approach</h1>

                    <p className="edumetrix-headline">At EduMetrix, you learn and grow exactly how you would on a real job. You will start from the <br />
                        fundamentals, receive support from our mentors and community, and build your way to the top <br />
                        - through professional work-like Full-stack and Backend web development projects.</p>
                </div>

                <Box className='all-cards'>
                    {/* {courses?.map((e) => { */}

                        {/* return ( */}
                            {/* <div> */}
                              {/* <Box className='one-card-div'> */}
                                {/* <Box></Box> */}
                                <div className='single-card'>
                                <Link style={{textDecoration:"none"}} to="/fullstack"><Card className="course-card">

                                    <CardMedia
                                        className={classes.media}
                                        image={fullstack}
                                        title="Paella dish"

                                    />
                                    <CardContent>
                                        <Typography className='card-title' >
                                            FullStack
                                        </Typography>
                                    </CardContent>
                                    <CardContent>
                                        <Typography className="card-details">Become a skilled Full-Stack developer with hands-on experience in MERN stack . Tech stack used in Fullstack := Nodejs, MongoDB , React , HTML5 , CSS3 , Javascript</Typography>
                                    </CardContent>
                                </Card></Link>
                                </div>


                                <div className='single-card'>
                                <Link style={{textDecoration:"none"}} to="/frontend"><Card className="course-card">

                                    <CardMedia
                                        className={classes.media}
                                        image={frontend}
                                        title="Paella dish"

                                    />
                                    <CardContent>
                                        <Typography className='card-title' >
                                            Frontend
                                        </Typography>
                                    </CardContent>
                                    <CardContent>
                                        <Typography className="card-details">Become a skilled frontend developer with hands-on experience in MERN stack And MEAN stack. Tech stack used in Frontend := React , HTML5 , CSS3 , Javascript</Typography>
                                    </CardContent>
                                </Card></Link> </div>


                                <div className='single-card'>
                                <Link style={{textDecoration:"none"}} to="/backend"><Card className="course-card">
                                    <CardMedia
                                        className={classes.media}
                                        image={backend}
                                        title="Paella dish"

                                    />
                                    <CardContent>
                                        <Typography className='card-title' >
                                            Backend
                                        </Typography>
                                    </CardContent>
                                    <CardContent>
                                        <Typography className="card-details">Become a skilled backend developer with hands-on experience in building a scalable web backend .Tech stack used in Backend := Nodejs , Express js, MongoDB .</Typography>
                                    </CardContent>
                                </Card></Link>
                                </div>
                            {/* </Box >  */}

                            

                          {/* </div>  */}
                        {/* ) */}
                    {/* })} */}

                </Box>
            </div>

        </div>
    )
}



