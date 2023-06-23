import React, {useEffect, useRef, useState} from 'react'
import {
    CAlert,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol, CForm, CFormInput, CFormLabel, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow, CToast, CToastBody, CToaster, CToastHeader,
} from '@coreui/react'
import config from 'src/config.js';

const LecturerRecords = () => {
    // variables
    const [lecturers, setLecturers] = useState([]);
    const [selectedLecturerId, setSelectedLecturerId] = useState(null);
    const [name, setName] = useState('');
    // modal visibility
    const [visible, setVisible] = useState(false);
    const [visible_upd, setVisibleUpd] = useState(false);
    const [visible_Del, setVisibleDel] = useState(false);
    // form
    const formRef = useRef(null);
    // toast
    const [toast, addToast] = useState(0)
    const toaster = useRef()

    useEffect(() => {
        fetchLecturers();
    }, []);

    const fetchLecturers = async () => {
        fetch(config.getAllLecturers, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }).then(response => response.json()).then(data => {
            const lecturersData = data.data;
            setLecturers(lecturersData);
        }).catch(error => {
            console.error('Error fetching lecturer data:', error);
        });
    };

    const resultToast = ({toastColor, toastMessage}) => (
        <CToast autohide={true} color={toastColor}>
            <CToastHeader closeButton>
                <div className="fw-bold me-auto">{toastMessage}</div>
                <small>now</small>
            </CToastHeader>
            <CToastBody>Your operation is {toastMessage}</CToastBody>
        </CToast>
    )

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const formDataObject = Object.fromEntries(formData.entries());
        try {
            const params = new URLSearchParams();
            params.append('lecturerName', formDataObject["lecturerName"].trim());
            const response = await fetch(config.createLecturer + `?${params.toString()}`, {
                method: 'POST'
            });
            if (response.ok) {
                const responseData = await response.json();
                if (responseData.code === config.REQUEST_SUCCESS) {
                    console.log('Lecturer created');
                    setVisible(false);
                    addToast(resultToast({
                        toastColor: config.TOAST_SUCCESS_COLOR,
                        toastMessage: config.TOAST_SUCCESS_MSG
                    }));
                    await fetchLecturers();
                } else {
                    console.error('Failed to create lecturer: ', responseData.msg);
                    addToast(resultToast({
                        toastColor: config.TOAST_FAILED_COLOR,
                        toastMessage: config.TOAST_FAILED_MSG
                    }));
                }
            } else {
                console.error('Failed to submit form data, request failed');
                addToast(resultToast({
                    toastColor: config.TOAST_FAILED_COLOR,
                    toastMessage: config.TOAST_FAILED_MSG
                }));
            }
        } catch (error) {
            console.error('Error while submitting form data:', error);
            addToast(resultToast({
                toastColor: config.TOAST_FAILED_COLOR,
                toastMessage: config.TOAST_FAILED_MSG
            }));
        }
    };

    const handleLecturerSelection = (lecturerId) => {
        console.log("selected id: " + lecturerId)
        setSelectedLecturerId(lecturerId);
        const selectedLecturer = lecturers.find((lecturer) => lecturer.lecturerId === lecturerId);
        setName(selectedLecturer.lecturerName);
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const params = new URLSearchParams();
            params.append('lecturerId', selectedLecturerId);
            params.append('newLecturerName', name.trim());
            const response = await fetch(config.updateLecturer + `?${params.toString()}`, {
                method: 'PUT'
            });
            if (response.ok) {
                const responseData = await response.json();
                if (responseData.code === config.REQUEST_SUCCESS) {
                    console.log('Lecturer updated');
                    setVisibleUpd(false);
                    addToast(resultToast({
                        toastColor: config.TOAST_SUCCESS_COLOR,
                        toastMessage: config.TOAST_SUCCESS_MSG
                    }));
                    await fetchLecturers();
                } else {
                    console.error('Failed to update faculty: ', responseData.msg);
                    addToast(resultToast({
                        toastColor: config.TOAST_FAILED_COLOR,
                        toastMessage: config.TOAST_FAILED_MSG
                    }));
                }
            } else {
                console.error('Failed to submit form data, request failed');
                addToast(resultToast({
                    toastColor: config.TOAST_FAILED_COLOR,
                    toastMessage: config.TOAST_FAILED_MSG
                }));
            }
        } catch (error) {
            console.error('Error while submitting form data:', error);
            addToast(resultToast({
                toastColor: config.TOAST_FAILED_COLOR,
                toastMessage: config.TOAST_FAILED_MSG
            }));
        }
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            const params = new URLSearchParams();
            params.append('facultyId', selectedFacultyId);
            const response = await fetch(config.deleteFaculty + `?${params.toString()}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                const responseData = await response.json();
                if (responseData.code === config.REQUEST_SUCCESS) {
                    console.log('Faculty deleted');
                    setVisibleDel(false);
                    addToast(resultToast({
                        toastColor: config.TOAST_SUCCESS_COLOR,
                        toastMessage: config.TOAST_SUCCESS_MSG
                    }));
                    await fetchFaculties();
                } else {
                    console.error('Failed to delete faculty: ', responseData.msg);
                    addToast(resultToast({
                        toastColor: config.TOAST_FAILED_COLOR,
                        toastMessage: config.TOAST_FAILED_MSG
                    }));
                }
            } else {
                console.error('Failed to submit form data, request failed');
                addToast(resultToast({
                    toastColor: config.TOAST_FAILED_COLOR,
                    toastMessage: config.TOAST_FAILED_MSG
                }));
            }
        } catch (error) {
            console.error('Error while submitting form data:', error);
            addToast(resultToast({
                toastColor: config.TOAST_FAILED_COLOR,
                toastMessage: config.TOAST_FAILED_MSG
            }));
        }
    };

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <h3 style={{marginTop: 10 + 'px'}}>Lecturer List</h3>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            Lecturer list within CAPS.
                        </p>
                        <CButton color="success"
                                 style={{marginRight: 10 + 'px', marginBottom: 20 + 'px'}}
                                 onClick={() => setVisible(!visible)}>Create</CButton>
                        {/*<CButton color="danger" style={{marginRight: 10 + 'px', marginBottom: 20 + 'px'}}>Batch*/}
                        {/*    Delete (under development)</CButton>*/}
                        <CTable hover>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">Lecturer Id</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Lecturer Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Options</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {lecturers.map(item => (
                                    <CTableRow key={item.lecturerId}>
                                        <CTableHeaderCell scope="row">{item.lecturerId}</CTableHeaderCell>
                                        <CTableDataCell>{item.lecturerName}</CTableDataCell>
                                        <CTableDataCell>
                                            <CButton color="info"
                                                     style={{marginRight: 10 + 'px'}}
                                                     onClick={() => {
                                                         setVisibleUpd(!visible_upd);
                                                         handleLecturerSelection(item.lecturerId)
                                                     }}>Update</CButton>
                                            <CButton color="danger"
                                                     style={{marginRight: 10 + 'px'}}
                                                     onClick={() => {
                                                         setVisibleDel(!visible_Del);
                                                         handleLecturerSelection(item.lecturerId)
                                                     }}>Delete</CButton>
                                        </CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
                <CModal alignment="center" size="lg" visible={visible} onClose={() => setVisible(false)}>
                    <CModalHeader>
                        <CModalTitle>Create a lecturer</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm ref={formRef}>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Lecturer Name</CFormLabel>
                                <CCol sm={10}>
                                    <CFormInput type="text" name="lecturerName"/>
                                </CCol>
                            </CRow>
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setVisible(false)}>
                            Close
                        </CButton>
                        <CButton color="success" onClick={handleSubmit}>Save</CButton>
                    </CModalFooter>
                </CModal>
                <CModal alignment="center" size="lg" visible={visible_upd} onClose={() => setVisibleUpd(false)}>
                    <CModalHeader>
                        <CModalTitle>Update a faculty</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Lecturer Name</CFormLabel>
                                <CCol sm={10}>
                                    <CFormInput type="text"
                                                value={name}
                                                onChange={(event) => setName(event.target.value)}/>
                                </CCol>
                            </CRow>
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setVisibleUpd(false)}>
                            Close
                        </CButton>
                        <CButton color="info" onClick={handleUpdate}>Update</CButton>
                    </CModalFooter>
                </CModal>
                <CModal alignment="center" size="lg" visible={visible_Del} onClose={() => setVisibleDel(false)}>
                    <CModalHeader>
                        <CModalTitle>Delete a lecturer</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CAlert color="danger">
                            WARNING: This is an irreversible and destructive operation
                        </CAlert>
                        <CForm>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Lecturer Id</CFormLabel>
                                <CCol sm={10}>
                                    <CFormInput type="text"
                                                value={selectedLecturerId}
                                                disabled={true}/>
                                </CCol>
                            </CRow>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Lecturer Name</CFormLabel>
                                <CCol sm={10}>
                                    <CFormInput type="text"
                                                value={name}
                                                disabled={true}/>
                                </CCol>
                            </CRow>
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setVisibleDel(false)}>
                            Close
                        </CButton>
                        <CButton color="danger" onClick={handleDelete}>Delete</CButton>
                    </CModalFooter>
                </CModal>
                <CToaster ref={toaster} push={toast} placement="top-end"/>
            </CCol>
        </CRow>
    )
}

export default LecturerRecords
