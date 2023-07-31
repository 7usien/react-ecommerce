import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterProductsByID } from "../../store/productReducer";
import { closeReachToMax } from "../../store/cartReducer";
import { Alert } from "react-bootstrap";

import styles from "./styles.module.css";

export const Notification = () => {
 const { bumbCard, notification, notificationInner, notificationImg } = styles;

 const dispatch = useDispatch();

 const { reachToMax, items, currentId } = useSelector((state) => state.cart);

 const { currentItem } = useSelector((state) => state.products);

 useEffect(() => {
  if (reachToMax) {
   dispatch(filterProductsByID(currentId));
  }
 }, [reachToMax, currentId]);

 const closeReachToMaxHandler = () => {
  dispatch(closeReachToMax());
 };

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
