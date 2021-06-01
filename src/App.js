import React from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react'
import './App.css';
import Main from './pages/Main'
import Login from './components/Login'
import Register from './components/Register'
import Navigation from './components/Navigation'

export default function App() {
	const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('jwt'))

	const logIn = () => {
		setLoggedIn(true)
	}

	const logOut = () => {
		setLoggedIn(false)
		localStorage.clear()
	}
	
	return (
		<div className="App">
			
				<Navigation loggedIn={loggedIn} logOut={logOut}/>
				<Switch>
					<Route 
						exact path="/register" 
						render={routerProps => <Register {...routerProps} loggedIn={loggedIn} logIn={logIn} logOut={logOut} />}
					/>
					<Route 
						exact path="/login" 
						render={routerProps => !loggedIn ? <Login {...routerProps} loggedIn={loggedIn} logIn={logIn} logOut={logOut} /> : <Redirect to="/" />}
						 
					/>
					<Route 
						path="/" 
						render={routerProps => !loggedIn ? <Redirect to="/login"/> : <Main {...routerProps}  />} 
					/>
				</Switch>
		</div>	
		
		
		
  	)
}








