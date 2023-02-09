const base='http://owu.linkpc.net/carsAPI/v2'


const cars='/cars'
const auth='/auth'
const urls={
    auth:{
     login:auth,
     refresh: `${auth}/refresh`,
     me: `${auth}/me`
    },

    cars:{
        cars:cars,
        beId:(id)=>`${cars}/${id}`
    },
    users:'/users'
}
export {urls,base}