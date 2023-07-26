import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Category = ({id, title, prefix, img}) => {
  const { category, categoryImg, categoryTitle } = styles;
  return (
    <Link to={`${prefix}/products`}>
    <div className={category}>
      <div className={categoryImg}>
        <img
          src={img}
          alt=""
        />
      </div>
      <h4 className={categoryTitle}>{title}</h4>
      </div>
      </Link>
  );
};

export default Category;
