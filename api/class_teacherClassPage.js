import http from 'k6/http';
import { domain, token } from './env.js';

export function class_teacherClassPage() {
    const schoolIds = [
        '1010720001',
        '1010720002',
        '1010720003',
        '1010720004',
        '1010720005'
    ];

    const school_id = schoolIds[(__VU - 1) % schoolIds.length];

    const url = `${domain}/api/class/teacherClassPage`;

    const payload = JSON.stringify({
        school_id: school_id,
        class_id: '1'
    });

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    };

    const response = http.post(url, payload, params);

    //console.log(response.body);

    return response;
}