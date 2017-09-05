import React from 'react'
import Link from 'gatsby-link'
import Hero from 'sicario/Hero'
import heroBg from '../../static/hero-bg.jpg'

const IndexPage = ({data: {site: {siteMetadata: {hero: {title, description}}}}}) => (
  <div>
    <Hero title={title} description={description} contentLoc="left" backgroundImage={heroBg} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1>Hi people</h1>
    <h1>Hi people</h1>
    <h1>Hi people</h1>
    <h1>Hi people</h1>
    <h1>Hi people</h1>
    <h1>Hi people</h1>
    <h1>Hi people</h1>
    <h1>Hi people</h1>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        hero {
          title {
            titleSizes
            titleText
            titleColor
            titleBold
            titlePb
          }
          description {
            descriptionSizes
            descriptionText
            descriptionColor
            descriptionBold
          }
        }
      }
    }
  }
`
