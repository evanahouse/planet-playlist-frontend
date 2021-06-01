import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { registerUser } from '../services/auth'
import Navigation from './Navigation'

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    let submission = {
        username: username,
        password: password,
        password2: password2
    }

    let body = JSON.stringify({user: {username, password}})
        
    const handleRegister = (e) => {
        e.preventDefault()
        setErrors(validateRegister(submission))
        setIsSubmitting(true)
    }

    const validateRegister = (submission) => {
        let errors = {}
        if(!submission.username.trim()) {
            errors.username = "Username required"
        }
        if(!submission.password) {
            errors.password = 'Password is required'
        } 
        else if (password.length < 6) {
            errors.password = "Password needs to be 6 characters or more"
        }
        if(!submission.password2) {
            errors.password2 = "Password is required"
        } else if (submission.password2 !== submission.password)  {
            errors.password2 = 'Passwords do not match'
        }
        return errors
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            registerUser(body).then(resp => {
                console.log('users#create response:', resp)
                localStorage.setItem('jwt', resp.jwt)
            })  
        }
    }, [errors, isSubmitting])
  
    return (
        <div className="login-screen">
            <div className="form-container">
                <div><h3>Register</h3>
                        <form className="validate-form" onSubmit={handleRegister} autoComplete="off" > 
                        <p className="forgot-password">
                            <div>{errors.username && <span className="error-message">{errors.username}</span>}</div>
                            <div>{errors.password && <span className="error-message">{errors.password}</span>}</div>
                            <div>{errors.password2 && <span className="error-message">{errors.password2}</span>}</div>
                        </p>
                        <label htmlFor="username"></label>
                            <input
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            />
                        
                        <label htmlFor="password"></label>
                            <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            />
                        
                        <label htmlFor="password2"></label>
                            <input
                            type="password"
                            name="password2"
                            placeholder="Confirm Password"
                            value={password2}
                            onChange={(event) => setPassword2(event.target.value)}
                            />
                        
                        
                        <input type="submit" value="Register" />
                        </form>
                </div>
            </div>
        </div>
        );
    }

    export default Register


 