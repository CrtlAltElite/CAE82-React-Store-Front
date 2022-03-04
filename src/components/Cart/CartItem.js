import React, {useEffect, useState} from 'react'
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useTheme} from '@mui/material/styles';
import CartCard from './CartCard';
import ChangeCartItemQuantity from './ChangeCartItemQuantity';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary : theme.palette.primary,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
    display:'flex',
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

    useEffect(
        ()=>{
            setQty(cart.filter((cartItem)=>cartItem.id === item.id).length)
        },[cart, item]
    )
    

  return (
    <Grid container spacing={2} sx={{m:1, pr:2, border: '1px solid', borderRadius:1, alignItems:"stretch"}}>
        <Grid item md={4} sm={6} xs={12}>
            {console.log(theme)}
            <Item sx={{height:'100%'}}>
                <Avatar alt={item.name} sx={{height:'100%', width:"100%"}} variant="rounded" src={item.img}/>
            </Item>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
            <Item sx={{height:'100%'}}>
                <CartCard item={item}/>
            </Item>
        </Grid>
        <Grid item md={2} sm={6} xs={12}>
            <Item sx={{height:'100%', alignContent:'center'}}>
                <ChangeCartItemQuantity item={item} qty={qty}/>
            </Item>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
            <Item sx={{height:'100%'}}>
                <div>
                <strong>Item Subtotal</strong>
                <br/>
                ${(item.price*qty).toFixed(2)}
                </div>

            </Item>
        </Grid>
        
    </Grid>
  )
}
