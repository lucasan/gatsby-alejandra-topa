import React from "react"
import useSiteMetadata from "../../hooks/use-site-metadata"
import "./assets/scss/styles.scss"

const ContactInfo = (props) => {
  const info = useSiteMetadata()

  return (
    <section className={'jumbotron consultoria'}>
      <div className={'container'}>
        <div className={'section-main-title'}>
          <h2>{info.contacto_titulo}</h2>
        </div>
        <article dangerouslySetInnerHTML={{__html: info.contacto_texto}} />
      </div>
    </section>
  )
}

export default ContactInfo