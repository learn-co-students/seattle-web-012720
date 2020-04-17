import { ADD_STUDENT } from "./studentTypes";
 
const initialState = {
  students: [{studentName: "Jane"}],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    default:
      return state;
  }
};

export default studentReducer
