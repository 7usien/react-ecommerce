import { Badge, Alert } from "react-bootstrap";
import shoppingCartImg from "../../../assets/shopping-cart.svg";
import { totalCartQuantity } from "../../../store/cartReducer";
import { closeReachToMax } from "../../../store/cartReducer";
import styles from "./styles.module.css";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { filterProductsByID } from "../../../store/productReducer";

const Header = () => {
 const {
  shoppingCart,
  shoppingCartCounter,
  headerTop,
  header,
  mainNav,
  secNav,
  activeLink,
  bumbCard,
  notification,
  notificationInner,
  notificationImg,
 } = styles;

 const total = useSelector((state) => totalCartQuantity(state));
 const [isAnimateCard, setIsAnimateCard] = useState(false);
 const cardClasses = `${shoppingCartCounter} ${isAnimateCard ? bumbCard : ""}`;
 const { reachToMax, items, currentId } = useSelector((state) => state.cart);
 const dispatch = useDispatch();


 useEffect(() => {
  if (reachToMax) {
   dispatch(filterProductsByID(currentId));
  }
 }, [reachToMax, currentId]);

 const { currentItem } = useSelector((state) => state.products);

 const closeReachToMaxHandler = () => {
  dispatch(closeReachToMax());
 };

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

 useEffect(() => {
  if (!reachToMax) return; //stop or break

  const debounce = setTimeout(closeReachToMaxHandler, 9000);

  return () => {
   clearTimeout(debounce);
  };
 }, [reachToMax]);

 useEffect(() => {
  window.addEventListener("beforeunload", closeReachToMaxHandler);

  return () => {
   window.addEventListener("beforeunload", closeReachToMaxHandler);
  };
 }, []);

 return (
  <>
   <header className={header}>
    <div className={headerTop}>
     <h1>
      Our <Badge bg="info">Ecom</Badge>
     </h1>
         <div className={shoppingCart}>
           <Link to="shopping-cart">
      <img alt="" src={shoppingCartImg} width="30" />
             <div className={`${cardClasses}`}>{total}</div>
             </Link>
     </div>
    </div>

    <nav>
     <ul className={mainNav}>
      <li>
       <NavLink
        end
        to="/"
        className={({ isActive }) => (isActive ? activeLink : undefined)}>
        Home
       </NavLink>
      </li>
      <li>
       <NavLink
        to="/categories"
        className={({ isActive }) => (isActive ? activeLink : undefined)}>
        categories
       </NavLink>
      </li>
      <li>
       <NavLink
        to="/new-collections"
        className={({ isActive }) => (isActive ? activeLink : undefined)}>
        new collections
       </NavLink>
      </li>
     </ul>
     <ul className={secNav}>
      <li>
       <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? activeLink : undefined)}>
        Login
       </NavLink>
      </li>
      <li>
       <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? activeLink : undefined)}>
        Register
       </NavLink>
      </li>
     </ul>
    </nav>
   </header>

   {reachToMax ? (
    <div className={notification}>
     <Alert variant="danger" onClose={closeReachToMaxHandler} dismissible>
      you reach to the max stock of this item !
      <div className={notificationInner}>
       <img className={notificationImg} src={currentItem?.img} alt="" />
       {currentItem?.title} - price: ${currentItem?.price}
      </div>
     </Alert>
    </div>
   ) : null}
  </>
 );
};

export default Header;
