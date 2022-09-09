import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import classNames from "classnames"

import Image from "./image"

const About = ({ about, pageContext }) => {
  const
    [isTagVisible, setTagVisible] = useState(true),
    [isTitleVisible, setTitleVisible] = useState(true),
    tagRef = useRef(),
    titleRef = useRef();

  let
    tagClass = classNames({
      'black caps': true,
      'animated': isTagVisible,
    }),
    titleClass = classNames({
      'black caps': true,
      'animated': isTitleVisible,
    });

  useEffect(() => {
    const observerTag = new IntersectionObserver(entries => {
      entries.forEach(entry => setTagVisible(entry.isIntersecting));
    });
    const observerTitle = new IntersectionObserver(entries => {
      entries.forEach(entry => setTitleVisible(entry.isIntersecting));
    });

    observerTag.observe(tagRef.current);
    observerTitle.observe(titleRef.current);

    return () => {
      if(titleRef.current) {
        observerTitle.unobserve(titleRef.current)
      }
      if(tagRef.current) {
        observerTitle.unobserve(tagRef.current)
      }
    };
  }, []);

  return(
    <div id="nosotros" className="grid">
      <p className="number" data-sal='fade' data-sal-duration='500'data-sal-easing='ease'>1.</p>

      <div className="title-container">
        <h2 ref={tagRef} className={tagClass}>{about.tagline.translate}</h2>
      </div>
      <div className="title-container">
        <h2 ref={tagRef} className={tagClass}>{about.tagline2.translate}</h2>
      </div>
      <div className="title-container">
        <h2 ref={tagRef} className={tagClass}>{about.tagline3.translate}</h2>
      </div>
      <div className="title-container">
        <h2 ref={titleRef} className={titleClass}>{about.title.translate}</h2>
      </div>

      <div className="texts-container">
        <p className="text" data-sal='fade' data-sal-duration='500'data-sal-easing='ease'>{pageContext.language === "es" ? about.text.es : about.text.en}</p>
        <p className="text small" data-sal='fade' data-sal-duration='500'data-sal-easing='ease'>{pageContext.language === "es" ? about.small.es : about.small.en}</p>
        <Link className="cta caps" to="#contacto" data-sal='fade' data-sal-duration='1000'data-sal-easing='ease'>{about.cta.translate}</Link>
      </div>
      <div className="about-image">
        <Image alt={about.image.alt} image={about.image.asset}/>
      </div>
    </div>
  )
}

export default About
