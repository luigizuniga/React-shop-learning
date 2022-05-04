import React , { useRef } from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
	const form = useRef(null);
	
	const handleSubmit = (event) =>{
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username :formData.get('email'),
			password : formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className="login">
			<div className="form-container">
				<img src={ logo } alt="logo" className="logo" />
				<h1 className="title">welcome to Login React-Shop</h1>
				<p className="subtitle">Login Account</p>
				<form action="/" className="form" ref={ form }>
					<label htmlFor="email" placeholder="email@example.com" className='label'>Email Address</label>
					<input type="text" name="email" placeholder="Your email o nickname" className="input input-email" />
					<label htmlFor="password" placeholder="********" className='label'>Password</label>
					<input type="password" name="password" placeholder="Your password" className="input input-password" />
					<button
						onClick={ handleSubmit }
						className="primary-button login-button"
						>Log In
					</button>
				</form>
				<button
					className='secondary-button signup-button'
				>
					Sign up
				</button>
			</div>
		</div>
	);
}

export default Login;