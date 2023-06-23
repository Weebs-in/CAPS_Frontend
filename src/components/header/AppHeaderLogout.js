import React from 'react'
import { NavLink } from 'react-router-dom';
import {
    CAvatar,
    CBadge,
    CDropdown,
    CDropdownDivider,
    CDropdownHeader,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CNavItem,
} from '@coreui/react'
import {
    cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const AppHeaderLogout = () => {
    return (
        <CDropdown variant="nav-item">
            <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
                <CNavItem>Log In</CNavItem>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownHeader className="bg-light fw-semibold py-2">Login Type</CDropdownHeader>
                <CDropdownItem to="/login/admin" component={NavLink}>
                    <CIcon icon={cilUser} className="me-2" />
                    Administrator
                </CDropdownItem>
                <CDropdownItem to="/login/lecturer" component={NavLink}>
                    <CIcon icon={cilUser} className="me-2" />
                    Lecturer
                </CDropdownItem>
                <CDropdownItem to="/login/student" component={NavLink}>
                    <CIcon icon={cilUser} className="me-2" />
                    Student
                </CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    )
}

export default AppHeaderLogout
