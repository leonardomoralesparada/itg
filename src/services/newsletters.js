import axios from 'axios';
import { API_URL } from '../config/constants';

const sendEmail = (data) => {
    return axios({
        url: API_URL,
        method: 'post',
        data,
    });
};

export default {
    sendEmail,
};