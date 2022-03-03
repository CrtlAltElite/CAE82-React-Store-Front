import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function ItemBrowser() {

  if (!items){
      return(
      <Box sx={{display:'flex'}}>
          <CircularProgress />
      </Box>)
  }

  return (
    <ImageList cols={3}>

      {items?.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            subtitle={'$'+item.price.toFixed(2)}
            actionIcon={
                          <>
                          <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.name}`}
                          >
                          <InfoIcon />
                          </IconButton>
                          <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${item.name}`}
                        >
                          
                          <AddShoppingCartTwoToneIcon />

                        </IconButton>
                        </>

                        }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const item1={id:1,name:"Tyedye",price:7,img:'https://res.cloudinary.com/cae67/image/upload/v1628193056/fakebook_shop/tiedyeshirt_nufhjn.jpg'}
const item2={id:2,name:"Eryn's Shoes",price:10.99,img:'https://res.cloudinary.com/cae67/image/upload/v1628184304/fakebook_shop/pinkshoes_ratrx5.jpg'}
const item3={id:3,name:"Marvel",price:9.9,img:'https://res.cloudinary.com/cae67/image/upload/v1628193027/fakebook_shop/marvel_shirt_t7epwz.jpg'}
const items=[item1, item2, item3]