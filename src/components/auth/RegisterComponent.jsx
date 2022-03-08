import {Link} from "react-router-dom";
import emailIcon from "../../assets/icons/emailIcon.svg";
import lockIcon from "../../assets/icons/lockIcon.svg";
import userIcon from "../../assets/icons/userIcon.svg";
const RegisterComponent = () => {
	return (
		<>
			<form className="auth__form">
				<legend className="title fw-bold">Register</legend>
				<div className="auth__form-field">
					<input type="text" name="username" placeholder="User Name" autoComplete="off"/>
					<img src={userIcon} alt="username icon"/>
				</div>
				<div className="auth__form-field">
					<input type="email" name="email" placeholder="Email" autoComplete="off"/>
					<img src={emailIcon} alt="email icon"/>
				</div>
				<div className="auth__form-field">
					<input type="password" name="password" placeholder="Password" autoComplete="off"/>
					<img src={lockIcon} alt="lock icon"/>
				</div>
				<input type="submit" value="Register" className="btn fw-bold"/>
				<p className="auth__link">
					Already a member? 
					<Link className="link" to="/auth/login">
						Login
					</Link>
				</p>
			</form>
		</>
	)
}

export default RegisterComponent
