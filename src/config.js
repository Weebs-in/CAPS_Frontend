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
    getAllCourses: '/faculty/getAllCourses',
    createCourse: '/faculty/saveCourse',
    updateCourse: '/faculty/updateCourse',
    deleteCourse: '/faculty/deleteCourseById',
    // faculty
    getAllFaculties: '/faculty/getAllFaculties',
    createFaculty: '/faculty/saveFaculty',
    updateFaculty: '/faculty/updateFaculty',
    deleteFaculty: '/faculty/deleteFacultyById',
    // lecturer
    getAllLecturers: '/lecturer/getAllLecturers',
    createLecturer: '/lecturer/createLecturer',
    updateLecturer: '/lecturer/updateLecturer',
    deleteLecturer: '/lecturer/deleteLecturerById',
    // student
    getAllStudents: '/lecturer/getAllStudents',
    createStudent: '/lecturer/createStudent',
    updateStudent: '/lecturer/updateStudent',
    deleteStudent: '/lecturer/deleteStudentById',
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
