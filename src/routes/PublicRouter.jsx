import {Redirect, Route} from "react-router-dom"

const PublicRouter = ({isLogged, children, ...rest}) => {
	return (
		<Route
			{...rest}
			render={() => (isLogged === false) ? children : <Redirect to="/"/>}
		/>
	);
}

export default PublicRouter
