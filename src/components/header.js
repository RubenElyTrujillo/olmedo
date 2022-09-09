import React, { useContext } from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import { AlternateLinksContext } from "./wrapWithI18nProvider"
import PropTypes from "prop-types"
import Logo from '../assets/svg/og-logo.svg'

const Header = () => {
  const alternateLinks = useContext(AlternateLinksContext)
  const { t, i18n } = useTranslation("common")

  return (
    <header>
      <Link to={`/${i18n.language}`}><Logo className="logo"/></Link>
      <ul>
        <li><Link to={`/${i18n.language}/#services`}>{t("services")}</Link></li>
        <li><Link to={`/${i18n.language}/#team`}>{t("team")}</Link></li>
        <li><Link to={`/${i18n.language}/#contact`}>{t("contact")}</Link></li>
        {alternateLinks &&
            alternateLinks
              .filter(link => link.language !== i18n.language)
              .map((link, i) => [
                i > 0 && " | ",
                <li key={i * 55 + 2}>
                  <Link
                    to={link.path}
                    hrefLang={link.language}
                  >
                    {t(link.language)}
                  </Link>
                </li>,
              ])}
      </ul>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
