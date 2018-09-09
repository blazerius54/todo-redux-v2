import { call, put, takeLatest, all } from 'redux-saga/effects';
import { RECEIVE_TASKS_REQUEST } from './consts';
import { requestTasks, requestTaskSuccess } from './actions';
import { initialState } from '../App/reducer';

function* tasksFlow(action) {
  console.log(action);
  yield call(() => requestTasks());
  yield put(requestTaskSuccess(initialState.get('tasks')));
}

export default function* tasksSaga() {
  yield all([yield takeLatest(RECEIVE_TASKS_REQUEST, tasksFlow)]);
}
