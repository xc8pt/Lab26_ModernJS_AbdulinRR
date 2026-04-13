/*
/// 6.2. Деструктуризация массивов
console.log("\n=== Деструктуризация массивов ===");
const colors = ["red", "green", "blue"];
// kakashke
const color1 = colors[0];
const color2 = colors[1];
console.log(color1, color2);
// new
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);
//
const [primary, , tertiary] = colors;
console.log(primary, tertiary);
//
const [c1, c2, c3, c4 = "yellow"] = colors;
console.log(c4);
*/
/// 6.3. Деструктуризация объектов
/*
console.log("Деструктуризация объектов");
const user = {
    name: "Alice",
    age: 25,
    city: "Moscow",
}
*/
// kakaschke
/*
const userName = user.name;
const userAge = user.age;
console.log(userName, userAge);
*/
// new
/*
const { name, age, city} = user;
console.log(name, age, ciry);
*/
// Переименование при деструктуризации:
/*
const { name, fullName, age: years } = user;
console.log(fullName, years);
*/
// Значения по умолчанию:
/*
const {name: personName, country = "Russia" } = user;
console.log(personName, country);
*/

/// Деструктуризация в параметрах функций
/*
console.log("Деструктуризация в параметрах");
// kakaschke
function printUserOld(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`City: ${user.city}`);
}
// new
function printUser({ name, age, city }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`City: ${city}`);
}
//
printUserOld(user);
console.log();
printUser(user);
*/

/// 6.5. Практическое задание
/*
// 1
console.log("Практическое задание");
const product = {
    name: "Молоко",
    price: 99.9,
    category: "Молочная продукция",
    inStock: 100
}
// 2
const productName = product.name;
const productPrice = product.price;
const productCategory = product.category;
const productInStock = product.inStock;
// 3
function printProduct({ name, price, category, inStock }) {
    console.log(`Name: ${name}`);
    console.log(`Price: ${price}`);
    console.log(`Category: ${category}`);
    console.log(`InStock: ${inStock}`);
}
// 4
console.log(productName, productPrice, productCategory, productInStock);
console.log("---");
printProduct(product);
*/

/// 7.2. Spread оператор для массивов
/*
console.log("Spread для массивов");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Объединение массивов:
const combined = [...arr1, ...arr2];
console.log("Обьединённый массив:", combined);
// Копирование массива:
const copy = [...arr1];
console, log("Копия массива:", copy);
// Добавление элементов:
const extended = [0, ...arr1, 7, 8];
console.log("Расширенный массив:", extended);
*/

// 7.3
/*
console.log("Spread для объектов");
const person = {
    name: "Rinat",
    age: 30,
}
const address = {
    city: "Volshsky",
    street: "Mira",
}
const fullInfo = {...person, ...address };
console.log("Полная информация:", fullInfo);

const personCopy = { ...person };
console.log("Копия объекта:", personCopy);

const updated = { ...person, age: 31, occupation: "Developer" };
console.log("Обновлённый объект:", updated);
*/

// 7.4
/*
console.log("Rest оператор");

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Сумма 1,2,3:", sum(1, 2, 3));
console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

const numbers = [10,20,30,40,50];
const [first, second, ...rest] = numbers;
console.log("Первое число:", first);
console.log("Второе число:", second);
console.log("Остальные числа:", rest);
*/

// 7.5 Практическое задание
/*
// 1
const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log(arr1)
console.log(arr2)
// 2
const fullArr = [...arr1, ...arr2];
console.log(fullArr)
// 3
function findMax(...num) {
    return num.reduce((total, num) => total = Math.max(num), 0);
}
console.log(findMax(1,2,3,4,5))
// 4
const student = {
    name: "Rinat",
    age: 30,
}
const address = {
    city: "Volshsky",
    street: "Mira",
}
const fullInfo = {...student, ...address };
console.log(fullInfo);
*/

// Шаг 8. Модули (Import/Export)
/*
import {greet, add, PI} from "./utils.js";
console.log("Модули");
console.log(greet("Rinat"));
console.log("5 + 3 = ", add(5,3));
console.log("Значение PI:", PI);

import { multiply as умножить } from "./utils.js";
console.log("4 * 7 =", умножить(4,7));

import * as Utils from "./utils.js";
console.log(Utils.greet("Vali"));
console.log("Умножение:", Utils.multiply(3,9));
*/

// 8.5. Практическое задание
/*
// 4
import {square, cube, E} from "./math.js";
console.log(square(5, 2));
console.log(cube(5));
console.log(E);
*/

