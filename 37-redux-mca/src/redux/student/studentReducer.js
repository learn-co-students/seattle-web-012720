import {
  ADD_STUDENT,
  POST_STUDENT,
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
} from "./studentTypes";

const initialState = {
  data: [],
  loading: false,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_STUDENT:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
      };
    case FETCH_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ADD_STUDENT:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default studentReducer;
