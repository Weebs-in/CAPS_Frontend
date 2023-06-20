import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _navadmin = [
  {
    component: CNavTitle,
    name: 'Record Management',
  },
  {
    component: CNavGroup,
    name: 'Courses',
    to: '/admin',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Course Records',
        to: '/admin/courserec',
      },
      {
        component: CNavItem,
        name: 'Add Courses',
        to: '/admin/addcourse',
      },
      {
        component: CNavItem,
        name: 'Enrolment',
        to: '/admin/course-enrolment',
      }
    ]
  },
  {
    component: CNavGroup,
    name: 'Lecturers',
    to: '/buttons',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Lecturer Records',
        to: '/admin/lecturerrecords',
      },
      {
        component: CNavItem,
        name: 'Add Lecturer',
        to: '/admin/addlecturer',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Students',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Student',
        to: '/admin/addstudent',
      },
      {
        component: CNavItem,
        name: 'Student Records',
        to: '/admin/studentrecords',
      },
    ],
  },
]

export default _navadmin
