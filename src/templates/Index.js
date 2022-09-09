import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Typewriter from "typewriter-effect"
import ImageS from 'gatsby-plugin-sanity-image'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "../components/image"
import About from "../components/about"
import Services from "../components/services"
import Team from "../components/teamNew"
import Contact from "../components/contact"

const IndexPage = ({ data, pageContext }) => {
  const
    { about, services, team, contact } = data,
    { title, image } = about.hero;

  useEffect(() => {
    const containersAbout = document.querySelectorAll('.about-image')
    const containersHero = document.querySelectorAll('#hero')
    const containersServices = document.querySelectorAll('#servicios .hero')
    const containersContact = document.querySelectorAll('#contacto .hero')

    window.onscroll = () => {
      containersAbout.forEach((e) => {
        if (e.getBoundingClientRect().top < window.innerHeight && e.getBoundingClientRect().bottom > 0) {
          let t1 = Math.round(1e5 * (((window.scrollY || window.pageYOffset) - window.innerHeight) / window.innerHeight * 2 + 0.5)) / 1e5;
          if(!!e.querySelector(".gatsby-image-wrapper")) {
            e.querySelector(".gatsby-image-wrapper").style.transform = `translateY(${4 * t1}%)`
          }
        }
      })

      containersHero.forEach((e) => {
        if (e.getBoundingClientRect().top < window.innerHeight && e.getBoundingClientRect().bottom > 0) {
          if(!!e.querySelector("img")) {
            let t1 = 1 *(window.scrollY || window.pageYOffset) / 1e2;
            e.querySelector("img").style.transform = `translateY(${t1}%)`
          }
        }
      })

      containersServices.forEach((e) => {
        if (e.getBoundingClientRect().top < window.innerHeight && e.getBoundingClientRect().bottom > 0) {
          if(!!e.querySelector(".gatsby-image-wrapper")) {
            let t1 = 1 * ((window.scrollY || window.pageYOffset) - (window.innerHeight * 3.5)) / 1e2;
            e.querySelector(".gatsby-image-wrapper").style.transform = `translateY(${t1}%)`
          }
        }
      })

      containersContact.forEach((e) => {
        if (e.getBoundingClientRect().top < window.innerHeight && e.getBoundingClientRect().bottom > 0) {
          if(!!e.querySelector(".gatsby-image-wrapper")) {
            let t1 = 1 * ((window.scrollY || window.pageYOffset) - (window.innerHeight * 7.7)) / 1e2;
            e.querySelector(".gatsby-image-wrapper").style.transform = `translateY(${t1}%)`
          }
        }
      })
    }
  }, []);

  return(
    <Layout>
      <Seo title={pageContext.language === "es" ? "Olmedo Gaxiola & Abogados. Firma legal especializada en derecho penal." : "Olmedo Gaxiola & Abogados. Law firm specialized in criminal law"}/>
      <div id="hero">
        <Image image={image.asset} alt={image.alt}/>
        <ImageS {...image} className="mobile" alt={image.alt}/>
        <div className="title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.changeDelay(80).typeString(title.translate).callFunction(() => {
                const cursor = document.querySelector('#hero .title .Typewriter__cursor')
                cursor.classList.add('hide')
              }).start()
            }}
          />
        </div>
        <p className="scroll">Scroll</p>
      </div>
      <About about={about} pageContext={pageContext}/>
      <Services services={services} pageContext={pageContext}/>
      <Team team={team} pageContext={pageContext}/>
      <Contact contact={contact} pageContext={pageContext}/>
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery($language: String) {
    about: sanityAbout {
      hero {
        image {
          alt
          ...Image
          asset {
            url
            gatsbyImageData(layout: FULL_WIDTH)
          }
      }
        title {
          translate(language: $language)
        }
      }
      tagline {
        translate(language: $language)
      }
      tagline2 {
        translate(language: $language)
      }
      tagline3 {
        translate(language: $language)
      }
      title {
        translate(language: $language)
      }
      text {
        es
        en
      }
      small {
        es
        en
      }
      cta {
        translate(language: $language)
      }
      image {
        alt
        asset {
          gatsbyImageData(width:1540, layout: CONSTRAINED)
        }
      }
    }
    services: sanityServices {
      hero {
        title {
          translate(language: $language)
        }
        image {
          alt
          asset {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      title {
        translate(language: $language)
      }
      description {
        es
        en
      }
      penalTitle {
        translate(language: $language)
      }
      penal {
        translate(language: $language)
      }
      administrativeTitle {
        translate(language: $language)
      }
      administrative {
        translate(language: $language)
      }
      proBonoTitle {
        translate(language: $language)
      }
      proBono {
        translate(language: $language)
      }
      alliancesTitle {
        translate(language: $language)
      }
      alliances {
        translate(language: $language)
      }
    }
    team: sanityTeam {
      title {
        translate(language: $language)
      }
      partners {
        title {
          translate(language: $language)
        }
        partners {
          name
          image{
            _key
            asset {
              gatsbyImageData(width:1040, layout: CONSTRAINED, placeholder: NONE)
            }
          }
          _rawBio
          _key
        }
      }
      lawyers {
        title {
          translate(language: $language)
        }
        partners {
          name
          image {
            _key
            asset {
              gatsbyImageData(width:1040, layout: CONSTRAINED, placeholder: NONE)
            }
          }
          _rawBio
          _key
        }
      }
      interns {
        title {
          translate(language: $language)
        }
        members
      }
    }
    contact: sanityContact {
      hero {
        phrase {
          es
          en
        }
        author {
          translate(language: $language)
        }
        image {
          alt
          asset {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      title {
        translate(language: $language)
      }
      address
      phones
      fb
      tw
    }
  }
`

export default IndexPage
