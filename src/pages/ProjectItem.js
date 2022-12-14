import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function ProjectItem({item}) {
  return (
      <Card sx={{ width: 600 }}>
      <CardMedia
        component="img"
        height="400"
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Button variant="outlined" >{item.tag}</Button>
        <Button variant="outlined" >{item.tag2}</Button>
        <p></p>
        <Typography variant="body1" color="text.secondary">
          {item.description}
        </Typography>
        <p></p>
        <a target="_blank" href={item.url}>View Project Details</a>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
        
      </CardActions>
    </Card>

    
  );
}