import React, {useState} from 'react';
import Chip from '@mui/material/Chip';
const categories = [{id: 1, name:"Ditto"}, {id:2, name:"Pikachu"}, {id:3, name:"Mew"}]

export default function CategoryBar({setAlert}) {
    const [actCat, setActCat]= useState({})
    
    const handleActCat=(cat)=>{
        if (actCat === cat){
            setActCat({})
        }else{
            setActCat(cat)
        }
        setAlert({msg:`You changed the category to ${cat.name}`, cat:'error'})
    }

  return (
  <>
    {categories?.map(
        (cat)=>(
            cat === actCat
            ?
            <Chip
            key={cat.id}
            label={cat.name}
            color="primary"
            size="small"
            onClick={()=>{handleActCat(cat)}}
            />
            :
            <Chip
            key={cat.id}
            label={cat.name}
            color="primary"
            variant="outlined"
            size="small"
            onClick={()=>{handleActCat(cat)}}
            />
        )
    )}
  </>
  )
}
