import axios from "axios";

const axioSrv=axios.create({baseURL:'https://jsonplaceholder.typicode.com/'})
export {axioSrv}