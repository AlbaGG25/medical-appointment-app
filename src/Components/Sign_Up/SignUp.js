
import React, { useState } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';


const Sign_Up = () => {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const [errorRole, setErrorRole] = useState(''); 
    const [errorName, setErrorName] = useState(''); 
    const [errorPhone, setErrorPhone] = useState(''); 
    const [errorEmail, setErrorEmail] = useState(''); 
    const [errorPassword, setErrorPassword] = useState(''); 
    const navigate = useNavigate(); 

    const getEmailPrefix = (email) => {
        return email.split('@')[0];
    };
  
    const register = async (e) => {
        e.preventDefault(); 
        const emailPrefix = getEmailPrefix(email);
         console.log('Registering with:', { name, email, password, phone });

        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email || emailPrefix,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json();

        if (json.authtoken) {
       
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("emailPrefix", emailPrefix); 
            
            navigate("/");
            window.location.reload(); 
        } else {
            if (json.error) {
                for (const error of json.error) {
                    setError(error.msg); 
                }
            } else {
                setError(json.error);
            }
        }
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexAlf = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\-']+$/;
    const handleRoleChange = (e) => {
        const value = e.target.value;
        setRole(value);
    
        if (value==='') {
          setErrorRole('Select a role'); 
        } else {
          setErrorRole(''); 
        }
      };
    const handleEmailChange = (e) => {
      const value = e.target.value;
      setEmail(value);
  
      if (emailRegex.test(value)) {
        setErrorEmail(''); 
      } else {
        setErrorEmail('Enter a valid email'); 
      }
    };
    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
    
        if (value.length === 10) {
          setErrorPhone(''); 
        } else {
          setErrorPhone('Phone number must have 10 characters'); 
        }
      };
      const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        
        if (regexAlf.test(value)&& value.length >= 4) {
              setErrorName(''); 
            } else {
              setErrorName('Enter a valid name'); 
            }
      };
      const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    
        if (value.length >= 8) {
          setErrorPassword(''); 
        } else {
          setErrorPassword('Password must have min 8 characters'); 
        }
      };

    return (
        <div className="container" style={{marginTop:'10%'}}>
            <div className="signup-text"> 
                <h1>Sign Up</h1>
            </div>
            <div className="signup-text1"  >
                Already a member? <span><Link to="/login" style={{ color: '#2190FF' }}>
                Login
              </Link></span>
            </div>
            <div className="signup-grid">
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <select onChange={handleRoleChange} value={role} type="role" name="role" id="role" className="form-control" placeholder="Select a role" aria-describedby="helpId" required>
                              <option value={''}>Select a role</option>
                              <option value="doctor">Doctor</option>
                              <option value="patient">Patient</option>
                              <option value="admin">Admin</option>
                            </select>
                            {errorRole && <div className="err" style={{ color: 'red' }}>{errorRole}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input value={name} onChange={handleNameChange} type="name" name="name" id="name" className="form-control" placeholder="Enter your name" aria-describedby="helpId" required />
                            {errorName && <div className="err" style={{ color: 'red' }}>{errorName}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input value={phone} onChange={handlePhoneChange} type="phone" name="phone" id="phone" className="form-control" placeholder="Enter your phone" aria-describedby="helpId" required />
                            {errorPhone && <div className="err" style={{ color: 'red' }}>{errorPhone}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input value={email} onChange={handleEmailChange} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" required />
                            {errorEmail && <div className="err" style={{ color: 'red' }}>{errorEmail}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input value={password} onChange={handlePasswordChange} type="password" name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId" required />
                            {errorPassword && <div className="err" style={{ color: 'red' }}>{errorPassword}</div>}
                        </div>

                    <div className="btn-group"> 
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button> 
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button> 
                    </div>
                    
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sign_Up; 