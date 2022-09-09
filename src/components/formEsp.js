import React from "react"
import { useTranslation } from "react-i18next"

const FormSpanish = () => {
  const {t} = useTranslation("common")

  return(
    <form name='Formulario-OlmedoGaxiola-Website' method='post'
    action="/es/success" data-netlify='true' data-netlify-honeypot='bot-field' autoComplete='off'>

      <input type='hidden' name='bot-field'/>
      <input type='hidden' name='form-name' value='Formulario-OlmedoGaxiola-Website'/>

      <div>
        <fieldset className="name" data-sal='fade' data-sal-duration='500'data-sal-easing='ease'>
          <label htmlFor="nombre">{t("name")}</label>
          <input type="text" name="nombre" placeholder={t("pName")} required/>
        </fieldset>

        <fieldset className="mail" data-sal='fade' data-sal-duration='500'data-sal-easing='ease'>
          <label htmlFor="mail">{t("mail")}</label>
          <input type="email" name="mail" placeholder={t("pMail")} required/>
        </fieldset>

        <fieldset className="phone" data-sal='fade' data-sal-duration='500'data-sal-easing='ease'>
          <label htmlFor="telefono">{t("phone")}</label>
          <input type="text" name="telefono" placeholder={t("pPhone")} required/>
        </fieldset>
      </div>

      <fieldset className="message" data-sal='fade' data-sal-duration='500'data-sal-easing='ease'>
        <label htmlFor="mensaje">{t("message")}</label>
        <textarea type="text" name="mensaje" placeholder={t("placeholder")}/>
        <button type="submit">{t("send")}</button>
      </fieldset>
    </form>
  )
}

export default FormSpanish
