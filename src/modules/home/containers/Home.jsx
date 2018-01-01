import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SectionCentered from './../../shared/components/grid/SectionCentered'
import TableNovels from './../components/TableNovels'
import SideMenu from './../components/SideMenu'

import {
  signOut
} from './../../../redux/actions/auth/actions'

import './../style/home.css'

class Home extends Component {
  render () {
    return (
      <SectionCentered>
        <SideMenu />
        <TableNovels />
      </SectionCentered>
    )
  }
}

Home.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
