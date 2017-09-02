import React from 'react'
import Link from 'gatsby-link'
import Hero from 'sicario/Hero'
import heroBg from '../../static/hero-bg.jpg'

const IndexPage = () => (
  <div>
    <Hero
      title="helloleoeo"
      text="hell"
      contentLoc="left"
      backgroundImage={heroBg}
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
