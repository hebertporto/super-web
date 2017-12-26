import { toastr } from 'react-redux-toastr'
import {
  AUTH_LOGGED_STATUS,
  AUTH_RESET_PASSWORD
} from './types'
import {
  USER_SET_PROFILE
} from './../user/types'

import { firebase } from './../../../config/firebase'

const createAction = (type, payload) => ({ type, payload })

export function resetPassword (email) {
  return (dispatch) => {
    firebase.auth().sendPasswordResetEmail(email)
      .then((response) => {
        dispatch(createAction(AUTH_RESET_PASSWORD, true))
      })
  }
}

export function signinSignup (email, password) {
  return (dispatch) => {
    firebase.auth().fetchProvidersForEmail(email)
      .then((providers) => {
        if (providers.length === 0) {
          return firebase.auth().createUserWithEmailAndPassword(email, password)
        } else {
          return firebase.auth().signInWithEmailAndPassword(email, password)
        }
      })
      .then((user) => {
        console.log('USER')
        if (user && user.email) {
          dispatch([
            createAction(USER_SET_PROFILE, user),
            createAction(AUTH_LOGGED_STATUS, true)
          ])
        }
      })
      .catch((error) => {
        console.log('error', error)
      })
  }
}

export function signOut () {
  console.log('=:)')
  toastr.success('The title', 'The message')
  return (dispatch) => {
    firebase.auth().signOut()
      .then((response) => {
        dispatch(createAction(AUTH_LOGGED_STATUS, false))
      })
  }
}
