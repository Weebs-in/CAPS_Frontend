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
        to: '/courses/createcourse',
      },
      {
        component: CNavItem,
        name: 'Add Courses',
        to: '/courses/createcourse',
      },
      {
        component: CNavItem,
        name: 'Enrollment',
        to: '/courses/createcourse',
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
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Add Lecturer',
        to: '/buttons/button-groups',
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
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Student Records',
        to: '/forms/select',
      },
    ],
  },
]

export default _navadmin
