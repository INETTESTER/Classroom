import http from 'k6/http';
import { domain, token } from './env.js';

export function byInviteCode() {
    const schoolIds = [
        '1010720001',
        '1010720002',
        '1010720003',
        '1010720004',
        '1010720005'
    ];

    const school_id = schoolIds[(__VU - 1) % schoolIds.length];

    const url = `${domain}/api/class/byInviteCode`;

    const payload = JSON.stringify({
        school_id: school_id,
        invite_code: 'tcxiydjk'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };

    const response = http.post(url, payload, params);

    //console.log(response.body);

    return response;
}