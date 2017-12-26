import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReduxToastr from 'react-redux-toastr'
import { connect } from 'react-redux'
import { AppBar } from 'material-ui'

import SectionFullWidth from './../grid/SectionFullWidth'
import LoggedMenu from './header/LoggedMenu'

import {
  signOut
} from './../../../../redux/actions/auth/actions'

import './../../style/header.css'

class Header extends Component {
  render () {
    const { logged } = this.props
    return (
      <SectionFullWidth>
        <AppBar
          title='Super Web'
          className='nav-main'
          showMenuIconButton={false}
          iconElementRight={logged ? <LoggedMenu /> : <LoggedMenu />}
        />
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar />
      </SectionFullWidth>
    )
  }
}

Header.propTypes = {
  logged: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    logged: state.auth.logged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
