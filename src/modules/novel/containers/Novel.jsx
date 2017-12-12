import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SectionCentered from './../../shared/components/grid/SectionCentered'
import FormNovel from './../components/FormNovel'

import {
  signOut
} from './../../../redux/actions/auth/actions'

import './../style/novel.css'

class Novel extends Component {
  render () {
    return (
      <SectionCentered>
        <FormNovel />
      </SectionCentered>
    )
  }
}

Novel.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Novel)
