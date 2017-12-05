import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Router from './Router'

import Header from './shared/components/layout/Header'

import './shared/style/app.css'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <Col xs={12} md={12}>
              <Header />
            </Col>
            <Col mdOffset={1} xs={12} md={10}>
              <Router />
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    )
  }
}

export default App
