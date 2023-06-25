import React from 'react'
import {
    CButton, CCol,
    CContainer,
    CRow,
} from '@coreui/react'

const Logout = () => {

    const handleBackLogin = () => {
        window.location.href = "/#/login";
    }

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={6}>
                        <span className="clearfix">
                          <h1 className="float-start display-3 me-4">Bye</h1>
                          <h4 className="pt-3">You have successfully logged out</h4>
                          <p className="text-medium-emphasis float-start">
                            Until next time, bye!
                          </p>
                        </span>
                        <CButton color="info" style={{marginRight: 10 + 'px'}} onClick={handleBackLogin}>Back to login</CButton>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Logout
