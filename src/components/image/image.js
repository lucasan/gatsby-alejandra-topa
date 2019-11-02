import React from "react"

const Image = (props) => {
  const image = props.image
  const className = props.className
  return (
    <picture>
      <source srcSet={image.localFile.childImageSharp.fluid.srcSetWebp} type={'image/webp'} />
      <img src={image.localFile.childImageSharp.fluid.originalImg} srcSet={image.localFile.childImageSharp.fluid.srcSet}
           alt={image.alt_text} className={className}/>
    </picture>
  )
}

export default Image