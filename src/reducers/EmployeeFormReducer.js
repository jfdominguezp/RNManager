import {
  EMPLOYEE_CREATE,
  EMPLOYEE_UPDATE,
  EMPLOYEES_FETCH_SUCCES,
  EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEES_FETCH_SUCCES:
      return state;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
