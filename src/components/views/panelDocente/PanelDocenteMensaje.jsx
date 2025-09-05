import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import foto_perfil from "../../../assets/foto_perfil.jpg";
import { useState } from "react";

const datosMensajes = [
    {
      id: 1,
      nombre: "Juan R.",
      mensaje: "Hola, ¿cómo estás? Necesito ayuda con el proyecto.",
      tiempo: "10:30 AM",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      nombre: "Ana M.",
      mensaje: "La clase de hoy fue muy interesante. ¿Qué te pareció?",
      tiempo: "Ayer",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: 3,
      nombre: "Profesor Carlos R.",
      mensaje: "Recordatorio: La fecha límite para la tarea es el viernes.",
      tiempo: "2 días",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 4,
      nombre: "Profesor Carlos R.",
      mensaje: "No olvides revisar el material adicional en la plataforma.",
      tiempo: "3 días",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 5,
      nombre: "Profesor Carlos R.",
      mensaje: "El examen final será el próximo lunes. ¡Prepárense!",
      tiempo: "4 días",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
  ];

const PanelDocenteMensaje = () => {
  const [busqueda, setBusqueda] = useState("");
  const [pestania, setPestania] = useState("todos");

  const mensajesFiltrados = datosMensajes.filter((m) =>
    m.mensaje.toLowerCase().includes(busqueda.toLowerCase())
  );

  

  return (
    <Container fluid>
      <Row>
        {/* Barra lateral */}
        <Col xs={3} className="sidebar d-flex flex-column">
          <div className="text-center mb-4">
            <img src={foto_perfil} alt="Foto de perfil" className="img-perfil" />
            <h5 className="mt-2">Prof. Gustavo Avellaneda</h5>
          </div>
          <Nav className="flex-column flex-grow-1">
            <div>
              <Nav.Link href="#inicio">
                <i className="bi bi-house-door-fill"></i> Inicio
              </Nav.Link>
              <Nav.Link href="#materias">
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

        {/* Contenido principal */}
        <Col xs={9} className="p-4">
          <h2 className="mb-4 fw-bold">Panel de Control del Docente</h2>
          <h4 className="mb-3">Mensajes</h4>

          {/* Barra de búsqueda */}
          <div className="barra-busqueda">
            <input
              type="text"
              placeholder="Buscar mensajes"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          {/* Pestañas */}
          <div className="pestanias">
            <button
              className={pestania === "todos" ? "activa" : ""}
              onClick={() => setPestania("todos")}
            >
              Todos
            </button>
            <button
              className={pestania === "no-leidos" ? "activa" : ""}
              onClick={() => setPestania("no-leidos")}
            >
              No leídos
            </button>
          </div>

          {/* Filtros */}
          <div className="filtros">
            <select>
              <option>Curso</option>
            </select>
            <select>
              <option>Remitente</option>
            </select>
          </div>

          {/* Lista de mensajes */}
          <div className="lista-mensajes">
            {mensajesFiltrados.map((mensaje) => (
              <div key={mensaje.id} className="mensaje-item">
                <img
                  src={mensaje.avatar}
                  alt={mensaje.nombre}
                  className="avatar"
                />
                <div className="mensaje-info">
                  <p className="nombre">{mensaje.nombre}</p>
                  <p className="texto">{mensaje.mensaje}</p>
                </div>
                <span className="tiempo">{mensaje.tiempo}</span>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PanelDocenteMensaje;
