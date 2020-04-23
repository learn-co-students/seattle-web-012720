import {
  ADD_STUDENT,
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  POST_STUDENT,
} from "./studentTypes";

export const fetchStudentSuccess = (students) => {
  return {
    type: FETCH_STUDENTS_SUCCESS,
    payload: students,
  };
};

export const fetchStudentFailure = (error) => {
  return {
    type: FETCH_STUDENTS_FAILURE,
    error: error,
  };
};

export const fetchStudentRequest = () => {
  return {
    type: FETCH_STUDENTS_REQUEST,
  };
};

export const postStudentSuccess = (newStudent) => {
  return {
    type: POST_STUDENT,
    payload: newStudent,
  };
};

export const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student,
  };
};

export const fetchStudents = () => {
  return (dispatch) => {
    dispatch(fetchStudentRequest());
    fetch("http://localhost:3000/students")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          dispatch(fetchStudentFailure(data.error));
        } else {
          dispatch(fetchStudentSuccess(data));
        }
      });
  };
};

export const postStudent = (newStudent) => {
  return (dispatch) => {
    dispatch(fetchStudentRequest());
    fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((res) => res.json())
      .then((student) => {
        if (student.error) {
          dispatch(fetchStudentFailure(student.error));
        } else {
          dispatch(postStudentSuccess(student));
        }
      });
  };
};
