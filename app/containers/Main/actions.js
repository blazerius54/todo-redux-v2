import {
  RECEIVE_TASKS_REQUEST,
  RECEIVE_TASKS_SUCCESS,
  SEND_TASK_REQUEST,
  SEND_TASK_SUCCESS,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
} from './consts';

export const requestTasks = () => ({
  type: RECEIVE_TASKS_REQUEST,
});

export const requestTaskSuccess = tasks => ({
  type: RECEIVE_TASKS_SUCCESS,
  tasks,
});

export const addTaskRequest = task => ({
  type: SEND_TASK_REQUEST,
  task,
});

export const addTaskSuccess = task => ({
  type: SEND_TASK_SUCCESS,
  task,
});

export const deleteTaskRequest = index => ({
  type: DELETE_TASK_REQUEST,
  index,
});

export const deleteTaskSuccess = index => ({
  type: DELETE_TASK_SUCCESS,
  index,
})