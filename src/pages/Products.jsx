import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterProducts } from "../store/productReducer";

import GridList from "../components/layout/GridList/GridList";
import { Product } from "../components/ecom-ui";
const Products = () => {
 const { prefix } = useParams();
 const dispatch = useDispatch();

 useEffect(() => {
   dispatch(filterProducts(prefix));
   
   return () => {
     
     dispatch({type:"products/cleanProducts"})
     
   }
 }, [prefix, dispatch]);

 const { items, loading, error } = useSelector((state) => state.items);
 return (
  <GridList data={items} loading={loading} error={error}>
   <Product />
  </GridList>
 );
};

export default Products;
