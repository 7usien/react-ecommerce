import React from "react";

import styles from "./styles.module.css";
import Loading from "../Loading/Loading";

const GridList = ({ children, data, loading, error }) => {
 const { grid } = styles;

 const renderedItems = data.map((item) =>
  React.cloneElement(children, { key: item.id, ...item })
 );

 return <Loading loading={loading} error={error}><div className={grid}>{renderedItems}</div></Loading>;
};

export default GridList;
