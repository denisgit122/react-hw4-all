import axios from "axios";


const baseURL = 'http://owu.linkpc.net/carsAPI/v2'

const aut='/auth'

const auth={
        login:'/auth',
        refresh:`${aut}/refresh`,
        me:`${aut}/me`  // додає інфу про користувача який зараз залогінений
    }

const urls={
    cars:'/cars',
    // регістрація нашого користувача:
    users:'/users'
}



const base=axios.create({baseURL:baseURL})

export {base,urls,auth}