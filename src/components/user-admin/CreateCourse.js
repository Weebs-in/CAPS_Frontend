import { useRef } from "react";
import axios from "axios";

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

export default function CreateCourse() {
    const codeElement = useRef(null);
    const nameElement = useRef(null);
    const descriptionElement = useRef(null);
    function handleCreateClick(e) {
        e.preventDefault();
        console.log("Submit data to server to create new course");
        console.log(codeElement.current.value);
        console.log(nameElement.current.value);
        console.log(descriptionElement.current.value);
        const data = {
            code: codeElement.current.value,
            name: nameElement.current.value,
            description: descriptionElement.current.value
        };
        axios
            .post("/api/courses",data)
            .then(response => {
                console.log("Success!");
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            })
    }
    return (
        <div>
            <h4>Add Course</h4>
            <form>
                <label htmlFor='code'>Code:</label><br/>
                <input type='text' name='code' ref={codeElement}/><br/>
                <label htmlFor='name'>Name:</label><br/>
                <input type='text' name='name' ref={nameElement}/><br/>
                <label htmlFor='description'>Description:</label><br/>
                <input type='text' name='description' ref={descriptionElement}/><br/>
                <CButton color="primary" className="px-4" onClick={handleCreateClick}>Create</CButton>
            </form>
        </div>
    ) }