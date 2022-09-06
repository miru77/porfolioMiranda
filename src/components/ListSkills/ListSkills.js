import React from "react"

import "./ListSkills.scss"

import SkillBar from "react-skillbars"

export default function ListSkills(props) {
  const { skills, colors } = props

  return (
    <div className="list-skills">
      <SkillBar
        skills={skills}
        colors={colors}
        animationDelay={0}
        animationDuration={1500}
      />
    </div>
  )
}
