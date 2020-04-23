import { ADD_LAB } from "./labTypes";

export const addLab = (lab) => {
  return {
    type: ADD_LAB,
    payload: lab,
  };
};
