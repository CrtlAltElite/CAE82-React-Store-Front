import React from 'react';
import CartItem from './CartItem';

export default function Cart() {
  const item1={id:1,name:"Tyedye",price:7,img:'https://res.cloudinary.com/cae67/image/upload/v1628193056/fakebook_shop/tiedyeshirt_nufhjn.jpg'}
  const item2={id:2,name:"Eryn's Shoes",price:10.99,img:'https://res.cloudinary.com/cae67/image/upload/v1628184304/fakebook_shop/pinkshoes_ratrx5.jpg'}
  const item3={id:3,name:"Marvel",price:9.9,img:'https://res.cloudinary.com/cae67/image/upload/v1628193027/fakebook_shop/marvel_shirt_t7epwz.jpg'}
  const item4={id:1,name:"Tyedye",price:7,img:'https://res.cloudinary.com/cae67/image/upload/v1628193056/fakebook_shop/tiedyeshirt_nufhjn.jpg'}
  const item5={id:3,name:"Marvel",price:9.9,img:'https://res.cloudinary.com/cae67/image/upload/v1628193027/fakebook_shop/marvel_shirt_t7epwz.jpg'}

  const cart=[item1, item4, item2, item3, item5]

  return (
    <>
    {
      [...new Set(cart.map(JSON.stringify))]
        .map(JSON.parse)?.map((item)=><CartItem key={item.id} item={item}/>)
    }
    </>
  )
}
