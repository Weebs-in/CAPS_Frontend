import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const WhatsNew = React.lazy(() => import('./components/home/whatsnew'))
const OurFaculties = React.lazy(() => import('./components/home/ourfaculties'))
const AllCourses = React.lazy(() => import('./components/home/allcourses'))

const LoginAdmin = React.lazy(() => import('./components/user-admin/LoginAdmin'))
const LoginLecturer = React.lazy(() => import('./components/user-lecturer/LoginLecturer'))
const LoginStudent = React.lazy(() => import('./components/user-student/LoginStudent'))

const CreateCourse = React.lazy(() => import('./components/user-admin/CreateCourse'))
const CreateLecturer = React.lazy(() => import('./components/user-admin/CreateLecturer'))
const CreateStudent = React.lazy(() => import('./components/user-admin/CreateStudent'))
const CourseEnrolment = React.lazy(() => import('./components/user-admin/CourseEnrolment'))
const CourseRecords = React.lazy(() => import('./components/user-admin/StudentRecords'))
const LectureRecords = React.lazy(() => import('./components/user-admin/LecturerRecords'))
const StudentRecords = React.lazy(() => import('./components/user-admin/StudentRecords'))

const GradeCourse = React.lazy(() => import('./components/user-lecturer/GradeCourse'))
const StudentPerformance = React.lazy(() => import('./components/user-lecturer/StudentPerformance'))
const ViewMyCourses = React.lazy(() => import('./components/user-lecturer/ViewCourses'))
const ViewEnrolment = React.lazy(() => import('./components/user-lecturer/ViewEnrolment'))

const CourseHistory = React.lazy(() => import('./components/user-student/CourseHistory'))
const CourseList = React.lazy(() => import('./components/user-student/CourseList'))
const EnrolCourse = React.lazy(() => import('./components/user-student/EnrolCourse'))
const ScheduleStu = React.lazy(() => import('./components/user-student/ScheduleStu'))
const StudentGrades = React.lazy(() => import('./components/user-student/StudentGrades'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact:true, element: Dashboard, name: 'Dashboard'},
  // example, can remove
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/admin/addcourse', name: 'Add Course', element: CreateCourse },
  { path: '/admin/addlecturer', name: 'Add Lecturer', element: CreateLecturer},
  { path: '/admin/addstudent', name: 'Add Student', element: CreateStudent},
  { path: '/admin/courseenrolment', name: 'Course Enrolment', element: CourseEnrolment},
  { path: '/admin/lecturerrecords', name: 'Lecturer Records', element: LectureRecords},
  { path: '/admin/studentrecords', name: 'Student Records', element: StudentRecords},
  { path: '/admin/courserecords', name: 'Course Records', element: CourseRecords},
  { path: '/lecturer/gradecourse', name: 'Grade Course', element: GradeCourse},
  { path: '/lecturer/student', name: 'Student Performance', element: StudentPerformance},
  { path: '/lecturer/courses', name: 'View My Courses', element: ViewMyCourses},
  { path: '/lecturer/enrolment', name: 'View Enrolment', element: ViewEnrolment},
  { path: '/student/enrol', name: 'Enrol Course', element: EnrolCourse},
  { path: '/student/courselist', name: 'My Courses', element: CourseList},
  { path: '/student/history', name: 'Course History', element: CourseHistory},
  { path: '/student/viewcourse', name: 'Schedule', element: ScheduleStu},
  { path: '/student/grades', name: 'Grades', element: StudentGrades},
  { path: '/login/admin', name: 'Adminstrator Login', element: LoginAdmin},
  { path: '/login/lecturer', name: 'Lecturer Login', element: LoginLecturer},
  { path: '/login/student', name: 'Student Login', element: LoginStudent},
  { path: '/home/whatsnew', name: 'What\'s New', element: WhatsNew},
  { path: '/home/ourfaculties', name: 'Our Faculties', element: OurFaculties},
  { path: '/home/allcourses', name: 'All Courses', element: AllCourses},
]

export default routes
