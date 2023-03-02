import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard3() {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="Homo_Nean.jpg"
        title="Saint Seiya"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The recent Neanderthal discovery.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A 90,000-year-old bone of a girl discovered in Denisova cave, also in Siberia, contained DNA that...
        </Typography>
      </CardContent>

      
      <CardActions>
        <Button size="large">Share</Button>
        <Button size="large">Read More</Button>
      </CardActions>
      
    </Card>
  );
}