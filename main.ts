function foo(a: number): number {
    return a;
}

function user(userObj: {name: string, age: number, skills: string[], status: boolean}): void {

}

class User {
    name: string;
    age: number;
    greeting(): string {
        return  `Hello, my name is ${this.name}`;
    };
}

function userElse(userObj: User): void {

}

const someUser = new User;
someUser.name = 'Roman';
someUser.age = 30;

userElse(someUser);

// userElse({name: 'Dmitriy', age: 40});

userElse({name: 'Dmitriy', age: 40, greeting: () => `Hi, I am another user`});


interface IUser {
    name: string;
    age: number;
    greeting?(a: string): string;
}

function bar(b: IUser): void{

}

bar({name: 'Dmitriy', age: 40});

bar({name: 'Anatoliy', age: 35, greeting: (a: string): string => `Hi, I am another user`});

class X implements IUser {
    ownXProp1: string;
    ownXProp2: string[];
    name: string;
    age: number;
}

const iUsers: IUser[] = [
    new X,
    {name: 'Dmitriy', age: 40},
    {name: 'Anatoliy', age: 35, greeting: (a: string): string => `Hi, I am another user`}
];

bar(new X);

function foobar(user: User): void {
    user.greeting();
}

const user2 = new User();
foobar(user2);

class newUser {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value > 0) {
            this._age = value;
        }
    }

    greeting(): string {
        return  `Hello, my name is ${this._name}`;
    };
}


const user3 = new newUser('Vasiliy', 44);

user3.name = 'Vaska';