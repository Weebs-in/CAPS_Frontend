const config = {
    // request codes
    REQUEST_SUCCESS: 1000,

    // user roles
    USER_ROLE_ADMIN: "sys:admin",
    USER_ROLE_STUDENT: "sys:student",
    USER_ROLE_LECTURER: "sys:lecturer",

    // toasts
    TOAST_SUCCESS_COLOR: "success",
    TOAST_SUCCESS_MSG: "Successful",
    TOAST_FAILED_COLOR: "danger",
    TOAST_FAILED_MSG: "Failed",

    // urls
    basicURL: 'http://localhost:3000', // this field is probably not going to be used
    loginUrl: '/auth/login',
    logoutUrl: '/auth/logout', // might not use
    // faculty
    getAllFaculties: '/faculty/getAllFaculties',
    createFaculty: '/faculty/saveFaculty',
    updateFaculty: '/faculty/updateFaculty',
    deleteFaculty: '/faculty/deleteFacultyById',
    // student
    getAllCoursesByStudentId: '/course_student/getAllCoursesByStudentId',
    getCourseById: '/course/getCourseById',
    getAllCourses: '/course/getAllCourses',
    getAllCoursesStudentCanEnroll: '/course_student/viewStudentCourseListEnrolment',
    studentEnrollCourse: '/course_student/studentEnrollCourse',
    viewStudentCourseGradeAndGPA: '/course_student/viewStudentCourseGradeAndGPA',
    // lecturer
    getCourseByLecturerId: '/course_lecturer/getCoursesByLecturerId',
    getStudentsByCourseId: '/course/getStudentsByCourseId',
    gradeStudentForCourse: '/course_lecturer/gradeStudentForCourse',
    getStudentPerformance: '/lecturer/getStudentPerformanceByLecturerId',
    lecturerEnrollCourse: '/course_lecturer/lecturerEnrollCourse',
    getEnrollCoursesByLecturerId: '/course_lecturer/getEnrollCoursesByLecturerId',
    // course
    getCourseLecturerSchedule: '/course/getCourseLecturerSchedule',
    getAllStudentOngoingCourseList: '/course_student/getAllStudentOngoingCourseList',
    removeStudentFromCourse: '/course_student/removeStudentFromCourse',
};

export default config;
