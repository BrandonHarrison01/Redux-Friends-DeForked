import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const FRIENDS_FETCH = 'FRIENDS_FETCH';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_FAIL = 'FRIENDS_FAIL';

export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    return axiosWithAuth()
        .post(`http://localhost:5000/api/login`, creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS })
            return true;
        })
        .catch(err => console.log(err.response))
}

export const getFriends = () => dispatch => {
    dispatch({ type: FRIENDS_FETCH })
    axiosWithAuth()
        .get(`http://localhost:5000/api/friends`)
        .then(res => {
            console.log(res);
            dispatch({ type: FRIENDS_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: FRIENDS_FAIL, payload: err.response.data.error }))
}
