const postFetch = async (dataToSent, endpoint) => {
	const fetchConf = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(dataToSent),
	};
	try {
		const baseUrl = import.meta.env.VITE_BASE_URL;
		const response = await fetch(baseUrl + endpoint, fetchConf);
		const data = await response.json();
		return data;
	} catch( err ) {
		return err;
	}
}
const getFetch = async (endpoint, token) => {
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
		return data;
	} catch ( err ) {
		return err;
	}
}
export {
	postFetch,
	getFetch,
}
