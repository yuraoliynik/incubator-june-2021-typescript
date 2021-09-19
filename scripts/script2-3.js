// ---------------ДОП---------------
//
// - функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
function replace(array, index) {
    var cellValue = array[index];
    array[index] = array[index + 1];
    array[index + 1] = cellValue;
    return array;
}
var arr = [9, 8, 0, 4];
console.log(replace(arr, 0));
arr = [9, 8, 0, 4];
console.log(replace(arr, 1));
arr = [9, 8, 0, 4];
console.log(replace(arr, 2));
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
var n1 = '    Harry       Potter      ';
var n2 = '    Ron        Whisley      ';
var n3 = '    Hermione       Granger      ';
function normName(nameInString) {
    return nameInString.split(' ').filter(function (item) { return item != ''; }).join(' ');
}
console.log(normName(n1));
console.log(normName(n2));
console.log(normName(n3));
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
function replaceZero(arrayOfnumbers) {
    for (var i = arrayOfnumbers.length; i >= 0; i--) {
        if (arrayOfnumbers[i] === 0) {
            arrayOfnumbers.splice(i, 1);
            arrayOfnumbers.push(0);
        }
    }
    return arrayOfnumbers;
}
var arr2 = [1, 0, 6, 0, 3];
var arr3 = [0, 1, 2, 3, 4];
var arr4 = [0, 0, 1, 0];
console.log(replaceZero(arr2));
console.log(replaceZero(arr3));
console.log(replaceZero(arr4));
