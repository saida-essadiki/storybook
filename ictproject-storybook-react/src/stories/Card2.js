import * as React from 'react';
import img2 from './assets/img2.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard2() {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={img2}
        title="Saint Seiya"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Saint Seiya overview UWU...
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Saint Seiya also known as Saint Seiya: Knights of the Zodiac or simply Knights of the Zodiac is a Japanese manga series written and illustrated by Masami ...
        </Typography>
      </CardContent>

      
      <CardActions>
        <Button size="large">Share</Button>
        <Button size="large">Read More</Button>
      </CardActions>
      
    </Card>
  );
}