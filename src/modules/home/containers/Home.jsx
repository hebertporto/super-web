import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

import TableNovels from './../components/TableNovels'
import SectionCentered from './../../shared/components/grid/SectionCentered'

import If from './../../shared/components/helpers/If'

import {
  signOut
} from './../../../redux/actions/auth/actions'

import './../style/home.css'

class Home extends Component {
  render () {
    return (
      <SectionCentered>
        <Row>
          <Col xs={12} md={8}>
            <TableNovels />
          </Col>
          <Col xs={12} md={4}>
            <span>Menu Lateral</span>
          </Col>
        </Row>
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
