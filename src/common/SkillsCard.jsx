import React from 'react'

const SkillsCard = ({src,skill}) => {
  return (
    <span>
      <img src={src} alt={`${src} icon`} />
      <p>{skill}</p>
    </span>
  )
}

export default SkillsCard