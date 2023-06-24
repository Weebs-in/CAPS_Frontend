const config = {
    // request codes
    REQUEST_SUCCESS: 1000,

    // toasts
    TOAST_SUCCESS_COLOR: "success",
    TOAST_SUCCESS_MSG: "Successful",
    TOAST_FAILED_COLOR: "danger",
    TOAST_FAILED_MSG: "Failed",

    // urls
    basicURL: 'http://localhost:3000', // this field is probably not going to be used
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
};

export default config;
