import React from "react"
import { Col } from "react-bootstrap"
import { Link } from "../link-animations"
import Image from "../image"
import "./assets/scss/styles.scss"

const ListingItem = (props) => {

  const posts = props.posts

  return (
    <>
      {posts.map((post, index) => (
        <Col key={index} xs={12} md={4}>
          <article className={'blog-post-listing'}>
            <Link to={post.node.path}>
              <figure>
                <Image image={post.node.acf.imagen_en_resumen} className={'img'}/>
                <figcaption>
                  <h3>{post.node.title}</h3>
                  <article dangerouslySetInnerHTML={{__html: post.node.acf.resumen }} />
                </figcaption>
              </figure>
            </Link>
          </article>
        </Col>
      ))}
    </>
  )
}

export default ListingItem