import { SET_USER, CLEAR_USER } from './actionTypes';

export const setUser = (name) => {
    return {
        type: SET_USER,
        payload: name
    };
};

export const clearUser = () => {
    return {
        type: CLEAR_USER
    };
};
