// - створити функцію яка приймає масив та виводить його
var arr = [1, 2, 3, 4, 5];
// console.log(Array.isArray(arr));
function arrLog(array) {
    console.log(array);
}
arrLog(arr);
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNumber(num1, num2, num3) {
    var minNum = num1;
    if (minNum > num2) {
        minNum = num2;
    }
    if (minNum > num3) {
        minNum = num3;
    }
    console.log(minNum);
}
minNumber(10, 20, 5);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumber(num1, num2, num3) {
    var maxNum = num1;
    if (maxNum < num2) {
        maxNum = num2;
    }
    if (maxNum < num3) {
        maxNum = num3;
    }
    console.log(maxNum);
}
maxNumber(10, 20, 5);
// - створити функцію яка повертає найбільше число з масиву
function maxNumOfArr(arrayNumbers) {
    var maxNum = arrayNumbers[0];
    for (var _i = 0, arrayNumbers_1 = arrayNumbers; _i < arrayNumbers_1.length; _i++) {
        var num = arrayNumbers_1[_i];
        if (maxNum < num) {
            maxNum = num;
        }
    }
    return maxNum;
}
var arrNums = [20, 30, 2, 4, 6, 70, 54];
console.log(maxNumOfArr(arrNums));
// - створити функцію яка повертає найменьше число з масиву
function minNumOfArr(arrayNumbers) {
    var minNum = arrayNumbers[0];
    for (var _i = 0, arrayNumbers_2 = arrayNumbers; _i < arrayNumbers_2.length; _i++) {
        var num = arrayNumbers_2[_i];
        if (minNum > num) {
            minNum = num;
        }
    }
    return minNum;
}
arrNums = [20, 30, 2, 4, 6, 70, 54];
console.log(minNumOfArr(arrNums));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumNumsOfArr(arrayNumbers) {
    var sumNums = 0;
    for (var _i = 0, arrayNumbers_3 = arrayNumbers; _i < arrayNumbers_3.length; _i++) {
        var num = arrayNumbers_3[_i];
        sumNums += num;
    }
    return sumNums;
}
var arr2 = [10, 4, 5, 5];
console.log(sumNumsOfArr(arr2));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function averageOfArrNums(arrayNumbers) {
    return sumNumsOfArr(arrayNumbers) / arrayNumbers.length;
}
console.log(averageOfArrNums(arr2));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.
function fillEmptyArray(emptyArrayNumber, numberOfElements) {
    for (var i = 0; i < numberOfElements; i++) {
        emptyArrayNumber.push(Math.round(Math.random() * 100));
    }
    console.log(emptyArrayNumber);
}
var arr3 = [];
fillEmptyArray(arr3, 10);
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function arrayOfPropertyName(arrayOfObject) {
    var arrOfPropName = [];
    for (var _i = 0, arrayOfObject_1 = arrayOfObject; _i < arrayOfObject_1.length; _i++) {
        var obj = arrayOfObject_1[_i];
        for (var propName in obj) {
            if (arrOfPropName.indexOf(propName) === -1) {
                arrOfPropName.push(propName);
            }
        }
    }
    return arrOfPropName;
}
var arr4 = [{ name: 'Dima', age: 13 }, { model: 'Camry' }];
console.log(arrayOfPropertyName(arr4));
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function arrayOfValues(arrayOfObject) {
    var arrOfVal = [];
    for (var _i = 0, arrayOfObject_2 = arrayOfObject; _i < arrayOfObject_2.length; _i++) {
        var obj = arrayOfObject_2[_i];
        for (var propName in obj) {
            arrOfVal.push(obj[propName]);
        }
    }
    return arrOfVal;
}
console.log(arrayOfValues(arr4));
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
function sumArrays(arrayNum1, arrayNum2) {
    var lengthOfArray = arrayNum1.length;
    if (lengthOfArray > arrayNum2.length) {
        lengthOfArray = arrayNum2.length;
    }
    var arr = [];
    for (var i = 0; i < lengthOfArray; i++) {
        arr.push(arrayNum1[i] + arrayNum2[i]);
    }
    return arr;
}
var arr5 = [1, 2, 3, 4];
var arr6 = [2, 3, 4, 5];
console.log(sumArrays(arr5, arr6));
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
var arr7 = ['a', 'b', 'c'];
for (var i = 1; i < 4; i++) {
    arr7.push(i);
}
console.log(arr7);
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
var arr8 = [1, 2, 3];
var arr8Revers = [];
for (var i = arr8.length - 1; i >= 0; i--) {
    arr8Revers.push(arr8[i]);
}
console.log(arr8Revers);
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
for (var i = 4; i < 7; i++) {
    arr8.push(i);
}
console.log(arr8);
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
var arr9 = [1, 2, 3];
for (var i = 4; i < 7; i++) {
    arr9.unshift(i);
}
console.log(arr9);
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
var arr10 = [1, 2, 3, 4, 5];
for (var i = 0; i < 3; i++) {
    arr10.shift();
}
console.log(arr10);
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
var arr11 = [1, 2, 3, 4, 5];
for (var i = 1; i < 4; i++) {
    arr11.pop();
}
console.log(arr11);
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
var arr12 = [1, 2, 3, 4, 5];
arr12.push('a');
arr12.push('b');
arr12.push('c');
console.log(arr12);
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
var arr13 = [1, 2, 3, 4, 5, 110, 40, 55, 32, 5];
for (var _i = 0, arr13_1 = arr13; _i < arr13_1.length; _i++) {
    var num = arr13_1[_i];
    if (num % 2 === 0) {
        console.log(num);
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
var arr14 = [];
for (var _a = 0, arr13_2 = arr13; _a < arr13_2.length; _a++) {
    var num = arr13_2[_a];
    arr14.push(num);
}
console.log(arr14);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
var charArr = ['a', 'b', 'c'];
var str = '';
for (var i = 0; i < charArr.length; i++) {
    str += charArr[i];
}
console.log(str);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
var charArr2 = ['a', 'b', 'c'];
var str2 = '';
var j = 0;
while (j < charArr2.length) {
    str2 += charArr2[j];
    j++;
}
console.log(str2);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
var charArr3 = ['a', 'b', 'c'];
var str3 = '';
for (var _b = 0, charArr3_1 = charArr3; _b < charArr3_1.length; _b++) {
    var char = charArr3_1[_b];
    str3 += char;
}
console.log(str3);