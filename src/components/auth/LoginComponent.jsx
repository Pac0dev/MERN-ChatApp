import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {startLoginWithEmailPassword} from "../../actions/auth";
import emailIcon from "../../assets/icons/emailIcon.svg";
import lockIcon from "../../assets/icons/lockIcon.svg";
import useForm from "../../hooks/useForm";
const LoginComponent = () => {

	const dispatch = useDispatch();
	const [formValues, handleInputChange, reset] = useForm({
		email: '',
		password: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if(formValues.email.trim().length > 2 || formValues.email.trim().length > 2) {
			dispatch(startLoginWithEmailPassword(formValues.email, formValues.password));
			reset();
		}
	}
	return (
		<>
			<form 
				className="auth__form"
				onSubmit={handleSubmit}
			>
				<legend className="title fw-bold">Login</legend>
				<div className="auth__form-field">
					<input type="email" name="email" placeholder="Email" autoComplete="off" onChange={handleInputChange} value={formValues.email}/>
					<img src={emailIcon} alt="email icon"/>
				</div>
				<div className="auth__form-field">
					<input type="password" name="password" placeholder="Password" autoComplete="off" onChange={handleInputChange} value={formValues.password}/>
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
