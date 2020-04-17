import { createStore } from 'redux';
import studentReducer from './student/studentReducer';

const store = createStore(studentReducer);

export default store;