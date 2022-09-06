import React from "react"
import BasicLayaut from "../layouts/BasicLayout"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import proyects from "../utils/proyects"
import "./proyects.scss"

export default function Proyects() {
  return (
    <BasicLayaut menuColor="#000">
      <Container className="proyects">
        <h1>Proyectos</h1>

        <Row>
          {proyects.map((proyect, index) => (
            <Col key={index} xs={12} sm={4} className="proyect">
              <Card>
                <div
                  className="image"
                  style={{ backgroundImage: `url("${proyect.image}")` }}
                ></div>
                <Card.Body>
                  <Card.Title>{proyect.title}</Card.Title>
                  <Card.Text>{proyect.description}</Card.Text>
                  <a href={proyect.url} target="_blank"  rel="noopener noreferrer">
                    <Button variant="primary">Ver Proyecto</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </BasicLayaut>
  )
}
