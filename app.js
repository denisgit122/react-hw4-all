var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        this.a = a;
        this.b = b;
    }
    Rectangle.prototype.sum = function () {
        return this.a + this.b;
    };
    Rectangle.prototype.showSum = function () {
        console.log(this.a + this.b);
    };
    return Rectangle;
}());
var res = new Rectangle(2, 4);
console.log(res.sum());
console.log(res.showSum());
var user = /** @class */ (function () {
    function user(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return user;
}());
var nesUser = new user('max', 21, 'male');
console.log(nesUser);
var test = function (a, b) {
    return a + b;
};
console.log(test(1, 2));
var test2 = function (a, b) {
    console.log(a + b);
};
console.log(test2(5, 2));
var user2 = { name: 'max', age: 17, gender: 'male' };
console.log(user2);
function incAge(some, inc) {
    some.age += inc;
    return some;
}
console.log(incAge(user2, 2));
