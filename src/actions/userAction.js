import { createAction } from 'redux-starter-kit';
import Service from '../service'



// добавление пользователя
export const ADD_USER = 'ADD_USER';

export const addUser = createAction(ADD_USER);


// удаление пользователя
export const DEL_USER = 'DEL_USER';

export const delUser = createAction(DEL_USER);


//получение списка пользователей
export const GET_ALL_USERS =  'GET_ALL_USERS';


export const getAllUsers = createAction(GET_ALL_USERS);
