import React from 'react'
import CartItem from '../CartItem/CartItem';

const CartList = ({products, items, changeQuantityhandler}) => {

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

 


  return (
    <>{shoppingCartListArray}</>
  )
}

export default CartList