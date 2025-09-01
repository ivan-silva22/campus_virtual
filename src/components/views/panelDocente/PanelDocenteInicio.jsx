import { Container, Row, Col, Nav, Form, Button } from "react-bootstrap";
import foto_perfil from "../../../assets/foto_perfil.jpg";

const PanelDocenteInicio = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={3} className="sidebar d-flex flex-column">
          <div className="text-center mb-4">
            <img
              src={foto_perfil}
              alt="Foto de perfil"
              className="img-perfil"
            />
            <h5 className="mt-2">Prof. Gustavo Avellaneda</h5>
          </div>
          <Nav className="flex-column flex-grow-1">
            <div>
              <Nav.Link href="#home">
                <i className="bi bi-house-door-fill"></i> Inicio
              </Nav.Link>
              <Nav.Link href="#cursos">
                <i className="bi bi-book-fill"></i> Mis Materias
              </Nav.Link>
              <Nav.Link href="#mensajes">
                <i className="bi bi-envelope-fill"></i> Mensajes
              </Nav.Link>
              <Nav.Link href="#calendario">
                <i className="bi bi-calendar-date-fill"></i> Calendario
              </Nav.Link>
              <Nav.Link href="#configuracion">
                <i className="bi bi-gear-fill"></i> Configuración
              </Nav.Link>
            </div>
            <div className="mt-auto">
              <Nav.Link href="#soporte">
                <i className="bi bi-question-circle-fill"></i> Ayuda y Soporte
              </Nav.Link>
            </div>
          </Nav>
        </Col>
        <Col xs={9} className="p-4">
          <h2 className="mb-4 fw-bold">Panel de Control del Docente</h2>
          <h4 className="mb-3">Resumen de Materias</h4>
          <Row>
            <Col md={6}>
              <div className="card shadow-sm mb-3">
                <div
                  className="card-img-top bg-secondary"
                  style={{ height: "150px" }}
                ></div>
                <div className="card-body">
                  <p className="card-text text-muted">Materia: Matemática I</p>
                  <p className="card-text text-muted">Curso: 1er Año</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="card shadow-sm mb-3">
                <div
                  className="card-img-top bg-secondary"
                  style={{ height: "150px" }}
                ></div>
                <div className="card-body">
                  <p className="card-text text-muted">Materia: Matemática II</p>
                  <p className="card-text text-muted">Curso: 2do Año</p>
                </div>
              </div>
            </Col>
          </Row>
          <h4 className="mt-4 mb-3">Actividades Recientes</h4>
          <div className="bg-white p-3 rounded shadow-sm mb-4">
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-3">
                <div className="d-flex w-100 justify-content-between">
                  <div>
                    <p className="mb-0 fw-bold">Matemática I</p>
                    <small>Nueva tarea subida: Ejercicios de Álgebra</small>
                  </div>
                  <small className="text-muted">Hace 1 día</small>
                </div>
              </li>
              <li className="d-flex align-items-start mb-3">
                <div className="d-flex w-100 justify-content-between">
                  <div>
                    <p className="mb-0 fw-bold">Matemática II</p>
                    <small>Nueva tarea subida: Archivo pdf</small>
                  </div>
                  <small className="text-muted">Hace 2 días</small>
                </div>
              </li>
            </ul>
          </div>
          <h4 className="mt-4 mb-3">Mensajes Pendientes</h4>
          <div className="bg-white p-3 rounded shadow-sm">
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-3">
                <div className="d-flex w-100 justify-content-between">
                  <div>
                    <p className="mb-0 fw-bold">Matias</p>
                    <small className="text-muted">
                      Asunto: Consulta sobre el examen
                    </small>
                  </div>
                </div>
              </li>
              <li className="d-flex align-items-center mb-3">
                <div className="d-flex w-100 justify-content-between">
                  <div>
                    <p className="mb-0 fw-bold">Federico</p>
                    <small className="text-muted">
                      Asunto: Duda sobre la tarea
                    </small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PanelDocenteInicio;
