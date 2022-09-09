import React from "react"
import { Link } from "gatsby"
import { useTranslation } from 'react-i18next'

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = props => {
  const { t, i18n } = useTranslation('404')

  return (
    <Layout>
      <Seo title={t('title')} lang={props.pageContext.language} />
      <div className="success-container">
        <h1 className="caps black">{t('h1')}</h1>
        <p>{t('p')}</p>
        <Link className="cta" to={`/${i18n.language}`}>{t('cta')}</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
