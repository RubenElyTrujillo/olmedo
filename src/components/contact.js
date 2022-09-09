import React, { useState, useEffect, useRef } from "react"
import { useTranslation } from 'react-i18next'
import classNames from "classnames"

import FormSpanish from "./formEsp"
import FormEnglish from "./formEng"
import Image from "./image"

const Contact = ({ contact, pageContext }) => {
  const
    { t, i18n } = useTranslation('common'),
    { title, address, phones, hero } = contact,
    [isTitleVisible, setTitleVisible] = useState(true),
    titleRef = useRef();

  let
    titleClass = classNames({
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
  }, []);

  return(
    <div id="contacto">
      <div className="hero">
        <Image image={hero.image.asset} alt={hero.image.alt}/>
        <div className="title">
          <h2 data-sal='fade' data-sal-duration='500'data-sal-easing='ease'>{pageContext.language === "es" ? hero.phrase.es : hero.phrase.en}</h2>
          <p>- {hero.author.translate}</p>
        </div>
      </div>

      <div className="grid" id="contact">
        <div className="title-container">
          <h2 ref={titleRef} className={titleClass}>{title.translate}</h2>
        </div>

        {pageContext.language === "es" ?
          <FormSpanish/>
          :
          <FormEnglish/>
        }

        <label className="address" htmlFor="address">{t("location")}</label>
        <p name="address" className="address" data-sal='fade' data-sal-duration='500'data-sal-easing='ease'><a target="__blank" href="https://www.waze.com/ul?ll=19.342568%2C-99.222314&navigate=yes">{address}</a></p>
        <div className="phones" data-sal='fade' data-sal-duration='500'data-sal-easing='ease'>
          {phones.map((phone, i) => (
            <p key={i + 1 * 363}>T{i + 1}: {phone}</p>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Contact
