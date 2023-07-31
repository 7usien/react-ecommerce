import { Outlet } from "react-router-dom";

import { Container } from "react-bootstrap";
import { Header } from "../components/layout";
import { Notification } from "../components/Notification/Notification";
const RootLayout = () => {
 return (
  <>
   <Container>
       <Header />
  
    <Notification />

    <Outlet />
   </Container>
  </>
 );
};

export default RootLayout;
