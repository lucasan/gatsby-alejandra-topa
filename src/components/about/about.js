import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Image from "../image"
import { Link } from "../link-animations"
import "./assets/scss/styles.scss"

const About = (props) => {

  const post = props.post

  return (
    <section id={'about'}>
      <Container>
        <Row>
          <Col>
            <Image image={post.acf.imagen_secundaria} className={"portrait-image"}/>
          </Col>
          <Col>
            <article dangerouslySetInnerHTML={{__html: post.acf.texto_secundario}} />
            <Link className={'btn btn-info'} to={post.acf.link_secundario.replace('http://127.0.0.1:8000', '')}>
              Acerca de Alejandra
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About