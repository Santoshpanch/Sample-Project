import axios from "axios";


// Base URLs

const USER_SERVICE_URL =
    process.env.REACT_APP_USER_SERVICE_URL ||
    "/api/users";


const PRODUCT_SERVICE_URL =
    process.env.REACT_APP_PRODUCT_SERVICE_URL ||
    "/api/products";



// User APIs

export const getUsers = () => {

    return axios.get(USER_SERVICE_URL);

};


export const createUser = (user) => {

    return axios.post(USER_SERVICE_URL, user);

};


export const updateUser = (id, user) => {

    return axios.put(
        `${USER_SERVICE_URL}/${id}`,
        user
    );

};


export const deleteUser = (id) => {

    return axios.delete(
        `${USER_SERVICE_URL}/${id}`
    );

};




// Product APIs


export const getProducts = () => {

    return axios.get(PRODUCT_SERVICE_URL);

};


export const createProduct = (product) => {

    return axios.post(
        PRODUCT_SERVICE_URL,
        product
    );

};


export const updateProduct = (id, product) => {

    return axios.put(
        `${PRODUCT_SERVICE_URL}/${id}`,
        product
    );

};


export const deleteProduct = (id) => {

    return axios.delete(
        `${PRODUCT_SERVICE_URL}/${id}`
    );

};