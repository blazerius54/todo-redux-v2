import { call, put, takeLatest, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { RECEIVE_TASKS_REQUEST, SEND_TASK_REQUEST } from './consts';
import {
  requestTasks,
  requestTaskSuccess,
  sendTaskRequest,
  sendTaskSuccess,
} from './actions';
import tasks from '../../tasks';

function* tasksFlow() {
  yield call(() => requestTasks());
  yield call(delay, 1000);
  yield put(requestTaskSuccess(tasks));
}

function* sendTaskFlow(action) {
  yield call(() => sendTaskRequest(action.task));
  yield call(delay, 1000);
  yield put(sendTaskSuccess());
  yield tasksFlow();
}

export default function* tasksSaga() {
  yield all(
    [yield takeLatest(RECEIVE_TASKS_REQUEST, tasksFlow)],
    [yield SEND_TASK_REQUEST, sendTaskFlow],
  );
}
