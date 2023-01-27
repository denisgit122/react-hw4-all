import axios from "axios";

const  baseURL = axios.create({baseURL:'https://jsonplaceholder.typicode.com'});
const urls ={
    todos:'/todos',
    albums:'/albums',
    comment:'/comments',
}
const postss={
    getById:(id)=>baseURL.get(`/posts/${id}`)
}
export {urls, baseURL, postss};