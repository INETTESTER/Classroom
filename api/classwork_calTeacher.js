import http from 'k6/http';
import { domain, token } from './env.js';

export function classwork_calTeacher() {
    const schoolIds = [
        '1010720001',
        '1010720002',
        '1010720003',
        '1010720004',
        '1010720005'
    ];

    const school_id = schoolIds[(__VU - 1) % schoolIds.length];

    const url = `${domain}/api/classwork/calTeacher`;

    const payload = JSON.stringify({
        school_id: school_id,
        person_id: '1469900472904'
    });

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    };

    const response = http.post(url, payload, params);

    console.log(response.body);

    return response;
}