import axios from 'axios'

export const clienteAxios = axios.create({
    baseURL: 'https://reqres.in/api/'
});