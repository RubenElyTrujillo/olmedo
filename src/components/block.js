import React from "react"
import BaseBlockContent from "@sanity/block-content-to-react"
import clientConfig from "../lib/client-config"

const BlockContent = ({ className, blocks }) => (
  <BaseBlockContent className={className} blocks={blocks} {...clientConfig.sanity} renderContainerOnSingleChild={true}/>
)

export default BlockContent
