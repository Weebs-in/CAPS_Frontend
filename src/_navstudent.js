import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilNotes,
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
        name: 'Enrol Course',
        to: '/student/enrol',
      },
      {
        component: CNavItem,
        name: 'Schedule',
        to: '/student/view-course',
      },
      {
        component: CNavItem,
        name: 'My Courses',
        to: '/student/course-list',
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
        to: '/student/history',
      },
      {
        component: CNavItem,
        name: 'Grades',
        to: '/student/grades',
      },
    ],
  },
]

export default _navstudent
