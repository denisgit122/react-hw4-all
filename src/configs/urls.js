import axios from "axios";

const  baseURL = axios.create({baseURL:'https://jsonplaceholder.typicode.com'});
const urls ={
    todos:'/todos',
    albums:(limit=10,page=1)=>baseURL.get('/albums',{
        _limit:limit,
        _page:page
    }),
    comment:'/comments',
}
const postss={
    getById:(id)=>baseURL.get(`/posts/${id}`)
}
export {urls, baseURL, postss};