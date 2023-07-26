import React, { useEffect } from "react";
import { Category } from "../components/ecom-ui";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/categoryReducer";
import GridList from "../components/layout/GridList/GridList";

const Categories = () => {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getCategories());
 }, [dispatch]);

 const { records, loading, error } = useSelector((state) => state.categories);

 return (
  <div>
    <GridList data={records} loading={loading} error={error}>
     <Category />
    </GridList>

  </div>
 );
};

export default Categories;
