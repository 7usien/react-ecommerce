import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { addtocart } from "../../../store/cartReducer";
import { useEffect, useState } from "react";

const Product = ({
 btnText,
 actionType = "add",
 title,
 img,
 price,
 id,
 max,
}) => {
 const dispatch = useDispatch();

 const { item, itemImg, button } = styles;

 const actionHandler = () => {
  if (actionType === "add") {
   dispatch(addtocart({ id, max }));
   setBtnClicked((prev) => prev + 1);
  }
 };

 const [disabled, setDisabled] = useState(false);
 const [btnClicked, setBtnClicked] = useState(0);

 useEffect(() => {
  if (btnClicked === 0) return;
  
  setDisabled(true);

  const debounce = setTimeout(() => {
   setDisabled(false);
  }, 700);

  return () => {
   clearTimeout(debounce);
  };
 }, [btnClicked]);

 return (
  <div className={item}>
   <div className={itemImg}>
    <img src={img} alt="" />
   </div>
   <h2>{title}</h2>
   <h3>{price} EGP</h3>
   <Button
    variant="info"
    onClick={actionHandler}
    disabled={disabled }
    className={button}>
    {disabled ? (
     <>
      <Spinner
       as="span"
       animation="grow"
       size="sm"
       role="status"
       aria-hidden="true"
      />
      
      Loading...
     </>
    ) :  (
     btnText || "Add to cart"
    )}
   </Button>
  </div>
 );
};

export default Product;
