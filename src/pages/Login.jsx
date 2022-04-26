import React from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
	return (
		<div className="login">
			<div className="form-container">
				<img src={ logo } alt="logo" className="logo" />
				<h1 className="title">welcome to Login React-Shop</h1>
				<p className="subtitle">Login Account</p>
				<form action="/" className="form">
					<label for="username" className="label">Username</label>
					<input type="text" id="username" placeholder="Your email o nickname" className="input input-username" />
					<label for="new-password" className="label">Password</label>
					<input type="password" id="new-password" placeholder="Your password" className="input input-password" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default Login;