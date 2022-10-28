import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'

import {LinkName, IconContainer} from './styledComponent'

import './index.css'

const NavItems = props => {
  const {details} = props
  const {id, name, icon, link} = details

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {activeTab, onToggleActiveTab, isDarkTheme} = value

        const toggleTab = () => {
          onToggleActiveTab(id)
        }

        const active = activeTab === id ? 'active' : ''

        return (
          <li>
            <Link
              to={link}
              className={`medium-link ${active} `}
              onClick={toggleTab}
            >
              <IconContainer>{icon}</IconContainer>
              <LinkName theme={isDarkTheme}>{name}</LinkName>
            </Link>
          </li>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default NavItems
