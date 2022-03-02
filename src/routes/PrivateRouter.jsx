import {Redirect, Route} from "react-router-dom"

const PrivateRouter = ({isLogged, children, ...rest}) => {
	console.log(isLogged);
	return (
		<Route
			{...rest}
			render={() => isLogged === true ? children : <Redirect to="/auth"/>}
		/>
	)
}

export default PrivateRouter
