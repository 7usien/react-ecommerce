import React from 'react'
import { CartItem } from '../ecom-ui';

const ShoppingCartList = ({products, items, changeQuantityhandler}) => {

  const shoppingCartListArray =
  products.length ?
  products.map((ele) => {
   const quantity = items[ele.id];
   return ( 
    <CartItem
     key={ele.id}
     data={{ ...ele }} quantity={quantity}
     changeQuantityhandler={changeQuantityhandler}
    />
   );
  }) : 'there is no items in cart';

 

console.log('list')

  return (
    <>{shoppingCartListArray}</>
  )
}

export default ShoppingCartList