import { Container, Row, Col, Nav, Form, Button } from "react-bootstrap";
import foto_perfil from "../../../assets/foto_perfil.jpg";
import { useState, useRef } from "react";

const PanelDocente = () => {
  const [archivos, setArchivos] = useState([]);
  const inputFileRef = useRef(null);

  const handleFileChange = (e) => {
    setArchivos(Array.from(e.target.files));
  };

  const handleButtonClick = () => {
    inputFileRef.current.click();
  };

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
          <h2>Panel de Control del Docente</h2>
          <section className="mb-4">
            <h4>Subir Material de Estudio</h4>
            <div
              className="upload-box text-center"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                setArchivos(Array.from(e.dataTransfer.files));
              }}
            >
              <p>
                <strong>Arrastra y suelta archivos aquí</strong> o
              </p>
              <p className="text-muted">Haz clic para seleccionar archivos</p>
              <input
                type="file"
                multiple
                ref={inputFileRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <Button className="btn btn-color" onClick={handleButtonClick}>
                Subir Archivos
              </Button>

              {archivos.length > 0 && (
                <>
                  <div className="mt-3 text-start">
                    <p>Archivos seleccionados:</p>
                    <ul>
                      {archivos.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </section>
          <section className="mb-4">
            <h4>Organizar Contenidos</h4>
            <Form>
              <Form.Select className="mb-3">
                <option>Seleccionar Curso</option>
                <option>Curso 1</option>
                <option>Curso 2</option>
              </Form.Select>
              <Form.Select className="mb-3">
                <option>Seleccionar Materia</option>
                <option>Materia 1</option>
                <option>Materia 2</option>
              </Form.Select>
              <Button className="btn btn-color">Guardar Cambios</Button>
            </Form>
          </section>
          <hr />
          <section>
            <h4>Mis Materias</h4>
            <div className="message-item">
              <div>
                <strong>Matemática I</strong>
                <p>1er Año</p>
                <Button className="btn btn-color">
                  Ver Detalles
                </Button>
              </div>
            </div>
            <div className="message-item">
              <div>
                <strong>Matemáticas II</strong>
                <p>2do Año</p>
                <Button className="btn btn-color">
                  Ver Detalles
                </Button>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default PanelDocente;
