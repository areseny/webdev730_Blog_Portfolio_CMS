import { FETCH_HOME } from '../constants';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_HOME.SUCCESS:
      return action.payload.home;
    
    case FETCH_HOME.FAILURE:
      return { ...state, errorMessage: action.payload.errorMessage };
    
    default:
      return state;  
  }
}