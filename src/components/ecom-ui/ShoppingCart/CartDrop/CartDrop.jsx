import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { shoppingCartProducts } from "../../../../store/productReducer";

const { container, cartItems, cartItem, button } = styles;

const CartDrop = ({ close }) => {
 const navigate = useNavigate();
 const closeHandler = () => {
  navigate("shopping-cart");
  close();
 };

  useEffect(() => {
    if (items.length) return;
  dispatch(shoppingCartProducts());
 },[]);

 //items quantity
 const products = useSelector((state) => state.cart.items);
 //items in cart
 const { items, loading, error } = useSelector((state) => state.products);

 const dispatch = useDispatch();

 const itemList = !items.length ? (
  <div>your cart is empty</div>
 ) : (
  items.map((item) => {
    const quantity = products[item.id];
   return (
    <div className={cartItem} key={item.id}>
     <img src={item.img} alt="" />
       <div>
       <h2>{item.title} </h2>
       <h3>{item.price} EGP x {quantity}</h3>
     </div>
    </div>
   );
  })
 );

 return (   
  <div className={container}>
   <div className={cartItems}>{itemList}</div>
   <Button className={button} variant="dark" onClick={closeHandler}>
    go to checkout
   </Button>
  </div>
 );
};

export default CartDrop;
