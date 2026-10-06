import http from 'k6/http';
import { domain2, token } from './env.js';
import { SharedArray } from 'k6/data';
const data = new SharedArray('tokenx', function () {
    return JSON.parse(open('../file/token1.json'));
});

export function user_check(scenario) {
    const tokenx = data[scenario.iterationInTest].TOKEN;

    const url = `${domain2}/api/attendance/user/check`;

    //console.log(tokenx);

    const payload = JSON.stringify({
        action: 'CHECK_IN',
        latitude: 7.006154643504968,
        longitude: 100.50249237554662,
        accuracyMeters: 10
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenx
        }
    };

    const response = http.post(url, payload, params);

    //console.log(response.body);

    return response;
}