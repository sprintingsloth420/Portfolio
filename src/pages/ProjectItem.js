import * as React from 'react';
import "./HomeNav.css";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';


export default function ProjectItem({item}) {
  return (
    <div className='projectItem'> <a href={item.url}>
      <div><img src={item.image}></img></div>
      <div>
        <p className='projectItem_title'>{item.name}</p>
        <div className='tag_wrapper'>
          <div className='tag'>{item.tag}</div>
          <div className='tag'>{item.tag2}</div>
        </div>
        <div className='projectItem_des'>{item.description}</div>
      </div>

      {/* <Card>

    <CardContent> */}
      {/* <Button variant="outlined" >{item.tag}</Button>
      <Button variant="outlined" >{item.tag2}</Button>
      <p></p> */}
      {/* <Typography variant="body1" color="text.secondary">
        {item.description}
      </Typography>
      <p></p> */}
      {/* <a target="_blank" href={item.url}>View Project Details</a> */}
    {/* </CardContent>
    <CardActions> */}
      {/* <Button size="small">Learn More</Button> */}
      
    {/* </CardActions>
  </Card> */}
    </a>
    </div>
     

    
  );
}