// 9.2. Создание промиса
/*
console.log("Промисы");
//
const simplePromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Операция выполнена успешно!");
    } else {
        reject("Произошла ошибка!");
    }
});
simplePromise
    .then((result) => console.log("Результаты:", result))
    .catch((error) => console.log("Ошибка", error));
//
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${ms} миллисекунд`);
        }, ms);
    });
}
delay(1000)
    .then((message) => console.log(message));
//
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: "Rinat Abdulin",
                    email: "brolike636@gmail.com",
                });
            } else {
                reject("Неверный ID пользователя");
            }
        }, 1500);
    });
}
fetchUserData(1)
    .then((user) => console.log("Пользователь:", user))
    .catch((error) => console.log("Ошибка:", error));
//
function step1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Шаг 1 завершен"), 500);
    });
}
function step2(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершен`), 500);
    });
}
function step3(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершен`), 500);
    });
}
step1()
    .then((result1) => step2(result1))
    .then((result2) => step3(result2))
    .then((finalResult) => console.log("Финальный результат:", finalResult))
    .catch((error) => console.log("Ошибка в цепочке:", error));
*/

// 9.3. Практическое задание
/*
const Inventory = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Операция выполнена успешно!");
    } else {
        reject("Произошла ошибка!");
    }
});
Inventory
    .then((result) => console.log("Результаты:", result))
    .catch((error) => console.log("Ошибка", error));

function checkInventory() {
    return new Promise((resolve, reject) => {
        if (tovar > 0) {
            resolve({
                id: tovar,
                name: "Moloko",
            });
        } else {
            reject(`На складе нету товара: Moloko`);
        }
    });
};
*/

// Шаг 10. Async/Await
/*
async function greet() {
    return "Привет!";
}
greet().then((message) => console.log(message));

function getWeather() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ temp: 22, condition: "Солнечно" });
        }, 1000);
    });
};

async function showWeather() {
    console.log("Загрузка погоды...");
    const weather = await getWeather();
    console.log(`Температура: ${weather.temp}C, ${weather.condition}`);
}
showWeather();
*/

// Обработка ошибок с try/catch:
/*
async function fetchData(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Ошибка при загрузке данных");
            } else {
                resolve({ data: "Важные данные" });
            }
        }, 800);
    });
}
async function getData() {
    try {
        const result = await fetchData(false);
        console.log("Успешно:", result.data);

        const finalResult = await fetchData(true);
        console.log("Это не выполнится");
    } catch (error) {
        console.log("Поймана ошибка:",error);
    }
}
getData();
*/
// Последовательное выполнение:
/*
async function cookDinner() {
    console.log("Начинаем готовить...");

    const pasta = await delay(1000).then(() => "Паста готова");
    console.log(pasta);

    const sauce = await delay(500).then(() => "Соус готов");
    console.log(sauce);

    const salad = await delay(1000).then(() => "Салат готов");
    console.log(salad);

    return "Ужин готов!";
}
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${ms} миллисекунд`);
        }, ms);
    });
}
cookDinner().then((result) => console.log(result));
// Параллельное выполнение с Promise.all:
async function cookDinnerFast() {
    console.log("Готовим всё одновременно...");

    const [pasta, sauce, salad] = await Promise.all([
        delay(1000).then(() => "Паста готова"),
        delay(500).then(() => "Соус готов"),
        delay(700).then(() => "Салат готов"),
    ]);

    console.log(pasta, sauce, salad);
    return "Ужин готов. 'Садитесь жрать, пожалуйста!'"
}
*/

// 10.3. Практическое задание
/*
async function processOrder() {
    console.log("Начинаем работу...");

    const st1 = await delay(1000).then(() => "Проверяем наличие товара");
    console.log(st1);

    const st2 = await delay(500).then(() => "Проводим расчёт стоимости");
    console.log(st2);

    const st3 = await delay(1000).then(() => "Подтверждение заказа");
    console.log(st3);

    return "Заказ выполнен";
}
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${ms} миллисекунд`);
        }, ms);
    });
}
processOrder().then((result) => console.log(result));
*/

