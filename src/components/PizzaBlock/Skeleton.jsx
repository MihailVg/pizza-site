import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className='pizza-block'
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="-1" y="269" rx="10" ry="10" width="278" height="29" /> 
    <rect x="0" y="314" rx="10" ry="10" width="278" height="76" /> 
    <rect x="0" y="404" rx="10" ry="10" width="130" height="26" /> 
    <circle cx="134" cy="128" r="125" /> 
    <rect x="148" y="404" rx="10" ry="10" width="130" height="26" />
  </ContentLoader>
)

export default Skeleton