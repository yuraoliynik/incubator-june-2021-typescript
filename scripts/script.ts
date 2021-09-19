// --створити масив з:
// - з 5 числових значень
const numArr: number[] = [1, 2, 3, 4, 5];

// - з 5 стічкових значень
const strArr: string[] = ['a0', 'b1', 'c2', 'd3', 'e4'];

// - з 5 значень стрічкового, числового та булевого типу
const anyArr: any[] = [0, 'b1', true, 4, false];

// - та вивести його в консоль
console.log(numArr);
console.log(strArr);
console.log(anyArr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const anyArr2: any[] = [];

anyArr2[0] = '000';
anyArr2[1] = 111;
anyArr2[2] = true;
anyArr2[3] = false;
anyArr2[4] = 444;

console.log(anyArr2);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const numArr2: number[] = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99];

for (let i = 0; i < numArr2.length; i++) {
    console.log(numArr2[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const strArr2: string[] = ['0', '11', '22', '33', '44', '55', '66', '77', '88', '99'];

for (let i = 0; i < strArr2.length; i++) {
    console.log(strArr2[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const anyArr3: any[] = ['0', 11, '22', 33, true, 'false', false, '77', 88, '99'];

for (let i = 0; i < anyArr3.length; i++) {
    console.log(anyArr3[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
const anyArr4: any[] = ['true', 11, false, 33, true, 'false', false, '77', 88, '99'];

for (let i = 0; i < anyArr4.length; i++) {
    if (typeof anyArr4[i] === 'boolean') {
        console.log(anyArr4[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
const anyArr5: any[] = [0, 11, false, 33, true, 'false', false, '77', 88, 99];

for (let i = 0; i < anyArr5.length; i++) {
    if (typeof anyArr5[i] === 'number') {
        console.log(anyArr5[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
const anyArr6: any[] = ['000000', 11, false, 33, true, 'false', false, '77', 88, '999999'];

for (let i = 0; i < anyArr6.length; i++) {
    if (typeof anyArr6[i] === 'string') {
        console.log(anyArr6[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
const anyArr7: any[] = [];

anyArr7[0] = 'aaa';
anyArr7[1] = 1;
anyArr7[2] = 2;
anyArr7[3] = true;
anyArr7[4] = 'bbb';
anyArr7[5] = '333';
anyArr7[6] = false;
anyArr7[7] = 4;
anyArr7[8] = true;
anyArr7[9] = 'false';


for (let i = 0; i < anyArr7.length; i++) {
    console.log(anyArr7[i]);

}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


// - Дано 2 масиви з рівною кількістю об'єктів. Масиви:
class User {
    id: number;
    name: string;
    age: number;
    status: boolean;
}

class Client {
    user_id: number;
    country: string;
    city: string;
}

class UserPlusClient {
    id: number;
    name: string;
    age: number;
    status: boolean;
    address?: Client;
}

// interface User {
//     id: number;
//     name: string;
//     age: number;
//     status: boolean;
// }
//
// interface Client {
//     user_id: number;
//     country: string;
//     city: string;
// }
//
// class UserPlusClient implements User, Client {
//     id: number;
//     name: string;
//     age: number;
//     status: boolean;
//     user_id: number;
//     country: string;
//     city: string;
// }

let usersWithId: User[] = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let clientsWithId: Client[] = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id". Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

const usersClients: UserPlusClient[] = [];

for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < clientsWithId.length; j++) {
        if (usersWithId[i].id === clientsWithId[j].user_id) {
            usersClients[i] = usersWithId[i];
            usersClients[i]["address"] = clientsWithId[j];
            break;
        }
    }
}

console.log(usersClients);