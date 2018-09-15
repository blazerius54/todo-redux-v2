import {
  RECEIVE_TASKS_REQUEST,
  RECEIVE_TASKS_SUCCESS,
  SEND_TASK_REQUEST,
  SEND_TASK_SUCCESS,
} from './consts';

export const requestTasks = () => ({
  type: RECEIVE_TASKS_REQUEST,
});

export const requestTaskSuccess = tasks => ({
  type: RECEIVE_TASKS_SUCCESS,
  tasks,
});

export const sendTaskRequest = task => ({
  type: SEND_TASK_REQUEST,
  task,
});

export const sendTaskSuccess = () => ({
  type: SEND_TASK_SUCCESS,
});
