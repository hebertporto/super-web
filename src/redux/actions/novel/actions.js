import {
  NOVEL_GET_ALL
} from './types'

const createAction = (type, payload) => ({ type, payload })

export function fetchUser () {
  return (dispatch) => {
    dispatch(createAction(NOVEL_GET_ALL, []))
  }
}
