import axios, {AxiosResponse} from "axios";
import {baseURLS} from "../configs";

//протипізували дату в аксіос
type IRes<T>=Promise<AxiosResponse<T>>

const apiService =axios.create({baseURL:baseURLS})

export {apiService}
export type {
    IRes
}