import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const site = useStaticQuery(
    graphql`
      query {
        general: wordpressSiteMetadata {
          name
          description
        }
        home: wordpressPage(template: {eq: "template-home.php"}) {
          acf {
            texto_secundario
            tagline
            link_secundario
            contacto_titulo
            contacto_texto
          }
        }
        info: wordpressPage(template: {eq: "template-info.php"}) {
          acf {
            direccion
            email
            telefono
            nombre_del_sitio
            slogan_tagline
          }
        }
      }
    `
  )

  return { ...site.general, ...site.home.acf, ...site.info.acf }
}

export default useSiteMetadata