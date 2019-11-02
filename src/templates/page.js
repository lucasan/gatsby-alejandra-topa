import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import useSiteMetadata from "../hooks/use-site-metadata"
import { Container } from "react-bootstrap"
import Image from "../components/image"

export default (props) => {

  const post = props.data.post
  const metadata = useSiteMetadata()
  const title = `${post.title} - ${metadata.name}`

  return (
    <Layout title={title} description={metadata.description}>
      <section className={'page-hero'}>
        <Image image={post.acf.imagen_hero} className={'hero-image'}/>
        <h1>{post.title}</h1>
      </section>
      <Container>
        <article dangerouslySetInnerHTML={{ __html: post.content }}/>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    post: wordpressPage(id: { eq: $id }) {
      date
      author {
        name
        path
      }
      path
      title
      content
      acf {
        imagen_hero {
          localFile {
            childImageSharp {
              fluid {
                srcSet
                srcSetWebp
              }
            }
          }
        }
      }
    }
  }
`