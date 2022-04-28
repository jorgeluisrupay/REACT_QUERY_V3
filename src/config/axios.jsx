import axios from 'axios'

export const clienteAxios = axios.create({
    baseURL: 'https://reqres.in/api/'
});

export const ApiPrueba = axios.create({
    baseURL: 'https://swapi.dev/api/'
});