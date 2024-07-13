import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

const Notification = ({ children, appointment, handleCancel, name, speciality }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState('');
  const [appointmentData, setAppointmentData] = useState('');
  const [appointmentData2, setAppointmentData2] = useState('');


  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));
    const storedAppointmentData2 = JSON.parse(localStorage.getItem(storedDoctorData?.speciality));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
    if (storedAppointmentData2) {
        setAppointmentData2(storedAppointmentData2);
      }
  }, []); 

  return (
    <div>

      <Navbar ></Navbar>

      {children}

      {isLoggedIn && appointment && (
        <>
        <div className="appointment-card">
        <div className="appointment-card__content">
              <h3>Appointment Details</h3>
                <p><strong>Doctor:</strong>  {doctorData?.name}</p>
                <p><strong>Speciality:</strong>  {doctorData?.specialty}</p>
                <p><strong>Name:</strong>  {appointment.username}</p>
                <p><strong>Phone Number:</strong>  {appointment.phoneNumber}</p>
                <p><strong>Date of appointment:</strong>  {appointment.date}</p>
                <p><strong>Time slot selected:</strong>  {appointment.selectedSlot}</p>
                <button onClick={() => handleCancel(appointment.id)}>Cancel Appointment</button>
            </div>
        </div>    
        </>
      )}
    </div>
  );
};

export default Notification;