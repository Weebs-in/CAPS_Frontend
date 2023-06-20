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

const _navlecturer = [
  {
    component: CNavTitle,
    name: 'Course Centre',
  },
  {
    component: CNavGroup,
    name: 'Courses',
    to: '/admin',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'View My Courses',
        to: '/lecturer/courses',
      },
      {
        component: CNavItem,
        name: 'Course Enrolment',
        to: '/lecturer/enrolment',
      },
    ]
  },
  {
    component: CNavGroup,
    name: 'Grades',
    to: '/buttons',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Grade Course',
        to: '/lecturer/gradecourse',
      },
      {
        component: CNavItem,
        name: 'Student Performance',
        to: '/lecturer/student',
      },
    ],
  },
]

export default _navlecturer
