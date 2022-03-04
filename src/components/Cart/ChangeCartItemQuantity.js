import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useTheme} from '@mui/material/styles'

const range=(x)=>[...Array(x).keys()]

export default function ChangeCartItemQuantity({item, qty, setQty}) {
    const theme = useTheme();

    const handleChange=(event, item)=>{
        console.log('changing cart either adding or removing')
    }

  return (
    <FormControl fullWidth sx={{backgroundColor:theme.palette.background.default}}>
    <InputLabel id="qty-sel">Qty</InputLabel>
    <Select
        labelId="qty-sel"
        id="qty-sel-sel"
        value={qty}
        label="Qty"
        onChange={event=>handleChange(event, item)}
        >
            {range(qty+100).map(
            (qtySel)=>qtySel<qty || qtySel<10 || qtySel%10===0 || qtySel%25===0 
            ?
            <MenuItem key={qtySel} value={qtySel}>{qtySel}</MenuItem>
            :''
            )}
    </Select>
    </FormControl>
  )
}
