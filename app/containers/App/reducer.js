// Initial routing state
import { RECEIVE_TASKS_REQUEST, RECEIVE_TASKS_SUCCESS, SEND_TASK_REQUEST } from '../Main/consts';

export const initialState = {
  tasks: [],
  isLoading: false,
};

export function globalReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TASKS_REQUEST:
      return {
        ...state.task,
        isLoading: true,
      };
    case RECEIVE_TASKS_SUCCESS:
      console.log(action);
      return {
        ...state,
        tasks: [
          ...action.tasks,
        ]
      };
    case SEND_TASK_REQUEST:
      console.log(action.task);
      return {
        tasks: [
          ...state.tasks, action.task
        ]
      };
    default:
      return state;
  }
}
