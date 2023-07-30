import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shoppingCartProducts } from "../store/productReducer";
import { changeQuantity, totalCartPrice } from "../store/cartReducer";
import ShoppingCartList from "../components/ShoppingCartList/ShoppingCartList";
import Loading from "../components/layout/Loading/Loading";
import ShoppingCartTotalPrice from "../components/ecom-ui/ShoppingCartTotalPrice/ShoppingCartTotalPrice";


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
      <ShoppingCartList  products={items} items={items2} changeQuantityhandler={changeQuantityhandler} />
      <ShoppingCartTotalPrice totalPrice={totalPrice} />
      </Loading>

    </>;
};

export default ShoppingCart;
