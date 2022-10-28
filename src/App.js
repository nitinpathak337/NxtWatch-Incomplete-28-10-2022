import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from './context/NxtWatchContext'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'

import './App.css'

// Replace your code here

const navItems = [
  {id: 'home', name: 'Home', icon: <AiFillHome size="24" />, link: '/'},
  {
    id: 'trending',
    name: 'Trending',
    icon: <HiFire size="24" />,
    link: '/trending',
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: <SiYoutubegaming size="24" />,
    link: '/gaming',
  },
  {
    id: 'savedVideos',
    name: 'Saved videos',
    icon: <MdPlaylistAdd size="24" />,
    link: '/saved-videos',
  },
]

class App extends Component {
  state = {isDarkTheme: false, activeTab: 'home'}

  onToggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  onToggleActiveTab = id => {
    this.setState({activeTab: id})
  }

  render() {
    const {isDarkTheme, activeTab} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          onToggleTheme: this.onToggleTheme,
          activeTab,
          onToggleActiveTab: this.onToggleActiveTab,
          navItems,
        }}
      >
        <Route exact path="/login" component={Login} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Trending} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
