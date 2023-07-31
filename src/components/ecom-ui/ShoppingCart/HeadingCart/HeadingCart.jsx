import { useEffect, useState } from "react";
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
  <div className={shoopingCart} onClick={()=>setCartDropOpen(prev=>!prev)}>
   <img alt="" src={shoppingCartImg} width="30" />
   <div className={`${cardClasses}`}>{total}</div>
{cartDropOpen ?    <CartDrop /> : null}

  </div>
 );
};

export default ShoppingHeadingCart;
