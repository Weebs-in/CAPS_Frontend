import React, {useEffect, useRef, useState} from 'react'
import {
    CAlert,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol, CForm, CFormInput, CFormLabel, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow, CToast, CToastBody, CToaster, CToastHeader,
} from '@coreui/react'
import config from 'src/config.js';
import select from "../../views/forms/select/Select";

const CourseRecords = () => {
    // variables
    const [faculties, setFaculties] = useState([]);
    const [courses, setCourses] = useState([]);
    const [schedules, setSchedules] = useState([]);
    const [courseLecturers, setCourseLecturers] = useState([]);
    const [courseSchedules, setCourseSchedules] = useState([]);
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    const [selectedCourseScheduleId, setSelectedCourseScheduleId] = useState(null);
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [credits, setCredits] = useState('');
    const [capacity, setCapacity] = useState('');
    const [scheduleId, setScheduleId] = useState('');
    const [courseFacultyId, setCourseFacultyId] = useState({ facultyId: '' });
    const [courseScheduleId, setCourseScheduleId] = useState({scheduleId:''});
    const [day, setDay] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    // modal visibility
    const [visible, setVisible] = useState(false);
    const [visible_upd, setVisibleUpd] = useState(false);
    const [visible_Del, setVisibleDel] = useState(false);
    const [visible_sch, setVisibleSch] = useState(false);

    // form
    const formRef = useRef(null);
    // toast
    const [toast, addToast] = useState(0)
    const toaster = useRef()


    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        fetch(config.getAllCourses, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }).then(response => response.json()).then(data => {
            const coursesData = data.data;
            setCourses(coursesData);
        }).catch(error => {
            console.error('Error fetching course data:', error);
        });
    };

    useEffect(() => {
        fetchFaculties();
    }, []);

    const fetchFaculties = async () => {
        fetch(config.getAllFaculties, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }).then(response => response.json()).then(data => {
            const facultiesData = data.data;
            setFaculties(facultiesData);
        }).catch(error => {
            console.error('Error fetching faculty data:', error);
        });
    };

    useEffect(() => {
        fetchSchedules();
    }, []);

    const fetchSchedules = async () => {
        fetch(config.getAllSchedule, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }).then(response => response.json()).then(data => {
            const scheduleData = data.data;
            setSchedules(scheduleData);
        }).catch(error => {
            console.error('Error fetching course data:', error);
        });
    };

    useEffect(() => {
        fetchCourseLecturerSchedule(courseId);
    }, []);

    const fetchCourseLecturerSchedule = async (courseId) => {
        const params = new URLSearchParams();
        params.append('courseId', courseId);
        await fetch(config.getCourseLecturerSchedule + `?${params.toString()}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }).then(response => response.json()).then(data => {
            const courseLecturersData = data.data.lecturers;
            const courseSchedulesData = data.data.schedules;
            console.log(courseLecturersData);
            console.log(courseSchedulesData);
            setCourseLecturers(courseLecturersData);
            setCourseSchedules(courseSchedulesData);
        }).catch(error => {
            console.error('Error fetching course data:', error);
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
        console.log(formDataObject);
        try {
            const response = await fetch(config.createCourse, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    courseCode: formDataObject["courseCode"].trim(),
                    courseName: formDataObject["courseName"].trim(),
                    courseCredits: formDataObject["courseCredits"].trim(),
                    courseCapacity: formDataObject["courseCapacity"].trim(),
                    faculty: {
                        facultyId: formDataObject["faculty.facultyId"].trim()
                    }
                }),
            });
            if (response.ok) {
                const responseData = await response.json();
                if (responseData.code === config.REQUEST_SUCCESS) {
                    console.log('Course created');
                    setVisible(false);
                    addToast(resultToast({
                        toastColor: config.TOAST_SUCCESS_COLOR,
                        toastMessage: config.TOAST_SUCCESS_MSG
                    }));
                    await fetchCourses();
                } else {
                    console.error('Failed to create faculty: ', responseData.msg);
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
    const handleCourseSelection = (courseId) => {
        console.log("selected id: " + courseId)
        setSelectedCourseId(courseId);
        const selectedCourse = courses.find((course) => course.courseId === courseId);
        setCode(selectedCourse.courseCode);
        setName(selectedCourse.courseName);
        setCredits(selectedCourse.courseCredits);
        setCapacity(selectedCourse.courseCapacity);
        setCourseFacultyId(selectedCourse.faculty.facultyId);
    };

    const handleCourseScheduleSelection = (courseScheduleId) => {
        console.log("selected id: " + courseScheduleIdId)
        setSelectedCourseScheduleId(courseScheduleId);
        // const selectedCourseSchedule = courseSchedules.find((courseSchedule) => courseSchedule.courseScheduleId === courseScheduleId);
        // setCode(selectedCourse.courseCode);
        // setName(selectedCourse.courseName);
        // setCredits(selectedCourse.courseCredits);
        // setCapacity(selectedCourse.courseCapacity);
        // setCourseFacultyId(selectedCourse.faculty.facultyId);
    };


    const handleUpdate = async (event) => {
        event.preventDefault();
        // to check JSON content in console
        console.log('Request Body:', JSON.stringify({
            courseId: selectedCourseId,
            courseCode: code.trim(),
            courseName: name.trim(),
            courseCredits: credits,
            courseCapacity: capacity,
            faculty: {
                facultyId: courseFacultyId.trim()
            }
        }));
        try {
            const response = await fetch(config.updateCourse, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    courseId: selectedCourseId,
                    courseCode: code.trim(),
                    courseName: name.trim(),
                    courseCredits: credits,
                    courseCapacity: capacity,
                    faculty: {
                        facultyId: courseFacultyId.trim()
                    },
                }),
            });
            if (response.ok) {
                const responseData = await response.json();
                if (responseData.code === config.REQUEST_SUCCESS) {
                    console.log('Faculty updated');
                    setVisibleUpd(false);
                    addToast(resultToast({
                        toastColor: config.TOAST_SUCCESS_COLOR,
                        toastMessage: config.TOAST_SUCCESS_MSG
                    }));
                    await fetchCourses();
                } else {
                    console.error('Failed to update course: ', responseData.msg);
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
            params.append('courseId', selectedCourseId);
            const response = await fetch(config.deleteCourse + `?${params.toString()}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                const responseData = await response.json();
                if (responseData.code === config.REQUEST_SUCCESS) {
                    console.log('Course deleted');
                    setVisibleDel(false);
                    addToast(resultToast({
                        toastColor: config.TOAST_SUCCESS_COLOR,
                        toastMessage: config.TOAST_SUCCESS_MSG
                    }));
                    await fetchCourses();
                } else {
                    console.error('Failed to delete course: ', responseData.msg);
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

    const handleSubmitSchedule = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const formDataObject = Object.fromEntries(formData.entries());
        console.log(selectedCourseId);
        console.log(formDataObject);
        try {
            const response = await fetch(config.createScheduleByCourse, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    scheduleId: scheduleId,
                    courseId: selectedCourseId,
                }),
            });
            if (response.ok) {
                const responseData = await response.json();
                if (responseData.code === config.REQUEST_SUCCESS) {
                    console.log('Course-Schedule created');
                    setVisible(false);
                    addToast(resultToast({
                        toastColor: config.TOAST_SUCCESS_COLOR,
                        toastMessage: config.TOAST_SUCCESS_MSG
                    }));
                    await fetchCourses();
                } else {
                    console.error('Failed to create course-schedule: ', responseData.msg);
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

    // deleting course-schedule function
    const handleDeleteSchedule = async (event) => {
        event.preventDefault();
        try {
            const params = new URLSearchParams();
            params.append('courseScheduleId', selectedCourseScheduleId);
            const response = await fetch(config.removeScheduleByCourse + `?${params.toString()}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                const responseData = await response.json();
                if (responseData.code === config.REQUEST_SUCCESS) {
                    console.log('Course deleted');
                    setVisibleDel(false);
                    addToast(resultToast({
                        toastColor: config.TOAST_SUCCESS_COLOR,
                        toastMessage: config.TOAST_SUCCESS_MSG
                    }));
                    await fetchCourses();
                } else {
                    console.error('Failed to delete course: ', responseData.msg);
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
                        <h3 style={{marginTop: 10 + 'px'}}>Course List</h3>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            Course list within CAPS.
                        </p>
                        <CButton color="success"
                                 style={{marginRight: 10 + 'px', marginBottom: 20 + 'px'}}
                                 onClick={() => setVisible(!visible)}>Create</CButton>
                        {/*<CButton color="danger" style={{marginRight: 10 + 'px', marginBottom: 20 + 'px'}}>Batch*/}
                        {/*    Delete (under development)</CButton>*/}
                        <CTable hover>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">Id</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Course Code</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Course Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Credits</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Capacity</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Vacancy</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Faculty</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Options</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {courses.map(item => (
                                    <CTableRow key={item.courseId}>
                                        <CTableHeaderCell scope="row">{item.courseId}</CTableHeaderCell>
                                        <CTableDataCell>{item.courseCode}</CTableDataCell>
                                        <CTableDataCell>{item.courseName}</CTableDataCell>
                                        <CTableDataCell>{item.courseCredits}</CTableDataCell>
                                        <CTableDataCell>{item.courseCapacity}</CTableDataCell>
                                        <CTableDataCell>{item.courseVacancy}</CTableDataCell>
                                        <CTableDataCell>{item.faculty.facultyName}</CTableDataCell>
                                        <CTableDataCell>
                                            <CButton color="warning"
                                                     style={{marginRight: 10 + 'px'}}
                                                     onClick={() => {
                                                         setVisibleSch(!visible_sch);
                                                         handleCourseSelection(item.courseId)
                                                     }}>Schedule</CButton>
                                            <CButton color="info"
                                                     style={{marginRight: 10 + 'px'}}
                                                     onClick={() => {
                                                         setVisibleUpd(!visible_upd);
                                                         handleCourseSelection(item.courseId)
                                                     }}>Update</CButton>
                                            <CButton color="danger"
                                                     style={{marginRight: 10 + 'px'}}
                                                     onClick={() => {
                                                         setVisibleDel(!visible_Del);
                                                         handleCourseSelection(item.courseId)
                                                     }}>Delete</CButton>
                                        </CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>

                {/*Modal for creating course*/}
                <CModal alignment="center" size="lg" visible={visible} onClose={() => setVisible(false)}>
                    <CModalHeader>
                        <CModalTitle>Create a course</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm ref={formRef}>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Course Code</CFormLabel>
                                <CCol sm={10}>
                                    <CFormInput type="text" name="courseCode"/>
                                </CCol>
                            </CRow>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Course Name</CFormLabel>
                                <CCol sm={10}>
                                    <CFormInput type="text" name="courseName"/>
                                </CCol>
                            </CRow>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Course Credits</CFormLabel>
                                <CCol sm={10}>
                                    <CFormInput type="text" name="courseCredits"/>
                                </CCol>
                            </CRow>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Course Capacity</CFormLabel>
                                <CCol sm={10}>
                                    <CFormInput type="text" name="courseCapacity"/>
                                </CCol>
                            </CRow>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Faculty</CFormLabel>
                                <CCol sm={10}>
                                    <CFormSelect name="faculty.facultyId">
                                        <option value="">Select Faculty</option>
                                        {faculties.map(faculty => (
                                            <option key={faculty.facultyId} value={faculty.facultyId}>
                                                {faculty.facultyName}
                                            </option>
                                        ))}
                                    </CFormSelect>
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

                {/* Modal for Schedule - View, Add and Delete   */}
                </CModal>
                <CModal alignment="center" size="lg" visible={visible_sch} onClose={() => setVisibleSch(false)}>
                    <CModalHeader>
                        <CModalTitle>{code} {name}</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CRow className="mb-3">
                            <CFormLabel className="col-sm-4 col-form-label">Course Schedule</CFormLabel>
                            <CTable hover>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">Id</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Day</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Start</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">End</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Option</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    {courseSchedules.map(item => (
                                        <CTableRow key={item.courseScheduleId}>
                                            <CTableHeaderCell scope="row">{item.courseScheduleId}</CTableHeaderCell>
                                            <CTableDataCell>{item.scheduleDayOfWeek}</CTableDataCell>
                                            <CTableDataCell>{item.scheduleStartTime}</CTableDataCell>
                                            <CTableDataCell>{item.scheduleEndTime}</CTableDataCell>
                                            <CTableDataCell>
                                                <CButton color="danger"
                                                         style={{marginRight: 10 + 'px'}}
                                                         onClick={() => {
                                                             handleCourseScheduleSelection(item.courseScheduleId)
                                                         }}>Delete</CButton>
                                            </CTableDataCell>
                                        </CTableRow>
                                    ))}
                                </CTableBody>
                            </CTable>
                        </CRow>
                        <CForm ref={formRef}>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Add Schedule</CFormLabel>
                                <CCol sm={10}>
                                    <CFormSelect
                                        name="scheduleId"
                                        value={scheduleId}
                                        onChange={(event) => setScheduleId(event.target.value)}
                                    >
                                        <option value="">Select Timing</option>
                                        {schedules.map(schedule => (
                                            <option key={schedule.scheduleId} value={schedule.scheduleId}>
                                                {schedule.scheduleDayOfWeek + ' ' + schedule.scheduleStartTime + ' to ' + schedule.scheduleEndTime}
                                            </option>
                                        ))}
                                    </CFormSelect>
                                    <CButton color="success"
                                             style={{marginTop: 10 + 'px'}}
                                             onClick={(event) => handleSubmitSchedule(event)}>Save</CButton>
                                </CCol>
                            </CRow>
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setVisibleSch(false)}>
                            Close
                        </CButton>
                    </CModalFooter>
                </CModal>

                {/* Modal for Updating Course */}
                <CModal alignment="center" size="lg" visible={visible_upd} onClose={() => setVisibleUpd(false)}>
                    <CModalHeader>
                        <CModalTitle>Update a course</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Course Code</CFormLabel>
                                <CCol sm={10}>
                                    <CFormInput type="text"
                                                value={code}
                                                onChange={(event) => setCode(event.target.value)}/>
                                </CCol>
                            </CRow>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Course Name</CFormLabel>
                                <CCol sm={10}>
                                    <CFormInput type="text"
                                                value={name}
                                                onChange={(event) => setName(event.target.value)}/>
                                </CCol>
                            </CRow>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Course Credits</CFormLabel>
                                <CCol sm={10}>
                                    <CFormInput type="text"
                                                value={credits}
                                                onChange={(event) => setCredits(event.target.value)}/>
                                </CCol>
                            </CRow>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Course Capacity</CFormLabel>
                                <CCol sm={10}>
                                    <CFormInput type="text"
                                                value={capacity}
                                                onChange={(event) => setCapacity(event.target.value)}/>
                                </CCol>
                            </CRow>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Faculty</CFormLabel>
                                <CCol sm={10}>
                                    <CFormSelect
                                        name="courseFacultyId"
                                        value={courseFacultyId}
                                        onChange={(event) => setCourseFacultyId(event.target.value)}
                                    >
                                        <option value="">Select Faculty</option>
                                        {faculties.map(faculty => (
                                            <option key={faculty.facultyId} value={faculty.facultyId}>
                                                {faculty.facultyName}
                                            </option>
                                        ))}
                                    </CFormSelect>
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
                        <CModalTitle>Delete a course</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CAlert color="danger">
                            WARNING: This is an irreversible and destructive operation
                        </CAlert>
                        <CForm>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Course Id</CFormLabel>
                                <CCol sm={10}>
                                    <CFormInput type="text"
                                                value={selectedCourseId}
                                                disabled={true}/>
                                </CCol>
                            </CRow>
                            <CRow className="mb-3">
                                <CFormLabel className="col-sm-2 col-form-label">Course Name</CFormLabel>
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

export default CourseRecords
