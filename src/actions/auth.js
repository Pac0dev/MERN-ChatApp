import {postFetch} from "../helper/fetch";
import types from "../types/types"

const startLoginWithEmailPassword = (userEmail, userPassword) => {
	return (dispatch) => {
		try {
			const credentials = {
				email: userEmail,
				password: userPassword,
			};
			postFetch(credentials, '/auth/login')
				.then((res) => {
					const {token, user:{username}} = res;
					dispatch(login(token, username));
				})
				.catch((err) => {
					console.warn(err);
				})
		} catch( err ) {
			console.warn(err);
		}
	}
};

const login = (token, username) => {
	return {
		type: types.login,
		payload: {
			token,
			username
		}
	}
}

const logout = () => ({
	type: types.logout,
});

export {
	startLoginWithEmailPassword,
}
