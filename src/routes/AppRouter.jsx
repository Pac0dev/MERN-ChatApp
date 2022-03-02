import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import SidebarComponent from "../component/SidebarComponent";
import ChatScreen from "../screen/ChatScreen";
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
						<SidebarComponent/>
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
