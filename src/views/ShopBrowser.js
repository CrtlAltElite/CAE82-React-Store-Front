import {useState} from 'react';
import CategoryBar from '../components/CategoryBar';
import ItemBrowser from '../components/ItemBrowser';

export default function ShopBrowser() {
    const [category, setCat]=useState()

  return (
    <>
        <CategoryBar handleClick={(cat)=>{setCat(cat)}}/>
        <ItemBrowser categoryID={category?.id}/>
    </>
  )
}
