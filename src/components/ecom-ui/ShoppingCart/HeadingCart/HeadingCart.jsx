import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import shoppingCartImg from "../../../../assets/shopping-cart.svg";
import { totalCartQuantity } from "../../../../store/cartReducer";

import styles from "./styles.module.css";
import CartDrop from "../CartDrop/CartDrop";
const { shoppingCartCounter, pumbCard, shoopingCart } = styles;

const ShoppingHeadingCart = () => {
 const total = useSelector((state) => totalCartQuantity(state));
 const [isAnimateCard, setIsAnimateCard] = useState(false);
 const cardClasses = `${shoppingCartCounter} ${isAnimateCard ? pumbCard : ""}`;


 const [cartDropOpen, setCartDropOpen] = useState(false);
 const divE1 = useRef();

 const closeCartDrop = useCallback(() => {
   setCartDropOpen(false);
   
 }, []);

 useEffect(() => {
  const handler = (event) => {
   if (!divE1.current.contains(event.target)) {
    closeCartDrop();
   }
   document.addEventListener("click", handler, true);
   return () => {
    document.removeEventListener("click", handler);
   };
  };
 }, [closeCartDrop]);

 useEffect(() => {
  if (total === 0) return; //stop or break
  setIsAnimateCard(true);

  const debounceAnimtion = setTimeout(() => {
   setIsAnimateCard(false);
  }, 500);

  return () => {
   clearTimeout(debounceAnimtion);
  };
 }, [total]);

 return (
  <div ref={divE1}>
   <div
    className={shoopingCart}
    onClick={() => setCartDropOpen((prev) => !prev)}>
    <img alt="" src={shoppingCartImg} width="30" />
    <div className={`${cardClasses}`}>{total}</div>
    {cartDropOpen ? <CartDrop close={closeCartDrop} /> : null}
   </div>
  </div>
 );
};

export default ShoppingHeadingCart;
