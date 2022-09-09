import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = ({alt, image, className}) => (
  <GatsbyImage image={getImage(image)} alt={alt} className={className}/>
)

export default Image
