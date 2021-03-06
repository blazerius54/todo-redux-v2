import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

const selectGlobal = state => state.get('global');

const makeSelectTasks = () =>
  createSelector(selectGlobal, globalState => globalState.tasks);

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.isLoading);

export { makeSelectLocation, makeSelectTasks, makeSelectLoading };
