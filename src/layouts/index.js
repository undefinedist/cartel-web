import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {Header} from 'sicario'
import {Provider} from 'rebass'
import logoSrc from '../../static/logo.svg'

const TemplateWrapper = ({children, data}) => {
  const {theme, title, header} = data.site.siteMetadata
  const {bg, logoWrapper, btnText, btnWrapper, btn} = header
  const defaultProps = Header.defaultProps

  return (
    <Provider theme={theme}>
      <Helmet
        title={title}
        meta={[
          {name: 'description', content: 'Sample'},
          {name: 'keywords', content: 'sample, something'},
        ]}
      />
      <Header
        bg={bg}
        logoSrc={logoSrc}
        logoWrapper={{...defaultProps.logoWrapper, ...logoWrapper}}
        btnText={btnText}
        btnWrapper={{...defaultProps.btnWrapper, ...btnWrapper}}
        btn={{...defaultProps.btn, ...btn}}
      />
      <div>{children()}</div>
    </Provider>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
        theme {
          breakpoints
          space
          fontSizes
          weights
          colors {
            primary
            secondary
          }
          radius
          font
          monospace
        }
        header {
          bg
          btnText
          btn {
            bg
          }
        }
      }
    }
  }
`
