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

const ViewEnrolment = () => {
    const [items, setItems] = useState([]); // State to hold the fetched items

    // this method assumes that the first and last name are joined at the backend and everything is in order
    // need to confirm if it is sent over here in camelCase or _
    useEffect(() => {
        // Fetch the items from the backend API
        const fetchItems = async () => {
            try {
                // Make an API call using Axios to fetch the items from the Spring Boot app
                const response = await axios.get('/api/course_student'); // Replace '/api/courses' with the actual API endpoint
                const data = response.data;

                // Update the items state with the fetched data
                setItems(data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        // this method assumes i have to join student name on behalf of backened
        // useEffect(() => {
        //     axios.get('/api/course_student') //change to correct api address
        //         .then(response => {
        //             const derivedItems = response.data.map(course => ({
        //                 ...course,
        //                 studentName: student.studentLastName + " " + student.studentFirstName,
        //             }));
        //             setItems(derivedItems);
        //         })
        //         .catch(error => {
        //             console.error(error);
        //         });
        // }, []);


    // Call the fetchItems function
    fetchItems();
}, []);

const columns = [
    {
        key: 'student_id',
        label: 'No.',
        _props: { scope: 'col' },
    },
    {
        key: 'student_matriculation_number',
        label: 'Matric No.',
        _props: { scope: 'col' },
    },
    {
        key: 'student_name',
        label: 'Name',
        _props: { scope: 'col' },
    },
]

return (
    <div>
        <CContainer>
            <CRow>
                {/*To add form*/}
                <p>Enrolled in (Course Name)</p>
            </CRow>
            <CTable striped responsive="{-sm|-md|-lg|-xl|-xxl}"
                    columns={columns} items={items} />
        </CContainer>
    </div>
)
};

export default ViewEnrolment;
