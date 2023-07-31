import { Button } from "react-bootstrap";
import styles from "./styles.module.css";

const { container, cartItems, cartItem, button } = styles;

const CartDrop = () => {
 return (
  <div className={container}>
   CartDrop
   <Button className={button} variant="dark">
    go to checkout
   </Button>
  </div>
 );
};

export default CartDrop;
