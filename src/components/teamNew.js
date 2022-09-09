import React, { useEffect, useRef, useState } from "react"
import { localize } from "../lib/helpers"
import classNames from "classnames"

import Member from "./member"

const Team = ({ team, pageContext }) => {
  const
    info = localize(team, [pageContext.language]),
    { title, partners, lawyers, interns } = info,
    [isTitleVisible, setTitleVisible] = useState(true),
    titleRef = useRef();

  let titleClass = classNames({
    'caps': true,
    'animated': isTitleVisible,
  });

  useEffect(() => {
    const observerTitle = new IntersectionObserver(entries => {
      entries.forEach(entry => setTitleVisible(entry.isIntersecting));
    });

    observerTitle.observe(titleRef.current);

    return () => {
      if(titleRef.current) {
        observerTitle.unobserve(titleRef.current)
      }
    };
  }, []);

  return(
    <div id="team">
      <div className="grid">
        <p className="number" data-sal='fade' data-sal-duration='500'data-sal-easing='ease'>3.</p>
        <div className="title-container">
          <h2 className={titleClass} ref={titleRef}>{title.translate}</h2>
        </div>
        <div className="texts-container">
          <p className="list-title">{partners.title.translate}</p>
          <ul className="list">
            {partners.partners.map(member => {
              return(
                <Member member={member} key={`${member._key}SOS`}/>
              )
            })}
          </ul>
          <p className="list-title">{lawyers.title.translate}</p>
          <ul className="list">
            {lawyers.partners.map(member => {
              return(
                <Member member={member} key={`${member._key}SOS`}/>
              )
            })}
          </ul>
          <p className="list-title">{interns.title.translate}</p>
          <ul className="list">
            {interns.members.map((member, i) => {
              return(
                <li className="bio-container" key={`${i + 1}SOS`}>
                  <p className="name">{member}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Team
