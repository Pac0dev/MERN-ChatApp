import {Link} from "react-router-dom";
import emailIcon from "../../assets/icons/emailIcon.svg";
import lockIcon from "../../assets/icons/lockIcon.svg";
const LoginComponent = () => {
	return (
		<>
			<form className="auth__form">
				<legend className="title fw-bold">Login</legend>
				<div className="auth__form-field">
					<input type="email" name="email" placeholder="Email" autoComplete="off"/>
					<img src={emailIcon} alt="email icon"/>
				</div>
				<div className="auth__form-field">
					<input type="password" name="password" placeholder="Password" autoComplete="off"/>
					<img src={lockIcon} alt="lock icon"/>
				</div>
				<input type="submit" value="Login" className="btn fw-bold"/>
				<p className="auth__link">
					Don't have an account yet? 
					<Link className="link" to="/auth/register">
						Register
					</Link>
				</p>
			</form>
		</>
	);
};

export default LoginComponent;
