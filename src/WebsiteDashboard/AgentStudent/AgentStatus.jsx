import React from 'react'
import "./AgentStatus.scss"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

export const AgentStatus = () => {
  return (
    <div className='Agent-Showing-details-div'>
      <div className='filtering-agent-div'>
        <input type="text" placeholder='Search Name...' className='filtering-name' />
        <div className='Filtering-email-status-location'>
          <input type="email" placeholder='Search email' />
          <input type="text" placeholder='Search location' />
          <input type="text" placeholder='Search status' />
        </div>
      </div>

      <div className='all-agent-Card-page'>
        <Link to="/student-card" style={{ textDecoration: "none" }}>
          <Card sx={{ maxWidth: 345 }} className="one-agent-card">
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Jamsheer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Jamsheer@gmail.com
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>


        </Link>
        <Card sx={{ maxWidth: 345 }} className="one-agent-card">
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              shafan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              shafan@gmail.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 285 }} className="one-agent-card">
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Junaid
            </Typography>
            <Typography variant="body2" color="text.secondary">
              junaid@gmail.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 285 }} className="one-agent-card">
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mrudul
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Mrudul@gmail.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 285 }} className="one-agent-card">
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Manish
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manish@gmail.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 285 }} className="one-agent-card">
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sachin
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sachin@gmail.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 285 }} className="one-agent-card">
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mubarak
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Mubarak@gmail.com
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

