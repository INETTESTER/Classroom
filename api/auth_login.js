import http from 'k6/http';
import { domain } from './env.js';
import { SharedArray } from 'k6/data'; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
const data = new SharedArray('id', function () { ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
    return JSON.parse(open('../file/data1.json')).id; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
});

export function auth_login(scenario) {
    const id = data[scenario.iterationInTest];
    const account_id = __VU + '' + __ITER
    const schoolIds = [
        '1010720001',
        '1010720002',
        '1010720003',
        '1010720004',
        '1010720005'
    ];

    const school_id = schoolIds[(__VU - 1) % schoolIds.length];
    //console.log(school_id);
    const url = `${domain}/api/auth/login`;

    const payload = JSON.stringify({
        school_id: school_id,
        account_id: '01a0a336-2698-7977-8bef-0fe5117e9360' + account_id,
        prefix: 'นาย',
        first_name: 'ทดสอบ',
        last_name: 'แซ่ตัง',
        birth_date: '1999-08-02',
        person_id: id,
        account_type: 'learner-id'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const response = http.post(url, payload, params);

    //console.log(response.body);

    return response;
}