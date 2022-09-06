import React from "react"
import { Container } from "react-bootstrap"
import BasicLayaut from "../layouts/BasicLayout"
import ListSkills from "../components/ListSkills"
import {
  frontendSkills,
  frontendSkillsColors,
  backendSkills,
  backendSkillsColors,
} from "../utils/skills"
import "./skills.scss"

export default function Index() {
  return (
    <BasicLayaut menuColor="#000">
      <Container className="skills">
        <div className="skills__block">
          <h2>Frontend</h2>
          <ListSkills skills={frontendSkills} colors={frontendSkillsColors} />
        </div>
        <div className="skills__block">
          <h2>Backend</h2>
          <ListSkills skills={backendSkills} colors={backendSkillsColors} />
        </div>
      </Container>
    </BasicLayaut>
  )
}
