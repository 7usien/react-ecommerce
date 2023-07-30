import Product from "../../Product/Product";
import { Form } from "react-bootstrap";
import styles from "./styles.module.css";
import { memo } from "react";


const CartItem = ({ data, changeQuantityhandler, quantity }) => {

  const options = Array(data.max).fill(1).map((_, idx) => {
    const value = ++idx;
    return ( 
     
      <option key={idx} value={value}>{value}</option>
  ) })
  
  const { cartItem, cartItemSelection } = styles;
  return (
    <div className={cartItem}>
      <Product {...data} actionType="remove" btnText="Remove!" />
      <div className={cartItemSelection}>
        <Form.Select onChange={(e) => {
          changeQuantityhandler({quantity:+e.target.value, id:data.id})

        }} value={quantity}>
         {options}
        </Form.Select>
      </div>
    </div>
  );
};

export default memo(CartItem);
