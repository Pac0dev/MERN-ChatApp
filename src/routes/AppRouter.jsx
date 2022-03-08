import {useState, useEffect} from 'react'
import {useSelector} from "react-redux";
import {BrowserRouter as Router,Switch} from "react-router-dom"
import ChatScreen from "../screens/chat/ChatScreen.jsx";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter"
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
	const token = useSelector((state) => state.auth);
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token') || '';
		if(token.trim().length > 5) {
			setIsLogged(true);
		} else {
			setIsLogged(false);
		}
	}, [token]);

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
