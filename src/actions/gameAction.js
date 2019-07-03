import { createAction } from 'redux-starter-kit';

export const ADD_USER = 'ADD_USER';

export const addUser = createAction(ADD_USER);




export const DEL_USER = 'DEL_USER';

export const delUser = createAction(DEL_USER);