import AppRouter from "./routes/AppRouter"
import { Provider } from "react-redux";
import {store} from "./store/store";
import './styles/style.scss';
const App = () => {
	return (
		<Provider store={store}>
			<AppRouter/>
		</Provider>
	)
}

export default App
