import {BrowserRouter as Router,Switch} from "react-router-dom"
import ChatScreen from "../screens/chat/ChatScreen.jsx";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter"
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
	const isLogged = false;
	return (
		<Router>
			<div>
				<Switch>
					<PrivateRouter exact path="/" isLogged={isLogged}>
						<ChatScreen/>
					</PrivateRouter>
					<PublicRouter path="/auth" isLogged={isLogged}>
						<AuthRouter/>
					</PublicRouter>
				</Switch>
			</div>
		</Router>
	)
}

export default AppRouter
