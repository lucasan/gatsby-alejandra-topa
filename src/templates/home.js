import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import Hero from "../components/hero"
import useSiteMetadata from "../hooks/use-site-metadata"
import About from "../components/about"
import Services from "../components/services"

export default (props) => {

  const post = props.data.post
  const metadata = useSiteMetadata()
  const title = `${metadata.name} - ${metadata.description}`

  return (
    <Layout title={title} description={metadata.description}>
      <Hero imagenHero={post.acf.imagen_hero} tagline={post.acf.tagline} name={metadata.name} />
      <Services />
      <About post={post} origin={props.location.origin}/>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    post: wordpressPage(id: { eq: $id }) {
      title
      acf {
        tagline
        texto_secundario
        link_secundario
        imagen_hero {
          localFile {
            childImageSharp {
              fluid {
                srcSet
                srcSetWebp
              }
            }
          }
          alt_text
        }
        imagen_secundaria {
          localFile {
            childImageSharp {
              fluid {
                srcSet
                srcSetWebp
              }
            }
          }
          alt_text
        }
      }
    }
  }
`