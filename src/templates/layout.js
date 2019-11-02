import React from "react"
import Seo from "../components/seo"
import Header from "../components/header"
import { Animate } from "../components/link-animations"
import "./../assets/scss/styles.scss"
import Footer from "../components/footer"
import ContactForm from "../components/form"
import ContactInfo from "../components/contact-info"

const Layout = (props) => {

  return (
    <main id={'top'}>
      <Seo title={props.title} description={props.description}/>
      <Header/>
      <div className={'main-container'}>
        <Animate>
          {props.children}
        </Animate>
      </div>
      <ContactInfo/>
      <ContactForm title={"Contáctame"}/>
      <Footer/>
    </main>
  )
}

export default Layout
