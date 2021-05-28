import http from './httpService';

const getAll = async (page = 1) => {
	return await http.get(`/orders?_page=${page}&_limit=10`);
};

const retrieve = async (id) => {
	return await http.get(`/orders/${id}`);
};

const ordersService = {
	getAll,
	retrieve,
};

export default ordersService;
