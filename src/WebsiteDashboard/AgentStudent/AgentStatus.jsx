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
    <div className='all-agent-Card-page'>
      <Link to="/student-card">
    <Card sx={{ maxWidth: 345}} className="one-agent-card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
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
    <Card sx={{ maxWidth: 285 }} className="one-agent-card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
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
    <Card sx={{ maxWidth: 285 }} className="one-agent-card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
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

    <Card sx={{ maxWidth: 285 }} className="one-agent-card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
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
    <Card sx={{ maxWidth: 285 }} className="one-agent-card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
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
    <Card sx={{ maxWidth: 285 }} className="one-agent-card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
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
  )
}

