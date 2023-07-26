import { Button, Container } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
 const error = useRouteError();
const {data, status, statusText}=error

 return (
  <Container>
   <div className="notFound">
    <h1>{ status || 404}</h1>
    <p>{ statusText}</p> 

    <Button variant="link">Go Back</Button>
   </div>
  </Container>
 );
};

export default ErrorPage;
