import axios from 'axios';
const url = "http://localhost:5000/items";
export const getItems = ()=>axios.get(url);
export const createItem = (item)=>axios.post(url,item);