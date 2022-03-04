import {Redirect, Route, Switch} from "react-router-dom"
import LoginComponent from "../components/auth/LoginComponent"
import RegisterComponent from "../components/auth/RegisterComponent"

const AuthRouter = () => {
	return (
		<div className="auth">
			<Switch>
				<Route path="/auth/login">
					<LoginComponent/>
				</Route>
				<Route path="/auth/register">
					<RegisterComponent/>
				</Route>
				<Redirect to="/auth/login"/>
			</Switch>
		</div>
	)
}

export default AuthRouter
