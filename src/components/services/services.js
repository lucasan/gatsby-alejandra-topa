import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "../link-animations"
import Image from "../image"
import "./assets/scss/styles.scss"

const ServicesQuery = () => {
  const services = useStaticQuery(
    graphql`
      query {
        allWordpressPage(filter: {parent_element: {template: {eq: "template-services.php"}}}) {
          edges {
            node {
              title
              path
              acf {
                resumen
                imagen_en_resumen {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 400) {
                        srcSetWebp
                        srcSet
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  )

  return services.allWordpressPage.edges
}

const Services = (props) => {

  const services = ServicesQuery()

  const rows = services.map((service, index) => {

    return (
      <Col key={index} xs={12} md={4}>
        <div className={'service-image'}>
          <Image image={service.node.acf.imagen_en_resumen} className={'img'}/>
        </div>
        <h3>{service.node.title}</h3>
        <article dangerouslySetInnerHTML={{__html: service.node.acf.resumen}} />
        <div className={'btn-holder'}>
          <Link className={'btn btn-info'} to={service.node.path}>
            Más información
          </Link>
        </div>
      </Col>
    )
  })

  return (
    <section id={'services'}>
      <Container>
        <Row>
          <Col className={'section-main-title'}><h2>Servicios</h2></Col>
        </Row>
        <Row>
          {rows}
        </Row>
      </Container>
    </section>
  )
}

export default Services