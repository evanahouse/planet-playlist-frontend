import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { loginUser } from '../services/auth'
import background from '../photos/spaceship.jpeg'


const Login = ({ history, logIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    let submission = {
        username: username,
        password: password,
    }

    let body = JSON.stringify({user: {username, password}})

    const handleLogin = (e) => {
        e.preventDefault()
        setErrors(validateLogin(submission))
        setIsSubmitting(true)
    }

    const validateLogin = (submission) => {
        let errors = {}
        if(!submission.username.trim()) {
            errors.username = "Username required"
        }
        if(!submission.password) {
            errors.password = 'Password is required'
        } 
        return errors
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            loginUser(body).then(resp => {
                if (resp.jwt) {
                    localStorage.setItem('jwt', resp.jwt)
                    logIn()
                    history.push("/")
                } else if (resp.error) {
                    alert("Invalid Login!")
                }  
            })
        }
    }, [errors, isSubmitting])
  
    return (
        <div className="login-screen ">
            <div className="form-container">
                <h3>Login</h3>
                <form className="validate-form" onSubmit={handleLogin} autoComplete="off"> 
                <p className="forgot-password">
                        <div>{errors.username && <span className="error-message">{errors.username}</span>}</div>
                        <div>{errors.password && <span className="error-message">{errors.password}</span>}</div>
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
                
                <input type="submit" value="Login" />
                </form>
            </div>
        </div>    
        );
    }

    export default Login


 