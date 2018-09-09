// Initial routing state
import {fromJS} from "immutable";

const initialState = fromJS({
  tasks: 'TASK',
});

export function globalReducer(state = initialState, action) {
  return state;
}
