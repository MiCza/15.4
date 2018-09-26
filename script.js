// 1
const h = 'Hello';
const w = 'World';
const together =() => `${h} ${w}`;
console.log(together())

// 2
const multiply =(a, b = 1) =>  a * b;
console.log(multiply(4))

// 3
const average = (...args) => args.reduce((accumulator, currentValue) => accumulator + currentValue)/args.length;

// 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

// 5
const data = [1, 4, 'Iwona', false, 'Nowak']
const [,,firstName,,secondName] = data
console.log(firstName, secondName);
console.log(`${firstName} ${secondName}`);