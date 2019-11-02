import React from "react"
import { Helmet } from "react-helmet-async"

export default (props) => (
  <Helmet>
    <link rel={'preconnect'} href={'https://www.google.com'} />
    <link rel={'preconnect'} href={'https://fonts.gstatic.com'} />
    <meta name="description" content={ props.description } />
    <title>{props.title}</title>
  </Helmet>
)