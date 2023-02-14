import { useRef, useState, useEffect } from 'react';
import { useNavigate, Linnk } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';
import { useLoginMutation } from './authApiSlice';

const Login = () => {
	const userRef = useRef();
	const errRef = useRef();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [login, { isLoading }] = useLoginMutation();

	const errClass = errMsg ? 'errmsg' : 'offscreen';

	if (isLoading) return <p>Loading...</p>;

	const content = (
		<section className="public">
			<header>
				<h1>Employee Login</h1>
			</header>
			<main className="login">
				<p ref={errRef} className={errClass} aria-live="assertive">
					{errMsg}
				</p>

				<form className="form" onSubmit={handleSubmit}>
					<label htmlFor="username">Username:</label>
					<input
						className="form__input"
						type="text"
						id="username"
						ref={userRef}
						value={username}
						onChange={handleUserInput}
						autoComplete="off"
						required
					/>

					<label htmlFor="password">Password:</label>
					<input
						className="form__input"
						type="password"
						id="password"
						onChange={handlePwdInput}
						value={password}
						required
					/>
					<button className="form__submit-button">Sign In</button>
				</form>
			</main>
			<footer>
				<Link to="/">Back to Home</Link>
			</footer>
		</section>
	);

	return content;
};

export default Login;
