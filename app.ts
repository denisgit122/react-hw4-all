interface IShape {
    sum:()=>number
    showSum:()=>void
}



class Rectangle implements IShape{
    constructor(private a:number, private b:number){

    }
    sum(): number {
        return this.a+this.b
    }
    showSum(): void {
        console.log(this.a+this.b)
    }

}

const res=new Rectangle(2,4)
console.log(res.sum());
console.log(res.showSum());

class user {
    constructor(private name:string, private age:number, private  gender:string) {
    }
}
const nesUser=new user('max',21, 'male')
console.log(nesUser);



const test=(a:number,b:number)=>{
    return a + b
}
console.log(test(1, 2));



const test2=(a:number,b:number):void=>{
    console.log(a + b);
}
console.log(test2(5, 2));




interface IUser2 {
    name:string, age:number, gender:string
}

const user2:IUser2 = {name:'max', age:17, gender:'male'}
console.log(user2);


function incAge(some:IUser2, inc:number):IUser2 {
    some.age+=inc
    return some
}

console.log(incAge(user2, 2));


