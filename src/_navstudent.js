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

const _navstudent = [
  {
    component: CNavTitle,
    name: 'Course Centre',
  },
  {
    component: CNavGroup,
    name: 'Courses',
    to: '/base',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Course',
        to: '/admin/createcourse',
      },
      {
        component: CNavItem,
        name: 'Schedule',
        to: '/admin/createcourse',
      },
      {
        component: CNavItem,
        name: 'My Courses',
        to: '/admin/createcourse',
      },
    ]
  },
  {
    component: CNavGroup,
    name: 'Student Record',
    to: '/buttons',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Course History',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Grades',
        to: '/buttons/button-groups',
      },
    ],
  },
]

export default _navstudent
