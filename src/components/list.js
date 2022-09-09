import React, { useState } from "react"
import AnimateHeight from 'react-animate-height';

import Open from "../assets/svg/plus-sign.svg"

const List = ({ category, name }) => {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0)

  const toggle = () => {
    setOpen(!open)
    setHeight(height === 'auto' ?  0 : 'auto')
  }

  return(
    <div className="list">
      <div className="header">
        <h3 className="caps" onClick={toggle} onKeyDown={toggle}><span>({category.length})</span>{name}</h3>
        <Open className={!open ? "open" : "close"} onClick={toggle} onKeyDown={toggle}/>
      </div>

      <AnimateHeight
        duration={ 500 }
        height={ height }
      >
        <ul className="text">
          {category.map((item, i) => (
            <li key={i + 1 * 333}>{category.length > 1 ? "•" : ""} {item.translate}</li>
          ))}
        </ul>
      </AnimateHeight>
    </div>
  )
}

export default List
