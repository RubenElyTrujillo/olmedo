import React, { useRef, useState, useEffect } from "react"
import classNames from "classnames"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PrivacyPage = () => {
  const titleRef = useRef();
  const [isTitleVisible, setTitleVisible] = useState(true);

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
  }, []);

  return(
  <Layout>
    <Seo title="Aviso de Privacidad" />
    <div className="privacy-container">
      <div>
        <div className="title-container">
          <h1 ref={titleRef} className={titleClass}>AVISO DE PRIVACIDAD</h1>
        </div>
        <p>Olmedo Gaxiola & Abogados, S.C. (“OG&A”), con domicilio en Avenida Desierto de los Leones número 4794, Colonia Tetelpan, Alcaldía Álvaro Obregón, Código Postal 01700, Ciudad de México, México; pone a disposición del público en general, así como de sus clientes e interesados en los servicios profesionales que presta “OG&A”, (cada uno referido como el o los “TITULARES”), el presente “AVISO DE PRIVACIDAD”, en cumplimiento a lo establecido por: (I) la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (“LFPD”); (II) el Reglamento de la “LFPD”; y (III) los Lineamientos del Aviso de Privacidad publicados en el Diario Oficial de la Federación.</p>
        <p>A efecto de que “OG&A” esté en condiciones de prestar sus servicios profesionales, requiere conocer y sujetar a tratamiento determinados datos personales de los “TITULARES”, según cada caso en específico. Por lo anterior, “OG&A” podrá recopilar la siguiente información:</p>
        <ol>
          <li>Nombre;</li>
          <li>Dirección;</li>
          <li>Fecha de nacimiento;</li>
          <li>Correo electrónico, teléfonos y/o medios de contacto;</li>
          <li>Datos patrimoniales como información bancaria, información sobre bienes muebles o inmuebles, activos, pasivos, relaciones contractuales, y demás aplicables;</li>
          <li>Información sobre personas cercanas como pueden ser cónyuges, familiares, socios, clientes y demás aplicables.</li>
        </ol>
        <p>Los datos personales pueden ser obtenidos de manera oral, escrita, a través de medios físicos o electrónicos, para lo cual, “OG&A” le informa que dichos datos personales podrán ser utilizados para llevar a cabo las siguientes finalidades:</p>
        <ol>
          <li>Confirmar su identidad;</li>
          <li>Analizar las necesidades, problemas y/o situaciones de carácter legal, contable, o financiero que tengan los “TITULARES”, y/o las personas cercanas a ellos;</li>
          <li>Prestar los servicios legales que brindamos dentro de las siguientes áreas del Derecho: Consultoría, Asesoría, Gestoría, Estudio y Análisis, Investigación y Prevención del Delito, Averiguación Previa y Carpetas de Investigación, Proceso Penal, Mecanismos Alternativos y Formas Anticipadas de Solución de Controversias, Juicio de Amparo, Sistema Acusatorio Adversarial (Juicios Orales), Procedimiento de Extradición, Ejecución de Sentencias, así como todas las relacionadas con la materia penal y administrativa;</li>
          <li>Implementar procesos de reclutamiento de personal.</li>
        </ol>
        <p>En caso de recabar algún dato personal que requiera un tratamiento especial, se requerirá del consentimiento expreso del “TITULAR” bajo la forma correspondiente.</p>
        <p>Una vez leídos y acordados los términos y condiciones establecidos en el presente “AVISO DE PRIVACIDAD”, el “TITULAR” otorga su pleno consentimiento respecto del tratamiento de sus datos personales, en específico, para que sean tratados conforme a las finalidades referidas en el presente.</p>
        <p>“OG&A” asume que toda la información proporcionada por el “TITULAR” le pertenece a este último o tiene el derecho sobre la misma. En caso de que no sea así, el “TITULAR” deberá informar dicha circunstancia inmediatamente a “OG&A”, a través del envío de un correo electrónico a oga@olmedogaxiola.com, el cual deberá contener su información de contacto y cualquier otra información que permita dar respuesta a dicho informe, absteniéndose de proporcionar información adicional de la que no sea titular o de la que no tenga autorización para transferir.</p>
        <p>El “TITULAR” podrá revocar el consentimiento antes referido en todo momento. Para revocar el consentimiento proporcionado, éste deberá comunicar dicha circunstancia a “OG&A” por medio de un correo electrónico enviado a oga@olmedogaxiola.com, indicando las causas o circunstancias que lo motivan a comunicar dicha revocación, así como la información que permita a “OG&A” responder y dar seguimiento a dicha revocación.</p>
        <p>En caso de que el “TITULAR” desee limitar el uso o la divulgación de alguno de sus datos personales, podrá, en cualquier momento, enviar la manifestación de dicha limitación a través de un correo electrónico dirigido a oga@olmedogaxiola.com, en el cual incluirá los datos personales cuyo tratamiento desea limitar, los motivos por los cuales desea limitarlos, así como la información que permita a “OG&A” dar seguimiento a dicha solicitud. En caso de ser procedente la solicitud, “OG&A” registrará al “TITULAR” en la lista de exclusión que tendrá elaborada para tal efecto.</p>
        <p>De igual manera, los “TITULARES” tienen derecho a: (I) conocer qué datos personales son tratados por “OG&A” y las finalidades de su tratamiento (DERECHO A ACCESO); (II) solicitar la corrección de sus datos personales en caso de que estén desactualizados, sean inexactos o estén incompletos (DERECHO DE RECTIFICACIÓN); (III) que sus datos personales sean eliminados de los registros y/o bases de datos de “OG&A” cuando consideren que no están siendo utilizados adecuadamente (DERECHO DE CANCELACIÓN); y (IV) oponerse al uso de sus datos personales para fines específicos (DERECHO A OPOSICIÓN) (en su conjunto, los derechos “ARCO”).</p>
        <p>Los derechos “ARCO” pueden ser ejercidos en cualquier momento a través del envío de un correo electrónico dirigido a oga@olmedogaxiola.com. La solicitud de cualquiera de los derechos “ARCO” deberá ir acompañada de lo siguiente:</p>
        <ol>
          <li>El nombre del titular y su domicilio, o cualquier otro medio a través del cual “OG&A” pueda comunicarle la respuesta a su solicitud;</li>
          <li>Los documentos que acrediten la identidado, en su caso, la representación legal del “TITULAR”;</li>
          <li>La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos “ARCO”;</li>
          <li>Los motivos que fundamentan o justifican el ejercicio del derecho “ARCO” correspondiente;</li>
          <li>El formato o el medio en la que desea que “OG&A” dé respuesta a su solicitud, cuando resulte aplicable;</li>
          <li>Cualquier otro elemento y/o documento que facilite el seguimiento a la solicitud del “TITULAR”.</li>
        </ol>
        <p>Asimismo, hacemos del conocimiento de los “TITULARES” que sus datos personales pueden ser transferidos y/o tratados dentro del país y en el extranjero, por personas e instituciones distintas a “OG&A”. En virtud de lo anterior, la información de los “TITULARES” puede ser compartida con personas con las que “OG&A” mantenga una relación profesional, de negocios, y/o de servicios, con el fin de que dichas personas realicen sus actividades a favor de “OG&A” y/o de los “TITULARES”. Asimismo, dicha transferencia podrá realizarse en los supuestos del artículo 37 de la “LFPD”, en particular en las fracciones IV, VI y VII. Si el “TITULAR” no manifiesta su oposición expresa para la transferencia de sus datos personales, ya sea a terceros nacionales o extranjeros, se entenderá que ha otorgado su pleno consentimiento para tales efectos.</p>
        <p>“OG&A” se reserva el derecho de modificar y/o actualizar el presente “AVISO DE PRIVACIDAD” en cualquier momento, de conformidad con las disposiciones jurídicas aplicables, para lo cual informa que cualquier modificación del mismo será publicada en la página de internet www.olmedogaxiola.com, para los efectos legales correspondientes.</p>
      </div>
    </div>
  </Layout>
)}

export default PrivacyPage
