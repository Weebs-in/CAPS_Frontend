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
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

function TestCreate() {
    return (
        <div className="bg-light min-vh-70 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={8}>
                        <CCardGroup>
                            <CCard className="p-4" style={{ width: '50%' }}>
                                <CCardBody>
                                    <CForm>
                                        <h1>Add New Course</h1>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupText>
                                                Code:
                                            </CInputGroupText>
                                            <CFormInput placeholder="Course Code" autoComplete="coursecode" />
                                        </CInputGroup>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupText>
                                                Name:
                                            </CInputGroupText>
                                            <CFormInput placeholder="Course Name" autoComplete="coursename" />
                                        </CInputGroup>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupText>
                                                Capacity:
                                            </CInputGroupText>
                                            <CFormInput placeholder="Course Capacity" autoComplete="coursecapacity" />
                                        </CInputGroup>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupText>
                                                Faculty:
                                            </CInputGroupText>
                                            <CFormInput placeholder="Faculty" autoComplete="faculty" />
                                        </CInputGroup>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupText>
                                                Credits:
                                            </CInputGroupText>
                                            <CFormInput placeholder="Faculty" autoComplete="faculty" />
                                        </CInputGroup>
                                        <CRow>
                                            <CCol xs={6}>
                                                {/*add onClick={login} when input login function*/}
                                                <CButton color="primary" className="px-4">
                                                    Add
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default TestCreate;
