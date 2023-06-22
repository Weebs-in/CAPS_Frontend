import React from 'react'
import { Link } from 'react-router-dom'
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CTable,
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const ViewCourses = () => {
    const columns = [
        {
            key: 'id',
            label: 'No.',
            _props: { scope: 'col' },
        },
        {
            key: 'code',
            label: 'Course Code',
            _props: { scope: 'col' },
        },
        {
            key: 'name',
            label: 'Name',
            _props: { scope: 'col' },
        },
        {
            key: 'enrolment',
            label: 'Enrolment',
            _props: { scope: 'col' },
        },
    ]
    const items = [
        {
            id: 1,
            code: 'SA4101',
            name: 'Design',
            enrolment: '50',
            _props: { active: true },
            _cellProps: { id: { scope: 'row' } },
        },
        {
            id: 2,
            code: 'SA4102',
            name: 'Fundamentals of Programming in C#',
            enrolment: '56',
            _cellProps: { id: { scope: 'row' } },
        },
        {
            id: 3,
            code: 'SA4110',
            name: 'Machine Learning with Python',
            enrolment: '52',
            _cellProps: { id: { scope: 'row' } },
        },
    ]
    return (
        <div>
         <CContainer>
            <CRow>
                    {/*To change dynamically based on year*/}
                    <p>Current List of Courses</p>
            </CRow>
            <CTable striped responsive="{-sm|-md|-lg|-xl|-xxl}"
                columns={columns} items={items} />
         </CContainer>
        </div>
    )
};

export default ViewCourses;
