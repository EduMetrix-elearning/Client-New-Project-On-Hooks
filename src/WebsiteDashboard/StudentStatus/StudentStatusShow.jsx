import React from 'react'
import "./StudentStatusShow.scss";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { DashBoardNavbar } from '../Navbar';
import { DashBoardHeader } from '../Header';
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import {
    Box,
    Tab,} from "@mui/material";
import { useState } from "react";

export const StudentStatusShow = () => {
    const [value, setValues] = useState("1")
    const handleChange = (e, val) => {
      setValues(val)
    }
    return (
        <>
        {/* <DashBoardHeader/> */}
        
        <div className="student-agent-full-details-show">
            <div className='agent-full-details'>
                <div className='agent-picture'>
                    <div className="upper-box">
                        <div className="image-box">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU" alt="" height="150px" width="150px" />
                        </div>
                    </div>
                    <div className="lower-box">
                        <h3>Abhishek Singh</h3>
                        <p>Abhishek@gmail.com</p>
                        <p>Phone : 909090455</p>
                    </div>
                </div>
            </div>

            <div className='all-student-details'>
                <Card sx={{ maxWidth: 245 }} className="one-student-card">
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="100"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Abhishek
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Abhishek@gmail.com
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 245 }} className="one-student-card">
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="100"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Abhishek
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Abhishek@gmail.com
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 245 }} className="one-student-card">
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="100"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Abhishek
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Abhishek@gmail.com
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 245 }} className="one-student-card">
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="100"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Abhishek
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Abhishek@gmail.com
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 245 }} className="one-student-card">
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="100"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Abhishek
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Abhishek@gmail.com
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
        </>
    )
}
