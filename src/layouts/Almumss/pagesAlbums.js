const getPageCounter=(totalCaunt,limit)=>{
    return Math.ceil(totalCaunt/limit)
}

const getPageArray=(totalPage)=>{
    let resuk=[]
    for (let i = 0; i < totalPage; i++) {
        resuk.push( i +1)

    }return resuk
}

export {getPageCounter,getPageArray}