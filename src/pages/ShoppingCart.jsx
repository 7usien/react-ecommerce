import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shoppingCartProducts } from "../store/productReducer";
import { changeQuantity } from "../store/cartReducer";
import ShoppingCartList from "../components/ShoppingCartList/ShoppingCartList";


const ShoppingCart = () => {
 const products = useSelector((state) => state.products.items);
 const items = useSelector((state) => state.cart.items);

 const dispatch = useDispatch();

 const changeQuantityhandler = useCallback(
  (args) => {
   dispatch(changeQuantity(args));
  },

  [dispatch ]
 );

 useEffect(() => {
  dispatch(shoppingCartProducts());
 }, []);

  return <>
    
      <ShoppingCartList products={products} items={items} changeQuantityhandler={changeQuantityhandler} />

    </>;
};

export default ShoppingCart;
