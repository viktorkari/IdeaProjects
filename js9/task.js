//
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let Block = document.createElement("div");
    Block.classList.add("wrap", "collapse", "alpha", "beta");
    Block.style.backgroundColor = "#3498db";
    Block.style.color = "#ffffff";
    Block.style.fontSize = "16px";
    Block.innerHTML = "<p>Block</p>"
    document.body.appendChild(Block);
    let clonedBlock = Block.cloneNode(true);
    document.body.appendChild(clonedBlock);
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let people = ["Main","Product","About us","Contacts"]
    let ulElement = document.createElement("ul");
    people.forEach(function(item) {
        let liElement = document.createElement("li");
        liElement.textContent = item;
        ulElement.appendChild(liElement);
    });
    document.body.appendChild(ulElement);
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let container = document.createElement("div");
for (let i = 0; i < coursesAndDurationArray.length ; i++) {
    let block = document.createElement("div");
    block.innerHTML = "<p>Title: " + coursesAndDurationArray[i].title + "</p>" +
        "<p>Duration: " + coursesAndDurationArray[i].monthDuration + " months</p>";
    container.appendChild(block);
}
    document.body.appendChild(container);
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let coursesAndDuration = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let i = 0; i < coursesAndDuration.length; i++) {
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    let headingElement = document.createElement("h1");
    headingElement.classList.add("heading");
    headingElement.textContent = coursesAndDuration[i].title;
    let descriptionElement = document.createElement("p");
    descriptionElement.classList.add("description");
    descriptionElement.textContent = "Duration: " + coursesAndDuration[i].monthDuration + " months";
    itemDiv.appendChild(headingElement);
    itemDiv.appendChild(descriptionElement);
    document.body.appendChild(itemDiv);
}
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву ' +
// '<div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок
// та наповнити його інформацією з цього об'єкту
let simpsons = [
    { name: 'Homer', age: 38, job: 'inspector' },
    { name: 'Marge', age: 36, job: 'wife' },
    { name: 'Bart', age: 10, job: 'student' },
    { name: 'Lisa', age: 8, job: 'student' },
    { name: 'Maggie', age: 1, job: 'Baby' }
];
for (let i = 0; i < simpsons.length; i++) {
    let member = document.createElement("div");
    member.classList.add("member");
    member.innerHTML = "<p>Name: " + simpsons[i].name + "</p>" +
        "<p>Age: " + simpsons[i].age + "</p>" +
        "<p>Job: " + simpsons[i].job + "</p>";
    document.body.appendChild(member);
}
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
//     в яких будуть зберігатись значення окремих властивостей, для властивості modules
// зробити список з елементами
let coursesArray = [
    {
        title: 'JavaScript Complex',
        modules: ['Introduction', 'Variables', 'Functions', 'Objects']
    },
    {
        title: 'Java Complex',
        modules: ['Introduction', 'Data Types', 'Control Flow', 'OOP']
    },
    {
        title: 'Python Complex',
        modules: ['Introduction', 'Data Structures', 'Functions', 'Modules']
    },
];
for (let i = 0; i < coursesArray.length; i++){
    let course = document.createElement("div");
    course.classList.add("course");
    let titleElement = document.createElement("h2");
    titleElement.textContent = coursesArray[i].title;
    course.appendChild(titleElement);
    let modules = document.createElement("div");
    modules.classList.add("modules");
    for (let j = 0; j < coursesArray[i].modules.length; j++) {
        let moduleElement = document.createElement("li");
        moduleElement.textContent = coursesArray[i].modules[j];
        modules.appendChild(moduleElement);
    }
    course.appendChild(modules);
    document.body.appendChild(course);
}