import http from './HttpService';

const getAll = async (page = 1) => {
	return await http.get(`/products?_page=${page}&_limit=10`);
};

const retrieve = async (id) => {
	return await http.get(`/products/${id}`);
};

const productsService = {
	getAll,
	retrieve,
};

export default productsService;
