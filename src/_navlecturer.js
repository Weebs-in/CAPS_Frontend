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
        name: 'View Courses Taught',
        to: '/courses/createcourse',
      },
      {
        component: CNavItem,
        name: 'Course Enrollment',
        to: '/courses/createcourse',
      },
      {
        component: CNavItem,
        name: 'Past Courses',
        to: '/courses/createcourse',
      }
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
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'View Student',
        to: '/buttons/button-groups',
      },
    ],
  },
]

export default _navlecturer
