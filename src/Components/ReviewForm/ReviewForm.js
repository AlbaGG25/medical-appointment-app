import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from 'uuid';
import GiveReview from '../GiveReview/GiveReview';
import './ReviewForm.css';

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
    const [reviews, setReviews] = useState([]);

    const handleReview = (doctor) => {
        setSelectedDoctor(doctor);
        setShowModal(true);
    };

    const handleCancel = (reviewId) => {
        const updatedReviews = reviews.filter((review) => review.id !== reviewId);
        setReviews(updatedReviews);
    };

    const handleFormSubmit = (reviewData) => {
        const newReview = {
            id: uuidv4(),
            ...reviewData,
        };
        const updatedReviews = [...reviews, newReview];
        setReviews(updatedReviews);
        setShowModal(false);
    };

    return (
        <>
            <table className="review-table" style={{ width: '70%', borderCollapse: 'collapse', marginTop: '20%', marginInline: 'auto' }}>
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
                                    {reviews.some(review => review.doctorId === doctor.number) ? 'Update Review' : 'Write Review'}
                                </button>
                            </td>
                            <td>{reviews.find(review => review.doctorId === doctor.number)?.review || ''}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Popup open={showModal} onClose={() => setShowModal(false)} modal>
                {selectedDoctor && (
                    <GiveReview
                        doctor={selectedDoctor}
                        onSubmit={(formData) => handleFormSubmit({ ...formData, doctorId: selectedDoctor.number })}
                        onCancel={() => setShowModal(false)}
                    />
                )}
            </Popup>
        </>
    );
};

export default ReviewForm;
