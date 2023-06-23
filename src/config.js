const config = {
    // request codes
    REQUEST_SUCCESS: 1000,

    // toasts
    TOAST_SUCCESS_COLOR: "success",
    TOAST_SUCCESS_MSG: "Successful",
    TOAST_FAILED_COLOR: "danger",
    TOAST_FAILED_MSG: "Failed",

    // urls
    basicURL: 'http://localhost:3001', // this field is probably not going to be used
    // course
    getAllCourses: '/course/getAllCourses',
    getCourseById: '/course/getCourseById',
    getCoursesByFacultyId: '/course/getCoursesByFacultyId',
    createCourse: '/course/saveCourse',
    updateCourse: '/course/updateCourse',
    deleteCourse: '/course/deleteCourseById',
    // faculty
    getAllFaculties: '/faculty/getAllFaculties',
    getFacultyById: '/faculty/getFacultyById',
    createFaculty: '/faculty/saveFaculty',
    updateFaculty: '/faculty/updateFaculty',
    deleteFaculty: '/faculty/deleteFacultyById',
    // lecturer
    getAllLecturers: '/lecturer/getAllLecturers',
    getLecturerById: '/lecturer/getLecturerById',
    getLecturerByFacultyId: '/lecturer/getLecturerByFacultyId',
    createLecturer: '/lecturer/saveLecturer',
    updateLecturer: '/lecturer/updateLecturer',
    deleteLecturer: '/lecturer/deleteLecturerById',
    // student
    getAllStudents: '/student/getAllStudents',
    getStudentById: '/student/getStudentById',
    getStudentsByFacultyId: '/student/getStudentByFacultyId',
    createStudent: '/student/saveStudent',
    updateStudent: '/student/updateStudent',
    deleteStudent: '/student/deleteStudentById',
    // course_lecturer
    lecturerEnrollCourse: '/course_lecturer/LecturerEnrollCourse',
    removeLecturerFromCourse: '/course_lecturer/removeLecturerFromCourse',
    inputScoreForTheCourse: '/course_lecturer/inputScoreForTheCourse',
    // course_schedule
    createScheduleByCourse: '/course_schedule/createScheduleByCourse',
    removeScheduleByCourse: '/course_schedule/removeScheduleByCourse',
    // course_student
    studentEnrollCourse: '/course_student/studentEnrollCourse',
    removeStudentFromCourse: '/course_student/removeStudentFromCourse',
    getEnrollStudentForTheCourse: '/course_student/getEnrollStudentForTheCourse',
    // schedule
    getAllSchedule: '/schedule/getAllSchedule',
    getScheduleById: '/schedule/getScheduleById',
    deleteScheduleById: '/schedule/deleteScheduleById',
    saveSchedule: '/schedule/saveSchedule',
    updateSchedule: '/schedule/updateSchedule',
};

export default config;
