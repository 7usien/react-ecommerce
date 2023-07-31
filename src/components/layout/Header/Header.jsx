import { Badge } from "react-bootstrap";

import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { ShoppingHeadingCart } from "../../ecom-ui";

const Header = () => {
 const { shoppingCart, headerTop, header, mainNav, secNav, activeLink } =
  styles;

 return (
  <>
   <header className={header}>
    <div className={headerTop}>
     <h1>
      Our <Badge bg="info">Ecom</Badge>
     </h1>
     <div className={shoppingCart}>
      <ShoppingHeadingCart />
  
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
  </>
 );
};

export default Header;
