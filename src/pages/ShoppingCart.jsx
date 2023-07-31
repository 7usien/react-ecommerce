import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shoppingCartProducts } from "../store/productReducer";
import { changeQuantity, totalCartPrice } from "../store/cartReducer";
import Loading from "../components/layout/Loading/Loading";
import TotalPrice from "../components/ecom-ui/TotalPrice/TotalPrice";
import CartList from "../components/ecom-ui/ShoppingCart/CartList/CartList";


const ShoppingCart = () => {
 const {items, loading, error} = useSelector((state) => state.products);
 const items2 = useSelector((state) => state.cart.items);
const totalPrice =useSelector(totalCartPrice)
  
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
    <Loading loading={loading} error={error}>
      <CartList  products={items} items={items2} changeQuantityhandler={changeQuantityhandler} />
      <TotalPrice totalPrice={totalPrice} />
      </Loading>

    </>;
};

export default ShoppingCart;
