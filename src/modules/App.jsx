import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Router from './Router'

import Header from './shared/components/layout/Header'

import './shared/style/app.css'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Router />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
