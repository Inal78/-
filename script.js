
// Задание 1 let name = prompt('Ваше имя');
// alert(`Привет ${name}`);

//Задание 2
// const age = +prompt('Год рождения?')
// let result = age - 2024
// alert (`Вам ${result}лет!`)

//Задание 3
// let size = +prompt('Назовите длину стороны квадрата')
// let result = size * 4
// alert (`Периметр квадрата равен ${result}`)

//Задание 4
// let r = +prompt('Назовите радиус окружности')
// let result = r / 3.14
// alert (`Площадь окружности равна ${result}`)

//Задание 5
// let a = +prompt('Напишите расстояние в км между двумя городами')
// let b = +prompt('За какое время вы хотите добраться?')
// let result = a / b 
// alert (`Вам необходимо двигаться со скоростью ${result}км/ч`)

//Задание 6
// const a = +prompt('Введите сумму в доллорах');
// let b = 2;
// let result = a * b
// alert(`На вашем счету ${result}Евро`)

// //Задание 7
// let a = +prompt('Укажите обьем флэшки в ГБ')
// let result = a / 820
// alert(`На вашей флэшке помещается ${result} файла`)




// function sumSalaries(salaries) {
//     let sum = 0
//     for  (let salary of Object.values(salaries)){
//         sum += salary
        
//     }
//     return sum
// }


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// console.log( sumSalaries(salaries) );


// function topSalary(salaries) {
//     let max = 0
//     let maxName = null
    
//     for (const [name, salary] of Object.entries(salaries))
//     if (max < salary) {
//         max = salary
//         maxName = name
//     }
//     return maxName
// }


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 550
//   };

//   console.log(topSalary(salaries));

// const surfaceOfMars = surfaceAreaCalculator(3390)

// const surfaceAreaCalculator = (radius) => {
//     return 4 * 3.14 * square(radius);
// }

// const square = (num) => {
//     return num * num;
// }

// console.log(surfaceOfMars);

// const factorial = (n) => {
//     if (n === 1) {
//         return 1 
//     }
//     else {
//         return n * factorial(n-1)
//     }
// }
// const answer = factorial(3)

// console.log(factorial);


// const func = (a, b, c, ...rest) => {
//    return rest.reduce((ac, item)=> {
//     return ac+item;
//    }, 0);
// };

// console.log(func(1, 2, 3, 4, 5))

// Timer ...
// function Clock ( { template}) {
//     let timer;

//     function render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = "0" + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = "0" + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = "0" + secs

//         let output = template
//         .replace("h", hours)
//         .replace("m", mins)
//         .replace("s", secs);

//         console.log(output);
//     }

//     this.stop = function() {
//         clearInterval(timer);
//     };

//     this.start = function() {
//         render();
//         timer = setInterval(render, 1000);
//     };
// }


// let clock = new Clock({template: 'h:m:s'});
// clock.start();

// function Clock ({template}) {
//     let timer;

//     function render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10)hours = "0" + hours;

//         let mins = date.getMinutes();
//         if (mins < 10)mins = "0" + mins;

//         let secs = date.getSeconds();
//         if (secs < 10)secs = "0" + secs

//         let output = template
//         .replace("h", hours)
//         .replace("m", mins)
//         .replace("s", secs);

//         console.log(output);

//     }
//     this.stop = function() {
//         clearInterval(timer);
//     }

//     this.start = function() {
//         render();
//         timer = setInterval(render, 1000);
//     };
// }

// let clock = new Clock({template: 'h:m:s'});
// clock.start();


// let A = [3, 5, 8];
// let B = [1, 2, 3, 5, 8];
// let C = [];

// function getIntersect(A,B){

//     for ( let i = 0; i < A.length; i++ ){
//         for ( let j = 0; j < B.length; j++ ){
//              if ( A[i] == B[j] ){
//                 C.push(A[i]);
//              }
//         }
//     }
//      return C;
// }

// console.log(getIntersect(A , B)