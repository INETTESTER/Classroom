import http from 'k6/http';
import { domain2, token_teach } from './env.js';

export function today() {
    const url = `${domain2}/api/attendance/user/today`;

    const headers = {
        'Authorization': 'Bearer ' + token_teach,
    };

    const response = http.get(url, {
        headers: headers,
    });

    //console.log(response.body);

    return response;
}