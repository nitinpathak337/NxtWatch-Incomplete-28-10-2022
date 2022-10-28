import {Component} from 'react'

import NxtWatchContext from '../../context/NxtWatchContext'
import Navbar from '../Navbar/index'
import Banner from '../Banner/index'
import MediumMenuOptions from '../MediumMenuOptions/index'

import {
  ContentContainer,
  Content,
  VideoSearchContainer,
} from './styledComponent'

class Home extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Navbar />
              <ContentContainer>
                <MediumMenuOptions />
                <Content>
                  <Banner />
                  <VideoSearchContainer theme={isDarkTheme}>
                    <h1>Hello</h1>
                  </VideoSearchContainer>
                </Content>
              </ContentContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Home
