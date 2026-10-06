import http from 'k6/http';
import { domain2, token_student } from './env.js';

export function me() {
    const url = `${domain2}/api/auth/me`;

    const headers = {
        'Authorization': 'Bearer ' + token_student,
    };

    const response = http.get(url, {
        headers: headers,
    });

    //console.log(response.body);

    return response;
}