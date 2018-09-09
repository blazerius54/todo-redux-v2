// Initial routing state
import { fromJS } from 'immutable';
import { RECEIVE_TASKS_REQUEST, RECEIVE_TASKS_SUCCESS } from '../Main/consts';

export const initialState = fromJS({
  tasks: 'TASK',
});

export function globalReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TASKS_REQUEST:
      console.log(action);
      return state;
    case RECEIVE_TASKS_SUCCESS:
      console.log(action);
      return state;
    default:
      return state;
  }
}
