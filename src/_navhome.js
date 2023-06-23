
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

const _navhome = [
    {
        component: CNavTitle,
        name: 'Navigation',
    },
    {
        component: CNavGroup,
        name: 'About',
        to: '/base',
        icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'What\'s New',
                to: '/home/whats-new',
            },
            {
                component: CNavItem,
                name: 'Our Faculties',
                to: '/home/our-faculties',
            },
        ]
    },
    {
        component: CNavItem,
        name: 'All Courses',
        to: '/home/all-courses',
        icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    },
]

export default _navhome
