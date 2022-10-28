import {Component} from 'react'

import {AiFillTwitterCircle} from 'react-icons/ai'

import {FaFacebook, FaLinkedin} from 'react-icons/fa'

import NxtWatchContext from '../../context/NxtWatchContext'
import NavItems from '../NavItems/index'
import {
  OptionsContainer,
  Nav,
  UL,
  ContactUs,
  ContactPara,
  SocialMediaContainer,
} from './styledComponent'
import './index.css'

class MediumMenuOptions extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, navItems} = value

          return (
            <OptionsContainer theme={isDarkTheme}>
              <UL>
                {navItems.map(eachItem => (
                  <NavItems key={eachItem.id} details={eachItem} />
                ))}
              </UL>
              <Nav>
                <ContactUs theme={isDarkTheme}>CONTACT US</ContactUs>
                <SocialMediaContainer>
                  <FaFacebook fill="#00306e" size="34" />
                  <AiFillTwitterCircle fill="#3b82f6" size="38" />
                  <FaLinkedin fill="#4f46e5" size="34" />
                </SocialMediaContainer>
                <ContactPara theme={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactPara>
              </Nav>
            </OptionsContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default MediumMenuOptions
