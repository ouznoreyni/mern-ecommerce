import axios from 'axios';
import * as actions from '../api';

const api =
	({ dispatch }) =>
	(next) =>
	async (action) => {
		if (action.type !== actions.apiCallBegan.type) return next(action);

		const { url, method, data, onStart, onSucces, onError } = action.payload;
		if (onStart) dispatch({ type: onStart });
		next(action);

		try {
			const response = await axios.request({
				baseURL: process.env.REACT_APP_API_URL,
				url,
				method,
				data,
			});
			//General success dispatch
			dispatch(actions.apiCallSuccess(response.data));
			//specific dispatch
			if (onSucces) dispatch({ type: onSucces, payload: response.data });
		} catch (error) {
			//General error action
			dispatch(actions.apiCallFailed(error.message));
			//specific scenario
			if (onError) dispatch({ type: onError, payload: error.message });
		}
	};

export default api;
