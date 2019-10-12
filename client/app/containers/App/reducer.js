import produce from 'immer';
import {
  LOAD_RANDOM_WORDS,
  LOAD_RANDOM_WORDS_ERROR,
  LOAD_RANDOM_WORDS_SUCCESS,
} from './actions';

export const initialState = {
  error: false,
  loading: false,
  words: [],
};

const appReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case LOAD_RANDOM_WORDS:
      draft.error = false;
      draft.loading = true;
      break;

    case LOAD_RANDOM_WORDS_ERROR:
      draft.error = true;
      draft.loading = false;
      break;

    case LOAD_RANDOM_WORDS_SUCCESS:
      draft.error = false;
      draft.loading = false;
      draft.words = action.payload.words
      break;
  }
});

export default appReducer;
