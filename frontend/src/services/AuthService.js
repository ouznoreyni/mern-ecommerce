import jwtDecode from 'jwt-decode';
import http from './HttpService';

const TOKEN = 'token';
const headers = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
};

const login = async (credential) =>
	await http.post('/login', credential, headers);

const register = async (data) => {};

const saveToken = (token) => localStorage.setItem(TOKEN, token);
const getToken = () => localStorage.getItem(TOKEN);
const removeToken = () => localStorage.removeItem(TOKEN);
const decodedToken = () => jwtDecode(getToken());

const authService = {
	login,
	register,
	saveToken,
	getToken,
	removeToken,
	decodedToken,
};

export default authService;
