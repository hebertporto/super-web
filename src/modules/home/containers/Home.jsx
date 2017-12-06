import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import SectionCentered from './../../shared/components/grid/SectionCentered'

import If from './../../shared/components/helpers/If'
import { RESTRICTED_AREA, LOGIN } from './../../../config/utils/routes'
import {
  signOut
} from './../../../redux/actions/auth/actions'

import './../style/home.css'

class Home extends Component {
  render () {
    const { logged } = this.props
    return (
      <SectionCentered>
        <Row>
          <Col mdOffset={5} xs={12} md={4} className='home-login-box'>
            <Card>
              <CardHeader
                title='Login'
                titleStyle={{ textAlign: 'center' }}
              />
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                <div className='home'>
                  <span>Home</span>
                  <If test={!logged}>
                    <Link to={LOGIN}>LOGIN</Link><br />
                  </If>
                  <If test={logged}>
                    <button onClick={this.props.signOut}>Logout</button><br />
                  </If>
                  <Link to={RESTRICTED_AREA}>Restricted Area</Link>
                </div>
              </CardText>
              <CardActions>
                <FlatButton label='Action1' />
                <FlatButton label='Action2' />
              </CardActions>
            </Card>
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
