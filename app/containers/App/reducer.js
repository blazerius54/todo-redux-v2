import {
  RECEIVE_TASKS_REQUEST,
  RECEIVE_TASKS_SUCCESS,
  SEND_TASK_REQUEST,
  SEND_TASK_SUCCESS,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  EDIT_TASK,
  CHANGE_FILTER,
} from '../Main/consts';

import { ALL_TASKS } from '../../utils/constants';

export const initialState = {
  tasks: [],
  isLoading: false,
  filter: ALL_TASKS,
};

export function globalReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TASKS_REQUEST:
      return {
        ...state.task,
        isLoading: true,
      };
    case RECEIVE_TASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: [...action.tasks],
      };
    case SEND_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SEND_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.task],
        isLoading: false,
      };
    case DELETE_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: [
          ...state.tasks.slice(0, action.index),
          ...state.tasks.slice(action.index + 1),
        ],
      };
    case EDIT_TASK:
      const { title, description, priority, date } = action.task;
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, action.index),
          (state.tasks[action.index] = {
            title,
            description,
            priority,
            date,
          }),
          ...state.tasks.slice(action.index + 1),
        ],
      };
    case CHANGE_FILTER:
      console.log(action)
      return {
        ...state,
        filter: action.priority,
      };
    default:
      return state;
  }
}
