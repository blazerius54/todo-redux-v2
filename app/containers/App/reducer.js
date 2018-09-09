// Initial routing state
import { fromJS } from 'immutable';
import { RECEIVE_TASKS_REQUEST, RECEIVE_TASKS_SUCCESS, SEND_TASK_REQUEST } from '../Main/consts';

export const initialState = fromJS({
  tasks: [2],
});

export function globalReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TASKS_REQUEST:
      return state;
    case RECEIVE_TASKS_SUCCESS:
      return state;
    case SEND_TASK_REQUEST:
      return state.set('tasks', [...state.get('tasks'), action.task]);
    default:
      return state;
  }
}
