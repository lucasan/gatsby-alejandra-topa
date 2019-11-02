import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import useSiteMetadata from "../hooks/use-site-metadata"
import { Container, Row } from "react-bootstrap"
import Paginator from "../components/paginator"
import Image from "../components/image"
import ListingItem from "../components/listing-item"

export default (props) => {

  const posts = props.data.posts.edges
  const metadata = useSiteMetadata()
  const page = props.data.page;
  const title = `${page.title} - ${metadata.name}`

  const { currentPage, numPages } = props.pageContext

  return (
    <Layout title={title} description={metadata.description}>
      <section className={'page-hero'}>
        <Image image={page.acf.imagen_hero} className={'hero-image'}/>
        <h1>{page.title}</h1>
      </section>
      <Container>
        <article dangerouslySetInnerHTML={{ __html: page.content }}/>
      </Container>
      <Container>
        <Row>
          <ListingItem posts={posts}/>
        </Row>
      </Container>
      <Paginator currentPage={currentPage} numPages={numPages}/>
    </Layout>
  )
}


export const query = graphql`
  query postQuery($limit: Int!, $skip: Int!) {
    posts: allWordpressPost(limit: $limit, skip: $skip) {
      edges {
        node {
          title
          path
          excerpt
          date(formatString: "Y-m-d")
          acf {
              resumen
              imagen_en_resumen {
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
    page: wordpressPage(slug: {eq: "blog"}) {
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