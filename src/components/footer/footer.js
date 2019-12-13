import React from "react"
import useSiteMetadata from "../../hooks/use-site-metadata"
import { Col, Container, Nav, NavItem, Row } from "react-bootstrap"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import "./assets/scss/styles.scss"

const Footer = (props) => {

  const info = useSiteMetadata()

  return (
    <footer>
      <section className={'footer-info'}>
        <Container>
          <Row>
            <Col>
              <p>
                <a className={'phone'} href={`tel:${info.telefono}`} title={'Llamar a Alejandra ToPa'}>
                  <FontAwesomeIcon icon={faPhone}/>
                  {info.telefono}
                </a>
              </p>
              <address dangerouslySetInnerHTML={{__html: info.direccion}} />
            </Col>
            <Col>
              <p>
                <a href="https://www.psico.org/centro-37915">
                  <img src="https://www.psico.org/sello_calidad.png" width="162" height="97" border="0"
                       alt="Alejandra Torres - Servicios Psicológicos" />
                </a><br/><a target={'_blank'} rel={'noreferrer'} href="http://www.psico.org/psicologos/cali">Visitar web</a>
              </p>
            </Col>
          </Row>
          <Row className={'justify-content-center'}>
            <Col sm={3}>
              <Nav justify={true}>
                <NavItem>
                  <a href={'https://www.instagram.com/alejandratopacom/'} className={'social-link'} title={''} target={'_blank'} rel={'noreferrer'}>
                    <FontAwesomeIcon icon={faInstagram}/>
                  </a>
                </NavItem>
                <NavItem>
                  <a href={'https://facebook.com/AlejandraToPaCom'} className={'social-link'} title={''} target={'_blank'} rel={'noreferrer'}>
                    <FontAwesomeIcon icon={faFacebook}/>
                  </a>
                </NavItem>
                <NavItem>
                  <a href={'https://twitter.com/alejandratopaco'} className={'social-link'} title={''} target={'_blank'} rel={'noreferrer'}>
                    <FontAwesomeIcon icon={faTwitter}/>
                  </a>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={'copy-section'}>
        <Container>
          <Row>
            <Col className={'copy'}>
              <p className={"small"}>&copy; {new Date().getFullYear()} - {info.nombre_del_sitio}</p>
            </Col>
            <Col className={'back-to-top'}>
              <AnchorLink href={'#top'}>
                <FontAwesomeIcon icon={faChevronUp}/>
              </AnchorLink>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  )
}

export default Footer