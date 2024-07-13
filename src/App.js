
import React, { useEffect } from 'react';


import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import SignUp from './Components/Sign_Up/SignUp'; 
import Login from './Components/Login/Login'; 
import InstantConsultation from'./Components/InstantConsultation/InstantConsultation'; 
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch'; 
import BookingConsultation from'./Components/BookingConsultation'; 
import Notification from './Components/Notification/Notification'; 

function App() {


  return (
    <div className="App">
      
        <BrowserRouter>
       
          <Navbar/>

          <Notification>
          <Routes>
             <Route path="/" element={< LandingPage />}/>
             <Route path="/sign_up" element={<SignUp />} />
             <Route path="/login" element={<Login />} />
             <Route path="/instant-consultation" element={<InstantConsultation />} />
             <Route path="/search" element={<FindDoctorSearch />} />
             <Route path="/booking-consultation" element={<BookingConsultation />} />
          </Routes>
          </Notification>

        </BrowserRouter>
    </div>
  );
}


export default App;