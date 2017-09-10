import React from 'react'
import Link from 'gatsby-link'
import Hero from 'sicario/Hero'
import Intro from 'sicario/Intro'
import Spacer from 'sicario/Spacer'
import EmbedVideo from 'sicario/EmbedVideo'
import Promotion from 'sicario/Promotion'
import Gallery from 'sicario/Gallery'
import BlogSummary from 'sicario/BlogSummary'
import heroBg from '../../static/hero-bg.jpg'
import {pickBy, identity} from 'lodash'
import {Carousel} from 'react-responsive-carousel'
import {Image} from 'rebass'

const IndexPage = ({data}) => {
  const {hero, intro, promotion, gallery} = data.site.siteMetadata

  const heroDefault = Hero.defaultProps
  const introDefault = Intro.defaultProps

  return (
    <div>
      <Hero
        backgroundImage={heroBg}
        wrapper={{...heroDefault.wrapper, ...hero.wrapper}}
        titleText={hero.titleText || heroDefault.titleText}
        title={{...heroDefault.title, ...hero.title}}
        descriptionText={hero.descriptionText || heroDefault.descriptionText}
        description={{...heroDefault.description, ...hero.description}}
      />
      <Spacer />
      <div style={{maxWidth: '850px', margin: '0 auto'}}>
        <Intro
          wrapper={{...introDefault.wrapper, ...intro.wrapper}}
          titleText={intro.titleText || introDefault.titleText}
          title={{...introDefault.title, ...intro.title}}
          description={{...introDefault.description, ...intro.description}}
          descriptionText={intro.descriptionText || introDefault.descriptionText}
        />
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
      <Spacer />
      <Spacer />
      <Gallery images={gallery.images} />
      <Spacer />
      <Spacer />
      <BlogSummary />

      <Spacer />
      <Spacer />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        hero {
          wrapper {
            px
          }
          titleText
          descriptionText
        }
        intro {
          titleText
          descriptionText
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
        gallery {
          images
        }
      }
    }
  }
`
