import { Container, Form, Button, Row, Col } from "react-bootstrap";
import imgLogin from "../../../src/assets/login.jpg";

const Login = () => {

  return (
    <Container >
      <section>
        <h1 className="mt-5 text-center">
          Bienvenidos a <span className="texto-secundario">CampusIES</span>
        </h1>
        
      </section>
      <Row>
        <Col md={6} ms={12}>
          <Form className="mt-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>DNI:</Form.Label>
              <Form.Control type="number" placeholder="Ingrese su DNI" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
              />
            </Form.Group>
            <div className="text-center mt-4">
              <Button  className="btn btn-color w-100 fs-5" type="submit">
                Iniciar sesión
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={6} ms={12}>
          <img src={imgLogin} alt="Login" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
