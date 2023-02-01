import axios from "axios";

const axio=axios.create({baseURL:'https://jsonplaceholder.typicode.com'})

const posts=axio.get('/posts')
const comment=axio.get('/comments')

export {posts,comment}