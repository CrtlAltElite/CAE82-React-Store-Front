import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function CartCard({item, qty, setQty}) {
  return (
    <Card sx={{height:"100%" }}>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {item.name}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {item.desc.slice(0,20)}
        </Typography>
        <Typography variant="body2">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">+</Button><Button size="small">-</Button>
      </CardActions>
    </Card>
  );
}
