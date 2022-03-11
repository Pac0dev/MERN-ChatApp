import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/authReducer";
import chatReducer from "../reducers/chatReducer";

const reducers = combineReducers({
	auth: authReducer,
	chat: chatReducer,
});

//see redux toolkit in web
const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

//we set thunk middleware to create async actions
export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
