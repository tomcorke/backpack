import React from 'react'
import { IndexLink } from 'react-router'
import CssModules from 'react-css-modules'

import * as routes from '../../constants/routes'

import styles from './header.scss'

import BpkLink from './../../components/BpkLink'

const links = [
  { route: routes.ROUTE_ATOMS, children: 'Atoms' },
  { route: routes.ROUTE_MOLECULES, children: 'Molecules' },
  { route: routes.ROUTE_ORGANISMS, children: 'Organisms' }
]

const Header = () => (
  <header styleName='bpkdocs-header'>
    <nav styleName='bpkdocs-header__nav'>
      <IndexLink to={routes.ROUTE_HOME} styleName='bpkdocs-header__logo-link'>Backpack</IndexLink>
      <ul styleName='bpkdocs-header__nav-list'>
        {links.map((link = {}) => (
          <li key={link.route} styleName='bpkdocs-header__nav-list-item'>
            <BpkLink to={link.route}>
              {link.children}
            </BpkLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

export default CssModules(Header, styles)
