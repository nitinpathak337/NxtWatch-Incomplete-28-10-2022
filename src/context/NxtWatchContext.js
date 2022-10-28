import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: null,
  onToggleTheme: () => {},
  navItems: {},
  onToggleActiveTab: () => {},
  activeTab: 'home',
})

export default NxtWatchContext
