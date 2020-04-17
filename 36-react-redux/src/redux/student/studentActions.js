import { ADD_STUDENT } from './studentTypes';

export const addStudent = student => {
    return {
        type: ADD_STUDENT,
        payload: student
    }
}