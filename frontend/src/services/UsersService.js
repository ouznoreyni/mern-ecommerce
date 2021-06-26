import http from './HttpService';

const getAll = async (page = 1) => {
	return await http.get(`/users?_page=${page}&_limit=10`);
};

const retrieve = async (id) => {
	return await http.get(`/users/${id}`);
};

const usersService = {
	getAll,
	retrieve,
};

export default usersService;
