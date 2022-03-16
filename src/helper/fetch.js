const postFetch = async (dataToSent, endpoint ) => {
	const token = localStorage.getItem('token') || '';
	const fetchConf = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'token': token,
		},
		body: JSON.stringify(dataToSent),
	};
	try {
		const baseUrl = import.meta.env.VITE_BASE_URL;
		const response = await fetch(baseUrl + endpoint, fetchConf);
		const data = await response.json();
		return {...data};
	} catch( err ) {
		return err;
	}
}
const getFetch = async (endpoint) => {
	const token = localStorage.getItem('token') || '';
	console.log(token);
	const fetchConf = {
		method: 'GET',
		headers: {
			'token': token,
		}
	};
	try {
		const finalUrl = import.meta.env.VITE_BASE_URL + endpoint;
		
		const response = await fetch(finalUrl, fetchConf);
		const data = await response.json();
		return {...data, status: response.status};
	} catch ( err ) {
		return err;
	}
}
export {
	postFetch,
	getFetch,
}
