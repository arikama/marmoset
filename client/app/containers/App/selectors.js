import { createSelector } from 'reselect';
import { initialState } from './reducer';

const makeSelectError = () => createSelector(
  selectGlobal,
  globalState => globalState.error,
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  globalState => globalState.loading,
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;
  return (state) => {
    const routingState = state.get('route');
    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }
    return prevRoutingStateJS;
  };
};

const makeSelectWords = () => createSelector(
  selectGlobal,
  globalState => globalState.words
);

const selectGlobal = state => state.global || initialState;

export {
  makeSelectError,
  makeSelectLoading,
  makeSelectLocationState,
  makeSelectWords,
  selectGlobal,
};
