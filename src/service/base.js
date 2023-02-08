import axios from "axios";


const baseURL = 'http://owu.linkpc.net/carsAPI/v1'
const urls={
    cars:'/cars'


}
const base=axios.create({baseURL:baseURL})

export {base,urls}