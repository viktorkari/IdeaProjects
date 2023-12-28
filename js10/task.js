// Стоврити форму з трьома полями для name,username,age та кнопкою. При натисканні на кнопку
// зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму,' +
// ' натиснули кнопку, під формою з'явився блок з вашим об'єктом

// Створення форми
const form = document.createElement("form");
form.id = "myForm";

// Створення полів для імені, користувача та віку
const nameLabel = document.createElement("label");
nameLabel.textContent = "Name:";
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "name";
nameInput.name = "name";
nameInput.required = true;

const usernameLabel = document.createElement("label");
usernameLabel.textContent = "Username:";
const usernameInput = document.createElement("input");
usernameInput.type = "text";
usernameInput.id = "username";
usernameInput.name = "username";
usernameInput.required = true;

const ageLabel = document.createElement("label");
ageLabel.textContent = "Age:";
const ageInput = document.createElement("input");
ageInput.type = "number";
ageInput.id = "age";
ageInput.name = "age";
ageInput.required = true;

// Створення кнопки
const saveButton = document.createElement("button");
saveButton.type = "button";
saveButton.textContent = "Save";
saveButton.addEventListener("click", saveData);

// Додавання полів та кнопки до форми
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(usernameLabel);
form.appendChild(usernameInput);
form.appendChild(ageLabel);
form.appendChild(ageInput);
form.appendChild(saveButton);

// Створення блоку для виведення результатів
const resultDiv = document.createElement("div");
resultDiv.id = "result";

// Додавання форми та блоку до body
document.body.appendChild(form);
document.body.appendChild(resultDiv);

// Функція для обробки кнопки "Save"
function saveData() {
    // Отримання значень з полів форми
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;

    // Створення об'єкта з отриманими значеннями
    const dataObject = {
        name: name,
        username: username,
        age: age
    };

    // Виведення об'єкта в блок результатів
    resultDiv.innerHTML = "<pre>" + JSON.stringify(dataObject, null, 2) + "</pre>";
}

//
// const count = localStorage.getItem("count") ?? 0;
// const block= document.getElementById("count");
// const newResult = (Number(count)+ 1).toString();
//
// block.innerText = newResult;
// localStorage.setItem("count",newResult);
// const resul = document.createElement("div");
// resul.id = "res";
// document.body.appendChild(resul)
// document.body.appendChild(newResult)
