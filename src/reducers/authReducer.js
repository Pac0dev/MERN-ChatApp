import types from "../types/types";

const initialState = {
	uid: localStorage.getItem('token') || '',
	username: '',
}
const authReducer = (state = initialState, action = {}) =>  {
	switch(action.type) {
		case types.login: 
			return {
				uid: action.payload.token,
				username: action.payload.username,
			};
		case types.logout: 
			return state;
		default: return state;
	}
}
export default authReducer;
