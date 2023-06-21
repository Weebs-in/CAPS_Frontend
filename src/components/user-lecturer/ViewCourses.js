import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

const ViewCourses = () => {
    const [items, setItems] = useState([]); // State to hold the fetched items

    // this method assumes that the enrolment is calculated at the backend and everything is in order
    // useEffect(() => {
    //     // Fetch the items from the backend API
    //     const fetchItems = async () => {
    //         try {
    //             // Make an API call using Axios to fetch the items from the Spring Boot app
    //             const response = await axios.get('/api/courses'); // Replace '/api/courses' with the actual API endpoint
    //             const data = response.data;
    //
    //             // Update the items state with the fetched data
    //             setItems(data);
    //         } catch (error) {
    //             console.error('Error fetching items:', error);
    //         }
    //     };

    // this method assumes i have to derive enrolment on behalf of backened
    useEffect(() => {
        axios.get('/api/courses') //change to correct api address
            .then(response => {
                const derivedItems = response.data.map(course => ({
                    ...course,
                    enrolment: course.courseCapacity + course.courseVacancy,
                }));
                setItems(derivedItems);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

        // Call the fetchItems function
        fetchItems();
    }, []);

    const columns = [
        {
            key: 'course_id',
            label: 'No.',
            _props: { scope: 'col' },
        },
        {
            key: 'course_code',
            label: 'Course Code',
            _props: { scope: 'col' },
        },
        {
            key: 'course_name',
            label: 'Name',
            _props: { scope: 'col' },
        },
        {
            key: 'enrolment', // how to map this one over?
            label: 'Enrolment',
            _props: { scope: 'col' },
        },
    ]
    // for testing view, to be removed
    // const items = [
    //     {
    //         id: 1,
    //         code: 'SA4101',
    //         name: 'Design',
    //         enrolment: '50',
    //         _props: { active: true },
    //         _cellProps: { id: { scope: 'row' } },
    //     },
    //     {
    //         id: 2,
    //         code: 'SA4102',
    //         name: 'Fundamentals of Programming in C#',
    //         enrolment: '56',
    //         _cellProps: { id: { scope: 'row' } },
    //     },
    //     {
    //         id: 3,
    //         code: 'SA4110',
    //         name: 'Machine Learning with Python',
    //         enrolment: '52',
    //         _cellProps: { id: { scope: 'row' } },
    //     },
    // ]
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
