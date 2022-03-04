import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

import React from 'react'

export default function AddRemoveCartItem({item}) {
  return (
    <ButtonGroup sx={{margin:"auto"}}>
        <IconButton key="delete" onClick={()=>{console.log('Removed all that Item from the cart')}}>
          <DeleteForeverTwoToneIcon fontSize="small"/>
        </IconButton>
        <IconButton  key="rm" onClick={()=>{console.log('Removed 1 of the items')}}>
          <RemoveCircleTwoToneIcon fontSize="small"/>
        </IconButton>
        <IconButton  key="add" onClick={()=>{console.log('added 1 of the items')}}>
          <AddCircleTwoToneIcon fontSize="small"/>
        </IconButton>
    </ButtonGroup>
  )
}
