import http from 'k6/http';
import { domain, token } from './env.js';
import { SharedArray } from 'k6/data'; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
const data = new SharedArray('id', function () { ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
    return JSON.parse(open('../file/data1.json')).id; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
});

export function classStudents(scenario) {
    const id = data[scenario.iterationInTest];
    const person_id = __VU + '' + __ITER
    const schoolIds = [
        '1010720001',
        '1010720002',
        '1010720003',
        '1010720004',
        '1010720005'
    ];

    const school_id = schoolIds[(__VU - 1) % schoolIds.length];

    const url = `${domain}/api/class-students/`;

    const payload = JSON.stringify({
        school_id: school_id,
        class_id: '1',
        person_id: id
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