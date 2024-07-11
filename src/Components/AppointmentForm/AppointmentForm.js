import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('01/01/2024')
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber, date, selectedSlot });
      setName('');
      setPhoneNumber('');
      setDate('01/01/2024');
      setSelectedSlot(null);
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        <div className="form-group">
          <label htmlFor="date">Date of appointment:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="datetime">Date of appointment:</label>
          <input
            type="datetime"
            id="datetime"
            value={slot}
            onChange={handleSlotSelection}
            required
          />
        </div>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm
