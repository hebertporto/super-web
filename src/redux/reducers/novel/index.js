import {
  NOVEL_GET_ALL
} from './../../actions/user/types'

import * as novel from './reducers'

const INITIAL_STATE = {
  novels: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOVEL_GET_ALL:
      return novel.allNovels(state, action)
    default:
      return state
  }
}
