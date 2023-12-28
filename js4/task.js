// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
 let calculate =  (a, b) => console.log(a * b);
     calculate(5, 10);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let calculates = (r, b) => console.log(r * b);
    calculates(5, Math.PI);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (h, r) => console.log(h * r);
    cylinder(10, 10);
// - створити функцію яка приймає масив та виводить кожен його елемент
 let massif = (array)=>{for (let i = 0; i <array.length ; i++)
    console.log(array[i])
  }
massif ([1,2,3]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraph=(array) =>{
    text = "Lorem";
    console.log(text)
}
paragraph()
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let x =(array) => {
        ul = "li";
    for (let i = 0; i < 3 ; i++) {
        console.log(ul)
    }
}
x()
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let x1 =(array) => {
    ul = "li";
    for (let i = 0; i < count ; i++) {
        console.log(ul)
    }
}
count = 2
x1()
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mas1 =(array)=>{for (let i = 0; i <array.length ; i++) {
    console.log(array[i])
}
}
mas1 ([1,"lorem",true]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let mas2 =(array)=>[
    {id: 20},
    {name:"Max"},
    {age:30}
];
console.log(mas2())



function getMoneyRemaining (bankAccount, banknoteDenomination=100) {
    return bankAccount % banknoteDenomination
}
console.log(getMoneyRemaining(1437, 20));
console.log(getMoneyRemaining(1250, 50));
console.log(getMoneyRemaining(534));


function getInitials(name,lastName){
    return name[0]+lastName[0]
}
let initials= getInitials("Alice", "Green")
console.log(initials)
let initial=getInitials( "Bob", "Smith")
console.log(initial)