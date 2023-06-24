import React, {useEffect, useState} from 'react'
import {
    CBadge,
    CButton,
    CCallout,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow
} from '@coreui/react'
import {CChartBar, CChartPolarArea,} from '@coreui/react-chartjs'
import config from "../../config";

const GradesAndGpa = () => {
    // variables
    const [courseRecords, setCourseRecords] = useState([]);
    const [courseAllRecords, setCourseAllRecords] = useState([]);
    const [courseDetails, setCourseDetails] = useState([]);
    const [facultyName, setFacultyName] = useState([]);
    const [gpa, setGpa] = useState([]);
    // modal visibility
    const [visible_detail, setVisibleDetail] = useState(false);
    // pie chart
    const statusCounts = [0, 0, 0, 0, 0];

    const random = () => Math.round(Math.random() * 100)

    useEffect(() => {
        fetchGradeRecords();
    }, []);

    const convertGradeToGp = (grade) => {
        const fullGrade = 100;
        const fullGp = 5;
        const gradeToGpScale = fullGp / fullGrade;

        const numericGrade = parseFloat(grade);
        if (!isNaN(numericGrade)) {
            return (numericGrade * gradeToGpScale).toFixed(2);
        } else {
            console.log('nan')
            return 0;
        }
    };

    const setPieChartData = (courseAllRecords) => {
        courseAllRecords.forEach((record) => {
            const status = record.courseStudentStatus;
            if (status === -1 || status === "Banned") {
                statusCounts[0]++;
            } else if (status === 0 || status === "Enrolled") {
                statusCounts[1]++;
            } else if (status === 1 || status === "In Progress") {
                statusCounts[2]++;
            } else if (status === 2 || status === "Completed") {
                statusCounts[3]++;
            } else if (status === 3 || status === "Failed") {
                statusCounts[4]++;
            }

        });
        return statusCounts;
    }

    const fetchGradeRecords = async () => {
        const params = new URLSearchParams();
        // TODO: FIX THIS
        params.append('studentId', 1);
        await fetch(config.getAllCoursesByStudentId + `?${params.toString()}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }).then(response => response.json()).then(data => {
            const courseRecordData = data.data;
            setCourseAllRecords(courseRecordData);
            const updatedRecordData = courseRecordData.filter((item) => {
                return item.courseStudentGrade !== null && item.courseStudentStatus !== -1;
            });
            updatedRecordData.map(item => {
                // grade
                if (item.courseStudentGrade == null) {
                    item.courseStudentGrade = "Not graded yet";
                }
                // status
                if (item.courseStudentStatus === 0) {
                    item.courseStudentStatus = "Enrolled";
                    item.badgeColor = "info";
                } else if (item.courseStudentStatus === 1) {
                    item.courseStudentStatus = "In Progress";
                    item.badgeColor = "info";
                } else if (item.courseStudentStatus === 2) {
                    item.courseStudentStatus = "Completed";
                    item.badgeColor = "success";
                } else if (item.courseStudentStatus === 3) {
                    item.courseStudentStatus = "Failed";
                    item.badgeColor = "danger";
                } else {
                    item.courseStudentStatus = "Deviant";
                    item.badgeColor = "primary";
                }
            })
            console.log(updatedRecordData);
            setCourseRecords(updatedRecordData);
        }).catch(error => {
            console.error('Error fetching course data:', error);
        });
        await fetch(config.viewStudentCourseGradeAndGPA + `?${params.toString()}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json()).then(data => {
            const gpaData = data.gpa;
            setGpa(convertGradeToGp(gpaData));
        }).catch(error => {
            console.error('Error fetching gpa data:', error);
        });
    };

    const fetchCourseDetails = async (courseId) => {
        const params = new URLSearchParams();
        params.append('courseId', courseId);
        await fetch(config.getCourseById + `?${params.toString()}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }).then(response => response.json()).then(data => {
            const courseDetailsData = data.data;
            console.log(courseDetailsData);
            if (courseDetailsData.courseStatus === 0) {
                courseDetailsData.courseStatus = "Enrolling";
            } else if (courseDetailsData.courseStatus === 1) {
                courseDetailsData.courseStatus = "In Progress";
            } else if (courseDetailsData.courseStatus === 2) {
                courseDetailsData.courseStatus = "Completed";
            }
            if (courseDetailsData.courseEnrollmentStatus === 0) {
                courseDetailsData.courseEnrollmentStatus = "Enrolling";
            } else if (courseDetailsData.courseEnrollmentStatus === -1) {
                courseDetailsData.courseEnrollmentStatus = "Not Enrolling";
            }
            setCourseDetails(courseDetailsData);
            setFacultyName(courseDetailsData.faculty.facultyName)
        }).catch(error => {
            console.error('Error fetching course detail data:', error);
        });
    };

    const handleCourseDetails = async (courseId) => {
        console.log("selected id: " + courseId)
        await fetchCourseDetails(courseId);
    };

    return (
        <CRow>
            <CCol xs={12}>
                <CCallout color="info">Your current GPA is <CBadge color="success">{gpa} / 5.0</CBadge>.
                    Shall you have any questions, please contact your advisor.</CCallout>
                <CCallout color="warning">This page only contains courses completed with grades. In progress courses not
                    included.</CCallout>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>Grades</CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            Grade from courses you currently completed.
                        </p>
                        <CTable hover>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">Course Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Grade</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Grade Point</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Options</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {courseRecords.map(item => (
                                    <CTableRow key={item.courseId}>
                                        <CTableHeaderCell scope="row">{item.courseName}</CTableHeaderCell>
                                        <CTableDataCell>{item.courseStudentGrade}</CTableDataCell>
                                        <CTableDataCell>{convertGradeToGp(item.courseStudentGrade)}</CTableDataCell>
                                        <CTableDataCell>
                                            <CBadge color={item.badgeColor}>{item.courseStudentStatus}</CBadge>
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            <CButton color="info"
                                                     style={{marginRight: 10 + 'px'}}
                                                     onClick={() => {
                                                         setVisibleDetail(!visible_detail);
                                                         handleCourseDetails(item.courseId)
                                                     }}>Details</CButton>
                                        </CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
            <CModal alignment="center" size="lg" visible={visible_detail} onClose={() => setVisibleDetail(false)}>
                <CModalHeader>
                    <CModalTitle>Completed Course details</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm>
                        <CRow className="mb-3">
                            <CFormLabel className="col-sm-5 col-form-label">Course Code</CFormLabel>
                            <CCol sm={5} className="mb-3">
                                <CFormInput type="text" value={courseDetails.courseCode} readOnly/>
                            </CCol>
                            <CFormLabel className="col-sm-5 col-form-label">Course Name</CFormLabel>
                            <CCol sm={5} className="mb-3">
                                <CFormInput type="text" value={courseDetails.courseName} readOnly/>
                            </CCol>
                            <CFormLabel className="col-sm-5 col-form-label">Course Faculty Name</CFormLabel>
                            <CCol sm={5} className="mb-3">
                                <CFormInput type="text" value={facultyName} readOnly/>
                            </CCol>
                            <CFormLabel className="col-sm-5 col-form-label">Course Credits</CFormLabel>
                            <CCol sm={5} className="mb-3">
                                <CFormInput type="text" value={courseDetails.courseCredits} readOnly/>
                            </CCol>
                            <CFormLabel className="col-sm-5 col-form-label">Course Capacity</CFormLabel>
                            <CCol sm={5} className="mb-3">
                                <CFormInput type="text" value={courseDetails.courseCapacity} readOnly/>
                            </CCol>
                            <CFormLabel className="col-sm-5 col-form-label">Course Enrollment Status</CFormLabel>
                            <CCol sm={5} className="mb-3">
                                <CFormInput type="text" value={courseDetails.courseEnrollmentStatus} readOnly/>
                            </CCol>
                            <CFormLabel className="col-sm-5 col-form-label">Course Status</CFormLabel>
                            <CCol sm={5} className="mb-3">
                                <CFormInput type="text" value={courseDetails.courseStatus} readOnly/>
                            </CCol>
                        </CRow>
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisibleDetail(false)}>
                        Close
                    </CButton>
                </CModalFooter>
            </CModal>
            <CCol xs={6}>
                <CCard className="mb-4">
                    <CCardHeader>Bar Chart of Your Grade</CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            View a bar chart of your grade.
                        </p>
                        <CChartBar
                            data={{
                                labels: courseRecords.map((record) => record.courseName),
                                datasets: [
                                    {
                                        label: 'Grade',
                                        backgroundColor: '#f87979',
                                        data: courseRecords.map((record) => record.courseStudentGrade),
                                    },
                                ],
                            }}
                            labels="months"
                        />
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={6}>
                <CCard className="mb-4">
                    <CCardHeader>Polar Area Chart of your course status</CCardHeader>
                    <CCardBody>
                        <CChartPolarArea
                            data={{
                                labels: ['Banned', 'Enrolled', 'In Progress', 'Completed', 'Failed'],
                                datasets: [
                                    {
                                        data: setPieChartData(courseAllRecords),
                                        backgroundColor: ['#DD1B16', '#36A2EB', '#00D8FF', '#41B883', '#FF6384'],
                                    },
                                ],
                            }}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default GradesAndGpa
