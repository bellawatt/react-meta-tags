import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const MetaTags = ({children}) => (
  <React.Fragment>
    <Helmet>
      <meta charset='utf-8' />
      <meta name='og:type' content='website' />
    </Helmet>
    {children}
  </React.Fragment>
)

MetaTags.Title = ({children}) => (
  <Helmet>
    <title>{children}</title>
    <meta itemProp='name' content={children} />
    <meta name='twitter:title' content={children} />
    <meta name='og:title' content={children} />
  </Helmet>
)

MetaTags.Description = ({children}) => (
  <Helmet>
    <meta name='description' content={children} />
    <meta itemProp='description' content={children} />
    <meta name='twitter:description' content={children} />
    <meta name='og:description' content={children} />
  </Helmet>
)

MetaTags.Image = ({src}) => (
  <Helmet>
    <meta name='image' content={src} />
    <meta itemProp='image' content={src} />
    <meta name='twitter:image:src' content={src} />
    <meta name='og:image' content={src} />
  </Helmet>
)

MetaTags.propTypes = {
  children: PropTypes.node
}

MetaTags.Title.propTypes = {
  children: PropTypes.string.isRequired
}

MetaTags.Description.propTypes = {
  children: PropTypes.string.isRequired
}

MetaTags.Image.propTypes = {
  src: PropTypes.string.isRequired
}

export default MetaTags
