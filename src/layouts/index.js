import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {Header} from 'sicario'
import {Provider} from 'rebass'
import logo from '../../static/logo.svg'

const TemplateWrapper = ({children, data: {site: {siteMetadata: {header: {bg, btn}}}}}) => (
  <Provider theme={theme}>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
      ]}
    />
    <Header
      bg={bg}
      btn={{...Header.defaultProps.btn, ...btn}}
      logo={{...Header.defaultProps.logo, logoUrl: logo}}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: '100%',
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
          btn {
            btnFontSize
            btnText
            btnColor
            btnBg
          }
        }
      }
    }
  }
`
