import http from './httpService';
const TOKEN = 'token';
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
};

const login = async (credential) =>
  await http.post('/auth/login', credential, headers);

const register = async (data) => {};

const saveToken = (token) => localStorage.setItem(TOKEN, token);
const getToken = () => localStorage.getItem(TOKEN);
const removeToken = () => localStorage.removeItem(TOKEN);

export default { login, register, saveToken, getToken, removeToken };