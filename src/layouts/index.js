import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {Header} from 'sicario'
import {Provider} from 'rebass'
import logoSrc from '../../static/logo.svg'

const TemplateWrapper = ({children, data: {site: {siteMetadata: {header}}}}) => (
  <Provider theme={theme}>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
      ]}
    />
    <Header {...header} logoSrc={logoSrc} />
    <div
      style={{
        margin: '0 auto',
      }}>
      {children()}
    </div>
  </Provider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

const theme = {
  breakpoints: [32, 48, 64],
  space: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  weights: [400, 700],
  colors: {
    black: '#000',
    white: '#fff',
  },
  radius: 4,
  font: '-apple-system, BlinkMacSystemFont, sans-serif',
  monospace: '"SF Mono", "Roboto Mono", Menlo, monospace',
}

export const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        header {
          bg
          btnText
        }
      }
    }
  }
`
