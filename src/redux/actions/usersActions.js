import { USERS } from '../constants';

const loadUsers = () => ({
  type: USERS.LOAD
});

const setUsers = posts => ({
  type: USERS.LOAD_SUCCESS,
  payload: posts
});

const addUser = userData => ({
  type: USERS.ADD_USER,
  payload: userData
});

const saveUser = userData => ({
  type: USERS.ADD_USER_SUCCESS,
  payload: userData
});

const setError = error => ({
  type: USERS.LOAD_FAIL,
  payload: error
});

const setUserAddError = error => ({
  type: USERS.ADD_USER_FAIL,
  payload: error
});

export { loadUsers, setError, setUsers, addUser, saveUser, setUserAddError };
