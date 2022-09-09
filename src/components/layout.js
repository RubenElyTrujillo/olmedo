import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Icon from "../assets/svg/og-icon.svg"
import "../styles/custom.scss"
import "../styles/media.scss"

const Layout = ({ children, pageContext }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      sanityContact {
        copyright
        mail
        fb
        tw
      }
    }
  `)
  const { copyright, mail, fb, tw } = data.sanityContact
  const { t, i18n } = useTranslation("common")

  return (
    <>
      <Header />

      <main>{children}</main>

      <footer className="grid">
        <p className="rights">{copyright}</p>
        <a className="mail" href={`mailto:${mail}`}>{mail}</a>
        <Link className="privacy" to={`/${i18n.language}/privacy-policy`}>{t("privacy")}</Link>
        <a className="credits" href="https://latentestudio.com/?ref=olmedogaxiola" target="__blank">{t("credits")}</a>
        <a target="__blank" className="fb" href={fb}>FB</a>
        <a target="__blank" className="tw" href={tw}>TW</a>
        <Icon className="icon"/>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
