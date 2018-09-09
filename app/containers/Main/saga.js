import { call, put, takeLatest, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { RECEIVE_TASKS_REQUEST, SEND_TASK_REQUEST } from './consts';
import {
  requestTasks,
  requestTaskSuccess,
  sendTaskRequest,
  sendTaskSuccess,
} from './actions';
import { initialState } from '../App/reducer';

function* tasksFlow() {
  yield call(() => requestTasks());
  yield call(delay, 500);
  yield put(requestTaskSuccess(initialState.get('tasks')));
}

function* sendTaskFlow(action) {
  yield call(() => sendTaskRequest(action.task));
  yield call(delay, 500);
  yield put(sendTaskSuccess());
}

export default function* tasksSaga() {
  yield all(
    [yield takeLatest(RECEIVE_TASKS_REQUEST, tasksFlow)],
    [yield SEND_TASK_REQUEST, sendTaskFlow],
  );
}
