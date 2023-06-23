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

const Login = React.lazy(() => import('./components/home/Login'))
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
  { path: '/login/', exact:true, name: 'Log In', element: Login },
  { path: '/login/admin', name: 'Adminstrator Login', element: LoginAdmin},
  { path: '/login/lecturer', name: 'Lecturer Login', element: LoginLecturer},
  { path: '/login/student', name: 'Student Login', element: LoginStudent},
  { path: '/home/whatsnew', name: 'What\'s New', element: WhatsNew},
  { path: '/home/ourfaculties', name: 'Our Faculties', element: OurFaculties},
  { path: '/home/allcourses', name: 'All Courses', element: AllCourses},

  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