// Шаг 11. Fetch API - Работа с REST API
/*
async function getUsers() {
    try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!responce.ok) {
            throw new Error(`HTTP ошибка! Статус: ${responce.status}`);
        }
        const users = await responce.json();
        console.log("Первые 3 пользователя:");
        users.stile(0,3).forEach((user) => {
            console.log(`- ${user.name} (${user.email})`);
        });
    } catch (error) {
        console.log(`Ошибка при загрузке пользователей:`, error.message);
    }
}
getUsers(1,2,3);
*/
//Получение одного пользователя:
/*
async function getUserById(id) {
    try {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await responce.json();
        console.log(`Пользователь №${id}:`);
        console.log(`Имя: ${user.name}`);
        console.log(`Город: ${user.address.city}`);
        console.log(`Компания: ${user.company.name}`);
    } catch (error) {
        console.log(`Ошибка: ${error.message}`);
    }
}
getUserById(1);
*/
// POST-запрос (создание данных):
/*
async function createPost() {
    try {
        const newPost = {
            title: "Моя первая запись",
            body: "Это содержимое моей первой записи в блоге",
            userId: 1
        };
        const responce = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        });
        const createPost = await responce.json();
        console.log("Создана новая запись:");
        console.log("ID:", createdPost.id);
        console.log("Заголовок:", createdPost.title);
    } catch (error) {
        console.log("Ошибка при создании записи:", error.message);
    }
}
createPost();
*/
// Шаг 12. Optional Chaining и Nullish Coalescing
/*
const user1 = {
    name: "Rinat",
    address: {
        city: "Volzchky",
        street: "Mira",
    },
};
const user2 = {
    name: "Alesha",
};
const city1 = user2.address && user2.address.city;
console.log("Город (старый способ):", city1);

const city2 = user2.address?.city;
console.log("Город (новый способ):", city2);

const street = user1.address?.street;
console.log("Street:", street);
*/
// Optional chaining с методами:
/*
const admin = {
    name: "Admin",
    permissions: {
        canDelete: () => true,
    },
};
const guest = {
    name: "Гость"
};
console.log("Админ может удалять?", admin.permissions?.canDelete?.());
console.log("Гость может удалять?", guest.permissions?.canDelete?.());
*/
// Optional chaining с массивами:
/*
const company = {
    name: "Tech Corp",
    employees: [
        { name: "Rinat", role: "Developer" },
        { name: "Vlad", role: "Designer" },
    ],
};

const startup = {
    name: "New Startup",
};

console.log("Первый сотрудник:", company.employees?.[0]?.name);
console.log("Первый сотрудник стартапа:", startup.employees?.[0]?.name);
*/
// 12.3. Nullish Coalescing (??)
/*
const value1 = 0;
const value2 = "";
const value3 = false;
const value4 = null;
const value5 = undefined;

console.log(`value1 || "default:`, value1 || "default");
console.log(`value2 || "default:`, value2 || "default");
console.log(`value3 || "default:`, value3 || "default");

console.log(`value1 ?? "default:`, value1 ?? "default");
console.log(`value2 ?? "default:`, value2 ?? "default");
console.log(`value3 ?? "default:`, value3 ?? "default");
console.log(`value4 ?? "default:`, value4 ?? "default");
console.log(`value5 ?? "default:`, value5 ?? "default");
*/
// Практический пример:
/*
function displayUserSettings(settings) {
    const theme = settings?.theme ?? "light";
    const fontSize = settings?.fontSize ?? 14;
    const notifications = settings?.notifications ?? true;

    console.log("Настройки пользователя:");
    console.log("Тема:", theme);
    console.log("Размер шрифта:", fontSize);
    console.log("Уведомления:", notifications);
}
displayUserSettings({ theme: "dark", fontSize: 16 });
displayUserSettings({ notifications: false });
displayUserSettings({});
*/
// Комбинирование операторов:
/*
const apiResponse = {
    data: {
        user: {
            profile: {
                settings: {
                    language: "ru",
                },
            },
        },
    },
};
const language = apiResponse?.data?.user?.profile?.settings?.language ?? "en";
console.log("Язык:", language);

const emptyResponse = {};
const defaultLanguage = emptyResponse?.data?.user?.profile?.settings?.language ?? "en";
console.log("Язык по умолчанию:", defaultLanguage);
*/

// 12.4. Практическое задание
const order = {
  customer: {
    name: "Rinat Abdulin",
    email: "brolike636@gmail.com"
  },
  shipping: {
    address: "г. Волжский, ул.Мира 147",
    city: "Волжский",
    zipCode: null
  },
  payment: {
    method: "Банковская карта",
    status: "Оплачено"
  }
};

function displayOrder(order) {
  const customerName = order?.customer?.name ?? "Не указано";
  const customerEmail = order?.customer?.email ?? "Не указано";

  const shippingAddress = order?.shipping?.address ?? "Не указано";
  const shippingCity = order?.shipping?.city ?? "Не указано";
  const shippingZip = order?.shipping?.zipCode ?? "Не указано";

  const paymentMethod = order?.payment?.method ?? "Не указано";
  const paymentStatus = order?.payment?.status ?? "Не указано";

  console.log("=== Информация о заказе ===");
  console.log(`Покупатель: ${customerName}`);
  console.log(`Email: ${customerEmail}`);
  console.log(`Адрес доставки: ${shippingAddress}`);
  console.log(`Город: ${shippingCity}`);
  console.log(`Индекс: ${shippingZip}`);
  console.log(`Способ оплаты: ${paymentMethod}`);
  console.log(`Статус оплаты: ${paymentStatus}`);
}
displayOrder(order);