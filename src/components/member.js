import React, { useState } from "react"
import AnimateHeight from 'react-animate-height';


import Block from "./block"
import Image from "./image"
import Open from "../assets/svg/plus-sign.svg"

const Member = ({ member }) => {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0)

  const toggle = () => {
    setOpen(!open)
    setHeight(height === 'auto' ?  0 : 'auto')
  }

  return(
    <li className="bio-container">
      <p className="name" onClick={toggle} onKeyDown={toggle}>
        <Open className={!!open ? "open-button" : "open-button close"}/>
        {member.name}
      </p>

      <AnimateHeight
        duration={ 500 }
        height={ height }
        className="container-data"
      >
        {Object.keys(member.image).length && (
          <img src={member.image.asset.gatsbyImageData.images.fallback.src} alt={member.name || ""}/>
        )}
        <Block blocks={member._rawBio || []} className={Object.keys(member.image).length ? "bio" : "bio empty-image"}/>
      </AnimateHeight>
    </li>
  )
}

export default Member
