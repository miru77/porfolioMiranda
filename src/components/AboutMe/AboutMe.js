import React from "react"
import { Container, Button } from "react-bootstrap"
import CV from "../../images/cv_jorge_miranda.pdf"
import "./AboutMe.scss"

export default function AboutMe() {
  return (
    <Container className="about-me">
      <p>
        Actualmente Cuento con 1 año de experiencia en nuevas herramientas de desarrollo web front,
         concentrando ahora mi capacitación en React,  NextJS, Gatsby, Strapi ; 
         trabajando con Apis y base de datos remota con  MongoDB, Conexión con servicios en APIs,
          Nodejs, Express.  Estoy en la búsqueda de poder formar parte de proyectos con estas nuevas tecnologías.!!
      </p>
      <hr />

      <a href={CV} target="_blank"   rel="noopener noreferrer">
        <Button primary>Descargar CV</Button>
      </a>
    </Container>
  )
}
