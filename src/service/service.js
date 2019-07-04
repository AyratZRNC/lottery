import * as axios from 'axios';
// import {REST_URL} from "../const";

const REST_URL = './api/';
const getData = ({ data }) => data;

export const service = {
    getPerson: function () {
        return axios.get(`${REST_URL}users`).then(getData);
    },
};

