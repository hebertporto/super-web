import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import history from './../../../config/utils/historyRouter'
import { Row, Col } from 'react-flexbox-grid'

import SectionCentered from './../../shared/components/grid/SectionCentered'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { FlatButton, TextField } from 'material-ui'

import {
  signinSignup
} from './../../../redux/actions/auth/actions'
import {
  HOME,
  FORGOT_PASSWORD
} from './../../../config/utils/routes'

import './../style/login.css'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.logged) {
      history.push(HOME)
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    console.log('submit', email, password)
    // this.props.signinSignup(email, password)
  }

  render () {
    const { email, password } = this.state
    return (
      <SectionCentered>
        <Row>
          <Col mdOffset={5} xs={12} md={4} className='login-box'>
            <Card>
              <CardHeader
                title='Login'
                style={{ textAlign: 'center', width: '100%' }}
              />
              <CardText>
                <TextField
                  hintText='email@email.com'
                  type='email'
                  name='email'
                  fullWidth
                  value={email}
                  onChange={this.handleChange}
                />
                <TextField
                  hintText='Your password'
                  type='password'
                  name='password'
                  fullWidth
                  value={password}
                  onChange={this.handleChange}
                />
              </CardText>
              <CardActions>
                <FlatButton
                  label='Submit'
                  backgroundColor="#D9D9D9"
                  hoverColor="#B8B8B8"
                  onClick={this.handleSubmit} />
              </CardActions>
            </Card>
          </Col>
        </Row>
      </SectionCentered>
    )
  }
}

Login.propTypes = {
  logged: PropTypes.bool
}

const mapStateToProps = (state, ownProps) => {
  return {
    logged: state.auth.logged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signinSignup: (email, password) => dispatch(signinSignup(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
