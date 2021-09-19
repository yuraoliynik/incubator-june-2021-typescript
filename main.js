function foo(a) {
    return a;
}
function user(userObj) {
}
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.greeting = function () {
        return "Hello, my name is " + this.name;
    };
    ;
    return User;
}());
function userElse(userObj) {
}
var someUser = new User;
someUser.name = 'Roman';
someUser.age = 30;
userElse(someUser);
// userElse({name: 'Dmitriy', age: 40});
userElse({ name: 'Dmitriy', age: 40, greeting: function () { return "Hi, I am another user"; } });
function bar(b) {
}
bar({ name: 'Dmitriy', age: 40 });
bar({ name: 'Anatoliy', age: 35, greeting: function (a) { return "Hi, I am another user"; } });
var X = /** @class */ (function () {
    function X() {
    }
    return X;
}());
var iUsers = [
    new X,
    { name: 'Dmitriy', age: 40 },
    { name: 'Anatoliy', age: 35, greeting: function (a) { return "Hi, I am another user"; } }
];
bar(new X);
function foobar(user) {
    user.greeting();
}
var user2 = new User();
foobar(user2);
var newUser = /** @class */ (function () {
    function newUser(name, age) {
        this.name = name;
        this.age = age;
    }
    newUser.prototype.greeting = function () {
        return "Hello, my name is " + this.name;
    };
    ;
    return newUser;
}());
var user3 = new newUser(3, '33');
console.log(user3);
