import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import useSiteMetadata from "../hooks/use-site-metadata"
import { Container } from "react-bootstrap"

export default (props) => {

  const post = props.data.post
  const metadata = useSiteMetadata()
  const title = `${post.title} - ${metadata.name}`

  return (
    <Layout title={title} description={metadata.description}>
      <section className={'page-hero'}>
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
    post: wordpressPost(id: { eq: $id }) {
      date
      author {
        name
        path
      }
      path
      title
      content
      categories {
        name
        link
        count
      }
    }
  }
`