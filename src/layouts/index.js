import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'
import emergence from 'emergence.js'
import Partic from '../components/Partic'

import './gatsrap.scss'
import 'animate.css/animate.css'
import 'prismjs/themes/prism-okaidia.css'
import 'devicon/devicon.min.css'

/**
 * Es el layout de el sitio para todas las paginas
 * emergence.init, carga las imagenes del profile
 */
class Template extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { location, children } = this.props
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    let particlePresentation

    if (location.pathname === rootPath) {
      particlePresentation = (
        <Partic
          style={{
            height: '20%',
          }}
        />
      )
    }
    return (
      <div>
        <SiteNavi title={siteMetadata.title} {...this.props} />
        {particlePresentation}
        {children()}
      </div>
    )
  }
}

export default Template
