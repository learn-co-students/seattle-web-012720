import { combineReducers } from 'redux';
import studentReducer from "./student/studentReducer";
import labReducer from "./lab/labReducer";

const rootReducer = combineReducers({
    student: studentReducer,
    lab: labReducer
})

export default rootReducer

