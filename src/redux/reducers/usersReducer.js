import { USERS } from '../constants';

const usersReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case USERS.LOAD_SUCCESS:
      return action.payload.data;
    case USERS.LOAD_FAIL:
      return action.payload;
    case USERS.ADD_USER_SUCCESS:
      return (
        {
          ...state,
          data: [
            action.payload.data,
            ...state.data
          ]
        }
      );
    case USERS.ADD_USER_FAIL:
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
