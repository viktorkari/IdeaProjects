// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function  areax (rectangle) {
    let result = rectangle.a * rectangle.b;
    return result;
}
    let renctangle = { a: 5, b: 10};
    let areaxRes = areax(renctangle);
    console.log(areaxRes);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function  area (circuit) {
    let result = circuit.r * Math.PI;
    return result;
}
   let circuit = { r: 10};
   let areaResult = area(circuit);
   console.log(areaResult);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaofthecylinder (cylinder) {
    let result = cylinder.h * cylinder.r;
    return result;
}
    let cylinder = {h: 10, r:5};
    let areaofthecylinderResult = areaofthecylinder(cylinder);
    console.log(areaofthecylinderResult );

// - створити функцію яка приймає масив та виводить кожен його елемент

function printArrayElements(array){
    array.forEach(function (element){
        console.log(element);
    });
}
let array = [1, 2, 3, 4, 5];
printArrayElements(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(text) {
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
}
let text = "Lorem";
createParagraph(text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList(text) {
    let ul = document.createElement("ul");
    for (let i = 0; i < 3 ; i++) {
        let li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
        document.body.appendChild(ul);
    }
}
let texting = "Lorem";
createList(text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createListing(text1, count) {
    let ul = document.createElement("ul");
    for (let i = 0; i < count; i++) {
        let li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
        document.body.appendChild(ul);
    }
}
let text1 = "Lorem";
let count = 2;
createListing(text1, count);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createListFromArray(arr) {
    let ul = document.createElement("ul");
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.textContent = arr[i];
        ul.appendChild(li);
        document.body.appendChild(ul);
    }
}
let arr = [1, "two", true];
createListFromArray(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function displayObjects(objects) {
    for (let i = 0; i < objects.length; i++) {
        let object = objects[i];
        let block = document.createElement("div");
        let id = document.createElement("p");
        id.textContent = "ID: " + object.id;
        block.appendChild(id);
        let name = document.createElement("p");
        name.textContent = "Name: " + object.name;
        block.appendChild(name);
        let age = document.createElement("p");
        age.textContent = "Age: " + object.age;
        block.appendChild(age);
        document.body.appendChild(block);
    }
}
let objects = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Max", age: 20}
    ]
displayObjects(objects);

// - створити функцію яка повертає найменьше число з масиву

function findMinNumber(array) {
    return Math.min(...array);
}
let numbers = [5, 2, 9, 1, 7];
let minNumber = findMinNumber(numbers);
console.log(minNumber);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let num = [1, 2, 10];
let result = sum(num);
console.log(result);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
let num0 = [11, 22, 33, 44];
swap(num0, 0, 1);
console.log(num0);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchangeRate;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchangeRate = currencyValues[i].value;
            break;
        }
    }
    if (exchangeRate) {
        let exchangedSum = sumUAH / exchangeRate;
        return exchangedSum;
    } else {
        return "Invalid currency";
    }
}
let currencyValues = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];
let exchangedSum = exchange(10000, currencyValues, 'USD');
console.log(exchangedSum);