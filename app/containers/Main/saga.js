import { call, put, takeLatest, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { RECEIVE_TASKS_REQUEST, SEND_TASK_REQUEST, DELETE_TASK_REQUEST } from './consts';
import {
  requestTasks,
  requestTaskSuccess,
  addTaskRequest,
  addTaskSuccess,
  deleteTaskRequest,
  deleteTaskSuccess,
} from './actions';
import tasks from '../../tasks';

function* tasksFlow() {
  yield call(() => requestTasks());
  yield call(delay, 1000);
  yield put(requestTaskSuccess(tasks));
}

function* sendTaskFlow(action) {
  yield call(() => addTaskRequest(action.task));
  yield call(delay, 1000);
  yield put(addTaskSuccess(action.task));
}

function* deleteTaskFlow(action) {
  yield call(() => deleteTaskRequest(action.index));
  yield call(delay, 1000);
  yield put(deleteTaskSuccess(action.index));
}

export default function* tasksSaga() {
  yield all(
    [yield takeLatest(RECEIVE_TASKS_REQUEST, tasksFlow)],
    [yield takeLatest(SEND_TASK_REQUEST, sendTaskFlow)],
    [yield takeLatest(DELETE_TASK_REQUEST, deleteTaskFlow)],
  );
}
