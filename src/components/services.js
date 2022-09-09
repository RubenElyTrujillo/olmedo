import React, { useEffect, useRef, useState } from "react"
import classNames from "classnames"

import Image from "./image"
import List from "./list"

const Services = ({ services, pageContext }) => {
  const {hero, title, description, penal, administrative, proBono, alliances, penalTitle, administrativeTitle, proBonoTitle, alliancesTitle} = services

  const
    [isTitleVisible, setTitleVisible] = useState(true),
    titleRef = useRef();

  let titleClass = classNames({
    'black caps': true,
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
  });

  return(
    <div id="servicios">
      <div className="hero">
        <Image image={hero.image.asset} alt={hero.image.alt}/>
        <div className="title">
          <h2 data-sal='fade' data-sal-duration='500'data-sal-easing='ease'>{hero.title.translate}</h2>
        </div>
      </div>

      <div className="grid" id="services">
        <p className="number" data-sal='fade' data-sal-duration='500'data-sal-easing='ease'>2.</p>
        <div className="title-container">
          <h2 className="black caps" className={titleClass} ref={titleRef}>{title.translate}</h2>
        </div>
        <p className="desc text caps" data-sal='fade' data-sal-duration='500'data-sal-easing='ease'>{pageContext.language === "es" ? description.es : description.en}</p>
        <List category={penal} name={penalTitle.translate}/>
        <List category={administrative} name={administrativeTitle.translate}/>
        <List category={proBono} name={proBonoTitle.translate}/>
        <List category={alliances} name={alliancesTitle.translate}/>
      </div>

    </div>
  )
}

export default Services
