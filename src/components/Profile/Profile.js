import React from "react"
import "./Profile.scss"
import { Container, Row, Col, Image } from "react-bootstrap"
import profileImage from "../../images/avatar.png"
import Social from "./Social"

const data = [
  {
    title: "Pais:",
    info: "Argentina",
  },
  {
    title: "Provincia:",
    info: "Tucumán",
  },
  {
    title: "E-Mail:",
    info: "jorgemiranda1977@gmail.com",
  },
  {
    title: "Telefono:",
    info: "+54 381 351 2266",
  },
]

export default function Profile() {
  return (
    <div className="profile">
      <div className="wallpaper"></div>
      <div className="dark"></div>
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileImage} fluid />
          </Col>
          <Col xs={12} md={8} className="info__data">
            <span>!HOLA!</span>
            <p>Jorge Rafael Miranda</p>
            <p>Frontend Developer</p>
            <hr />
 
            <div className="more-info">
              {data.map((item, index) => (
                <div key={index} className="item">
                  <p>{item.title}</p>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  )
}
