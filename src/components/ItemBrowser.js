import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useItems from '../hooks/useItems';
import Error from '../components/Error';

export default function ItemBrowser({categoryID}) {
  const {error, items} =useItems(categoryID);

  if (error){return (
    <Box sx={{display:'flex'}}>
      <Error>{error}</Error>
    </Box>)
}

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
