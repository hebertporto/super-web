import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppBar, IconButton } from 'material-ui'

import If from './../helpers/If'

import LoggedMenu from './header/LoggedMenu'
import DefaultMenu from './header/DefaultMenu'

import { RESTRICTED_AREA, LOGIN } from './../../../../config/utils/routes'
import {
  signOut
} from './../../../../redux/actions/auth/actions'

import './../../style/header.css'

class Header extends Component {
  render () {
    return (
      <AppBar
        title='Super Web'
        className='nav-main'
        showMenuIconButton={false}
        iconElementRight={this.props.logged ? <LoggedMenu /> : <DefaultMenu />}
      />
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
