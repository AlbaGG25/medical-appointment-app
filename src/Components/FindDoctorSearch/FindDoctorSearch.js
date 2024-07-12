import React, { useState } from 'react';
import './FindDoctorSearch.css';
import find2 from '../../Images/find2.png';
import search from '../../Images/search.svg';
import { useNavigate, Navigate } from 'react-router-dom';


const initSpeciality = [
    'Cardiologist', 'Dentist', 'Gynecologist/Obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Psychiatrist', 'Bone',
]

const FindDoctorSearch = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();
    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/booking-consultation?speciality=${speciality}`);
        window.location.reload();
    }
    return (
        <div className='finddoctor' style={{ marginTop: '14%' }}>
            <center>
                <h1>Find a doctor and Book your appointment</h1>
                <div>
                    <img className="mainimg" src={find2} alt="Image of a doctor, we can't see their face, it depicts only their arm a partially his body holding a folder " />
                </div>
                <div className="home-search-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="doctor-search-box">

                        <input type="text" className="search-doctor-input-box" placeholder="Search doctors, clinics, hospitals, etc." onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />

                        <div className="findiconimg"><img className="findicon" src={search} alt="" /></div>
                        <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {
                                specialities.map(speciality => <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                                    <span><img src={search} alt="" style={{ height: "10px", width: "10px" }} width="12" /></span>
                                    <span>{speciality}</span>
                                    <span>SPECIALITY</span>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default FindDoctorSearch;