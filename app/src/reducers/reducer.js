import { START, SUCCESS } from '../action/action'

const initialState = {
  list: [],
  isLoading: false
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload
      };

    default:
      return state;
  }
};
