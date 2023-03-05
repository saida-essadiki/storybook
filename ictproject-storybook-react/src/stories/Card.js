import * as React from 'react';
import img1 from './assets/img1.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={img1}
        title="UFO USnavy"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ARE WE ALONE?
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The United States government has logged more than 350 new reports of UFOs—or, as officials call them, “unidentified aerial phenomena” (UAP)—since March 2021,... 
        </Typography>
      </CardContent>

      
      <CardActions>
        <Button size="large">Share</Button>
        <Button size="large">Read More</Button>
      </CardActions>
      
    </Card>
  );
}