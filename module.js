// Задание 7.1 CALL

function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person1 = { name: 'Alice', age: 25 };
const person2 = { name: 'Bob', age: 35 };
const person3 = { name: 'Charlie', age: 28 };

printInfo.call(person1); // Name: Alice, Age: 25
printInfo.call(person2); // Name: Bob, Age: 35
printInfo.call(person3); // Name: Charlie, Age: 28

// Задание 7.2 CALCULATE

function calculate(a, b, operator) {
    const operations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => y !== 0 ? x / y : "Ошибка: деление на ноль"
    };
    
    return operations[operator] ? operations[operator](a, b) : "Ошибка: неизвестный оператор";
}

console.log(calculate.apply(null, [5, 3, "-"]));  // 2
console.log(calculate.apply(null, [4, 2, "*"]));  // 8
console.log(calculate.apply(null, [10, 2, "/"])); // 5
console.log(calculate.apply(null, [10, 0, "/"])); // Ошибка: деление на ноль

// Задание 7.3 FILTER AND MAP

const users = [
    { name: 'Ivan', age: 15 },
    { name: 'Anna', age: 22 },
    { name: 'Oleg', age: 17 },
    { name: 'Mariya', age: 30 },
    { name: 'Dmitry', age: 18 }
];

const adults = users.filter(user => user.age >= 18);
console.log('Пользователи старше 18 лет:', adults);

const names = users.map(user => user.name);
console.log('Имена всех пользователей:', names);

// Задание 7.4 BIND

function setFullName(fullName) {
    this.fullName = fullName;
}

const person = {
    name: 'John',
    age: 30
};

const setPersonFullName = setFullName.bind(person);
setPersonFullName("John Smith");

console.log(person);
console.log(person.fullName);

// Задание 7.5 UNIQUE

function getUniqueSortedNumbers(numbers) {
    return [...new Set(numbers)].sort((a, b) => a - b);
}
const numbers = [5, 2, 8, 2, 3, 5, 1, 8, 9, 1, 4];
const result = getUniqueSortedNumbers(numbers);
console.log(result);

