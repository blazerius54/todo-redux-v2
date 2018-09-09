import { RECEIVE_TASKS_REQUEST, RECEIVE_TASKS_SUCCESS } from './consts';

export const requestTasks = () => ({
  type: RECEIVE_TASKS_REQUEST,
});

export const requestTaskSuccess = (tasks) => ({
  type: RECEIVE_TASKS_SUCCESS,
  tasks,
});