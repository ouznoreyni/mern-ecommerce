import axios from 'axios';
const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 1000,
});

// Add a response interceptor
instance.interceptors.response.use(null, (error) => {
	if (error.response) {
		console.error(error.response.data);
	} else {
		console.error(error.message);
	}
	return Promise.reject(error.response.data);
});

function setJWT(jwt) {
	instance.defaults.headers.common['x-auth-token'] = jwt;
}

const httpService = {
	setJWT,
	get: instance.get,
	post: instance.post,
	put: instance.put,
	delete: instance.delete,
};
export default httpService;
