import React from "react"
import Image from "../image"
import icon from "../../assets/images/alejandra-icon.svg"
import "./assets/scss/styles.scss"

const Hero = (props) => {
  return (
    <section className={'hero-section'}>
      <Image image={props.imagenHero} className={"hero-image"}/>
      <div className={'hero-description'}>
        <div className={'icon-holder'}>
          <img src={icon} alt={'Alejandra ToPa Icon'} width={100} height={100} />
        </div>
        <div className={'hero-description--motto'}>
          <p>{props.name}</p>
          <h1>{props.tagline}</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero