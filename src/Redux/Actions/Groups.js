import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getGroups = () => async (dispatch) => {
  try {
    const { data } = await api.fetchGroups();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createGroups = (group) => async (dispatch) => {
  try {
    const { data } = await api.createGroups(group);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateGroups = (id, group) => async (dispatch) => {
  try {
    const { data } = await api.updateGroups(id, group);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deleteGroup = (id) => async (dispatch) => {
  try {
    await await api.deleteGroups(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
