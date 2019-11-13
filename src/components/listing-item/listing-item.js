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
          <Link to={post.node.path}>
            <div className={"post-image"}>
              <Image image={post.node.acf.imagen_en_resumen} className={"img"}/>
            </div>
            <h3>{post.node.title}</h3>
            <article dangerouslySetInnerHTML={{ __html: post.node.acf.resumen }}/>
          </Link>
        </Col>
      ))}
    </>
  )
}

export default ListingItem