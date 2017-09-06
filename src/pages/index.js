import React from 'react'
import Link from 'gatsby-link'
import Hero from 'sicario/Hero'
import Intro from 'sicario/Intro'
import Spacer from 'sicario/Spacer'
import EmbedVideo from 'sicario/EmbedVideo'
import Promotion from 'sicario/Promotion'
import heroBg from '../../static/hero-bg.jpg'
import {pickBy, identity} from 'lodash'

const IndexPage = ({data: {site: {siteMetadata: {hero, intro, promotion}}}}) => (
  <div>
    <Hero {...hero} backgroundImage={heroBg} />
    <Spacer />
    <div style={{maxWidth: '850px', margin: '0 auto'}}>
      {console.log('ittle', intro.title.titleText)}
      <Intro {...intro} />
      <Spacer />
      <EmbedVideo />
    </div>
    <Spacer />
    <Spacer />
    <Spacer />
    <div style={{maxWidth: '1200px', margin: '0 auto'}}>
      {promotion.items.map((props, index) => (
        <Promotion
          {...props}
          {...{...promotion.title, ...promotion.description}}
          key={`promotion-${index}`}
          index={index}
        />
      ))}
    </div>
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
            titleMys
            titlePbs
          }
          description {
            descriptionText
            descriptionSizes
            descriptionColor
            descriptionBold
            descriptionMys
            descriptionPbs
          }
        }
        intro {
          contentPx
          title {
            titleText
            titleSizes
            titleColor
            titleBold
            titleMys
            titlePbs
          }
          description {
            descriptionText
            descriptionSizes
            descriptionColor
            descriptionBold
            descriptionMys
            descriptionPbs
          }
        }
        promotion {
          title {
            titleSizes
            titleColor
            bold
            titlePbs
          }
          description {
            descriptionSizes
            descriptionColor
            bold
            descriptionPbs
          }
          items {
            image
            titleText
            descriptionText
          }
        }
      }
    }
  }
`
