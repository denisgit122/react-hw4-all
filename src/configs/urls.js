import axios from "axios";

const  baseURL = axios.create({baseURL:'https://jsonplaceholder.typicode.com'});
const urls ={
    todos:'/todos',

    comment:'/comments',
}
const postss={
    getById:(id)=>baseURL.get(`/posts/${id}`)
}
const album={
    albums:(limit=10,
            page=1
    )=>baseURL.get('/albums', {
        _limit: limit,
        _page: page
    })
}
export {urls, baseURL, postss,album};