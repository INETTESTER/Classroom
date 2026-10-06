//=============================== import API =================================
import { sleep, scenario, error_check, options } from '../config/common.js';
export { options }; const cid = __ENV.cid || '1'; let response;
import { DownloadFile, GetProfile, PostProfile, PostProfile_2, PostProfile_3, UploadFile } from '../api/example.js';
import { auth_login } from '../api/auth_login.js';
import { byInviteCode } from '../api/byInviteCode.js';
import { classStudents } from '../api/classStudents.js';
import { classwork_calStudent } from '../api/classwork_calStudent.js';
import { class_studentClassPage } from '../api/class_studentClassPage.js';
import { submissions } from '../api/submissions.js';
import { classwork_byClassId } from '../api/classwork_byClassId.js';
import { classwork_calTeacher } from '../api/classwork_calTeacher.js';
import { class_dashboard_teacher } from '../api/class_dashboard_teacher.js';
import { class_dashboard_student } from '../api/class_dashboard_student.js';
import { class_teacherClassPage } from '../api/class_teacherClassPage.js';
import { classwork_grades } from '../api/classwork_grades.js';
import { me } from '../api/me.js';
import { time } from '../api/time.js';
import { locations } from '../api/locations.js';
import { today } from '../api/today.js';
import { student_today } from '../api/student_today.js';
import { student_check } from '../api/student_check.js';
import { user_check } from '../api/user_check.js';

//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  // ============== classroom =======================
  // response = auth_login(scenario)                    // 1
  // response = byInviteCode()                 // 2
  // response = classStudents(scenario)                 // 3 // เปลี่ยน cid ก่อนยิง
  // response = classwork_calStudent(scenario)         // 4
  // response = class_studentClassPage(scenario)       // 5
  // response = submissions(scenario)                  // 6
  // response = classwork_byClassId()           // 7
  //response = classwork_calTeacher(scenario)          // 8
  // response = class_dashboard_teacher(scenario)       // 9
  // response = class_dashboard_student(scenario)       // 10
  // response = class_teacherClassPage()       // 11
  // response = classwork_grades()             // 12

  // ============== clockin =======================
  response = me()                    // 1
  //response = time()                  // 2
  //response = locations()             // 3
  //response = today()                 // 4
  //response = student_today()         // 5
  //response = user_check(scenario)    // 6
  //response = student_check(scenario) // 7



  error_check(response);
  sleep(1)
}