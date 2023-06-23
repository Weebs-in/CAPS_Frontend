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
        to: '/admin/course-records',
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
        to: '/admin/lecturer-records',
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
        name: 'Student Records',
        to: '/admin/student-records',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Faculties',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Faculty Records',
        to: '/admin/faculty-records',
      },
    ],
  },
]

export default _navadmin
