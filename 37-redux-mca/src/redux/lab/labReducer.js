import { ADD_LAB } from "./labTypes";
import { ADD_STUDENT } from "../student/studentTypes"  

const intialState = {
    labs: []
}

const labReducer = (state = intialState, action) => {
  switch (action.type) {
    //   case ADD_STUDENT: 
    //   console.log("lab noticed a student action")
    //   console.log(action.payload)
    case ADD_LAB:
      return {
          ...state,
          labs: [...state.labs, action.payload]
      };
    default:
      return state;
  }
};

export default labReducer
