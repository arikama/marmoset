import {
  SET_WORDS,
} from '../actions'

const init = {
  words: [],
}

export default (state = init, action) => {
  switch (action.type) {
    case SET_WORDS: {
      return {
        ...state,
        words: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
