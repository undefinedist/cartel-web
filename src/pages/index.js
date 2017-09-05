import React from 'react'
import Link from 'gatsby-link'
import Hero from 'sicario/Hero'
import heroBg from '../../static/hero-bg.jpg'
import {pickBy, identity} from 'lodash'

const IndexPage = ({data: {site: {siteMetadata: {hero}}}}) => (
  <div>
    <Hero {...hero} backgroundImage={heroBg} />
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
          backgroundImage
          contentLoc
          contentPx
          title {
            titleText
            titleSizes
            titleColor
            titleBold
            titlePb
          }
          description {
            descriptionText
            descriptionSizes
            descriptionColor
            descriptionBold
          }
        }
      }
    }
  }
`
