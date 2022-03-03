import React from 'react'
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useTheme} from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const displayItem={id:1,name:"Tyedye",price:7,img:'https://res.cloudinary.com/cae67/image/upload/v1628193056/fakebook_shop/tiedyeshirt_nufhjn.jpg'}
  export default function CartItem({item=displayItem}) {
    const theme = useTheme();
      
    const item1={id:1,name:"Tyedye",price:7,img:'https://res.cloudinary.com/cae67/image/upload/v1628193056/fakebook_shop/tiedyeshirt_nufhjn.jpg'}
    const item2={id:2,name:"Eryn's Shoes",price:10.99,img:'https://res.cloudinary.com/cae67/image/upload/v1628184304/fakebook_shop/pinkshoes_ratrx5.jpg'}
    const item3={id:3,name:"Marvel",price:9.9,img:'https://res.cloudinary.com/cae67/image/upload/v1628193027/fakebook_shop/marvel_shirt_t7epwz.jpg'}
    
    const cart=[item1, item1, item2, item3, item3]

    const [qty,setQty]=useState(cart.filter((cartItem)=>cartItem.id === item.id).length)

    //useeffect

  return (
    <Grid container spacing={2} sx={{my:2, pr:2, border: '1px solid', borderRadius:1, borderColor:"neutral"}}>
        <Grid item md={4} xs={6}>
            <Item sx={{height:'50%'}}>
                <Avatar alt={item.name} sx={{height:'50%', width:"50%"}} variant="rounded" src={item.img}/>
            </Item>
        </Grid>
        <Grid item md={3} xs={6}>
            <Item sx={{height:'50%'}}>
                {item.name}
            </Item>
        </Grid>
        <Grid item md={2} xs={6}>
            <Item sx={{height:'50%'}}>
                ChangeQuanity
            </Item>
        </Grid>
        <Grid item md={3} xs={6}>
            <Item sx={{height:'50%'}}>
                ${(item.price*qty).toFixed(2)}
            </Item>
        </Grid>
        
    </Grid>
  )
}
