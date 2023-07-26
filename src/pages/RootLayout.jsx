import { Outlet } from "react-router-dom";

import { Container } from "react-bootstrap";
import { Header } from "../components/layout";
const RootLayout = () => {
 return (
  <>
   <Container>
    <Header />
    
    <Outlet />
   </Container>
  </>
 );
};

export default RootLayout;
