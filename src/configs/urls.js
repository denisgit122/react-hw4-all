const base='http://owu.linkpc.net/carsAPI/v1'

const cars='/cars'
const urls={
    cars:{
        cars:cars,
        beId:(id)=>`${cars}/${id}`
    }
}
export {urls,base}