import {Route, Switch} from "react-router-dom"
import LoginScreen from "../screen/LoginScreen"
import RegisterScreen from "../screen/RegisterScreen"

const AuthRouter = () => {
	return (
		<Switch>
			<Route path="/auth/login">
				<LoginScreen/>
			</Route>
			<Route path="/auth/register">
				<RegisterScreen/>
			</Route>
			<Redirect to="/auth/login"/>
		</Switch>
	)
}

export default AuthRouter
