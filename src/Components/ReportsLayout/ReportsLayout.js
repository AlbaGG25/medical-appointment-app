import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from 'uuid';
import './ReportsLayout.css'

const ReviewForm = () => {
    const doctors = [
        { number: 1, name: 'Dr. John Doe', speciality: 'Cardiology', feedback: 'Yes', review: 'Excellent care' },
        { number: 2, name: 'Dr. Jane Smith', speciality: 'Dermatology', feedback: 'No', review: 'N/A' },
        { number: 3, name: 'Dr. Emily Johnson', speciality: 'Neurology', feedback: 'Yes', review: 'Very knowledgeable' },
        { number: 4, name: 'Dr. Michael Brown', speciality: 'Pediatrics', feedback: 'Yes', review: 'Great with kids' },
        { number: 5, name: 'Dr. Sarah Davis', speciality: 'Oncology', feedback: 'No', review: 'N/A' },
    ];

    const [showModal, setShowModal] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [reports, setReports] = useState([]);

    const handleReview = (doctor) => {
        setSelectedDoctor(doctor);
        setShowModal(true);
    };


    return (
        <>
          <h2 style={{ width: '70%', borderCollapse: 'collapse', marginTop: '15%', marginInline: 'auto' }}>Reports</h2>
            <table className="review-table" style={{ width: '70%', borderCollapse: 'collapse',  marginInline: 'auto' }}>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Specialty</th>
                        <th>Provide Feedback</th>
                        <th>Review Given</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor) => (
                        <tr key={doctor.number}>
                            <td>{doctor.number}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.speciality}</td>
                            <td>
                                <button className="review-table_body-button" onClick={() => handleReview(doctor)}>
                                    <a target='_blank' href='Patient_Information.pdf' className="report-link" rel="noreferrer">View Report</a>
                                </button>
                            </td>
                            <td>
                                <button className="review-table_body-button" onClick={() => handleReview(doctor)}>
                                    <a target='_blank' href='Patient_Information.pdf' className="report-link" rel="noreferrer">Download Report</a>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ReviewForm;
