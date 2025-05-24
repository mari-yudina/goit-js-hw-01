// Масиви

//1 - Створення масиву
//2 - Доступ до єлементів
//3 - Перевизначення значення елемента
//4 - Довжина масиву
//5 - Індекс останнього елемента
//6 - Перевизначення

//for...of --- використовується коли індекс елементу не потрібен



//1 - Створення масиву


// const courses = ["HTML", "CSS", "JS", "React", "PostgreSQL"];
// const lastIndex = courses.length - 1;
// console.log(courses[0]); //HTML
// console.log(courses[1]); //CSS
// console.log(courses[2]); //JS
// console.log(courses.length); //5

// console.log(lastIndex); //4


// const courses = ["HTML", "CSS", "JS", "React", "PostgreSQL"];
// courses[2] = "Node.js";
// console.log(courses); //(5) ['HTML', 'CSS', 'Node.js', 'React', 'PostgreSQL']




//2 - Доступ до єлементів


// let a = 5;
// let b = a;
// console.log("a", a); //a 5
// console.log("b", b); //b 5
// b++;
// console.log("b", b); //b 6

//  let a = [1, 2, 3];
//  let b = a;
//  console.log("a", a); //a (3) [1, 2, 3]
//  console.log("b", b); //b (3) [1, 2, 3]
//  a[0] = 100;
//   console.log("a", a); //a (3) [100, 2, 3]
//  console.log("b", b); //b (3) [100, 2, 3]

//   let a = [1, 2, 3];
//  let b = a;
//   a[0] = 100;
//   console.log(a === b); //true

//    let a = [1, 2, 3];
//  let b = a;
//  const c = [1, 2, 3];
//   a[0] = 100;
//   console.log(a === c); //false




// Методи масиву

// - join() - перетворює на рдочок в дужках символ який розділяє ел-ти масиву
// - split() - перетворити рядок на масив, розбивши його за вказаним роздільником
// - slice -повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його
// - concat() - (arr1, arr2, ..., arrN) використовується для об'єднання двох або більше масивів.
// - indexOf() - повертає індекс елемента, якщо він знайдений, або -1, якщо елемент не знайдений
// - push() - для додавання одного або більше елементів у кінець масиву
// - pop()
// - includes() - повертає логічне значення true, якщо елемент знайдено в масиві, і false, якщо елемент відсутній.

// const courses = ["HTML", "CSS", "JS", "React", "PostgreSQL"];
// const str = courses.join("-");
// console.log(str); //HTML-CSS-JS-React-PostgreSQL
// const str = courses.join("");
// console.log(str); //HTMLCSSJSReactPostgreSQL

// const courses = ["HTML", "CSS", "JS", "React", "PostgreSQL"];
// const str = courses.join(" ");
// const arr = str.split(" ");
// console.log(str); //HTML CSS JS React PostgreSQL
// console.log(arr); //(5) ['HTML', 'CSS', 'JS', 'React', 'PostgreSQL']


// const courses = ["HTML", "CSS", "JS", "React", "PostgreSQL"];
// const str = courses.join(" ");
// const arr = str.split("");
// console.log(str); //HTML CSS JS React PostgreSQL
// console.log(arr); //(28) ['H', 'T', 'M', 'L', ' ', 'C', 'S', 'S', ' ', 'J', 'S', ' ', 'R', 'e', 'a', 'c', 't', ' ', 'P', 'o', 's', 't', 'g', 'r', 'e', 'S', 'Q', 'L']


//  const courses = ["HTML", "CSS", "JS", "React", "PostgreSQL"];
//  const str = courses.join(" ");
//  const arr = str.split(",");
//  console.log(str); //HTML CSS JS React PostgreSQL
//  console.log(arr); //['HTML CSS JS React PostgreSQL']

//   const courses = ["HTML", "CSS", "JS", "React", "PostgreSQL"];
//  const arr = courses.slice(0, 3);
//  const brr = courses.slice(1);
//  const crr = courses.slice();
//  console.log(arr); //(3) ['HTML', 'CSS', 'JS']
//  console.log(brr); //(4) ['CSS', 'JS', 'React', 'PostgreSQL']
//  console.log(crr); //(5) ['HTML', 'CSS', 'JS', 'React', 'PostgreSQL']
//  console.log(arr === courses); //false

//   const courses = ["HTML", "CSS", "JS", "React", "PostgreSQL"];
//  const arr = [1, 2, 3];
//  const result = courses.concat(arr);
//  const resultB = courses.concat(arr, ["lala", "toto"]);
//  const resultC = courses.concat(["lala", "toto"], arr);
//  console.log(result); //(8) ['HTML', 'CSS', 'JS', 'React', 'PostgreSQL', 1, 2, 3]
//  console.log(resultB); //(10) ['HTML', 'CSS', 'JS', 'React', 'PostgreSQL', 1, 2, 3, 'lala', 'toto']
//  console.log(resultC); //["HTML","CSS","JS","React","PostgreSQL","lala","toto",1,2,3]
 

//   const courses = ["HTML", "CSS", "JS", "React", "PostgreSQL"];
//  const index = courses.indexOf("React"); 
//  const indexB = courses.indexOf("lalala");
//  const indexC = courses.indexOf("html");
//  console.log(index); //3
//  console.log(indexB); //-1
//  console.log(indexC); //-1

//  const courses = ["HTML", "CSS", "JS", "React", "PostgreSQL"];
//    courses.push("Node.js");
// console.log(courses); //(6) ['HTML', 'CSS', 'JS', 'React', 'PostgreSQL', 'Node.js']
  

    // const courses = ["HTML", "CSS", "JS", "React", "PostgreSQL"];
    // const a = courses.push("Node.js");
    //  console.log(a); //6

// const courses = ["HTML", "CSS", "JS", "React", "PostgreSQL"];
// const a = courses.pop();
// console.log("a", a); //a PostgreSQL
// console.log("corses", courses); //corses (4) ['HTML', 'CSS', 'JS', 'React']




// const friends = ["Rachel", "Monica", "Phoebe", "Joey", "Chandler"];
// for(let i=0; i < friends.length; i++){
// console.log(friends[i]); //Rachel
//                          // Monica
//                          //Phoebe
//                          // Joey
//                          // Chandler
// }


// const friends = ["Rachel", "Monica", "Phoebe", "Joey", "Chandler"];
// for(let i=0; i < friends.length; i++){
//  friends[i] += "!";
// console.log(friends[i]); //Rachel!
//                          // Monica!
//                          //Phoebe!
//                          // Joey!
//                          // Chandler!
// }


// const friends = ["Rachel", "Monica", "Phoebe", "Joey", "Chandler"];
// for(let i=0; i < friends.length; i++){
//  friends[i] = friends[i] + "!!!";
// }
//  console.table(friends);//    (index)        Value
//                         //    0	          'Rachel!!!'
//                         //    1	          'Monica!!!'
//                         //    2	          'Phoebe!!!'
//                         //    3	          'Joey!!!'
//                         //    4	          'Chandler!!!'
//                         // Arrey(5)


// const friends = ["Rachel", "Monica", "Phoebe", "Joey", "Chandler"];
// for(const item of friends){
//  console.log(item);//Rachel
//                    //Monica
//                    //Phoebe
//                    //Joey
//                    //Chandler
//  }

// const friends = ["Rachel", "Monica", "Phoebe", "Joey", "Chandler"];
// console.log(friends.includes("Joey")); //true
// console.log(friends.includes("vasya")); //false




// const value = "8 10";
// const arr = value.split(" ");
// const res = arr[0] * arr[1];
// console.log(res); //80

// const value = "8 10";
//  const arr = value.split(" ");
//  const res = (arr[0] + arr[1]) * 2;
//  console.log(res); //1620 - конкатенація (помилка)

//  const value = "8 10";
//  const arr = value.split(" ");
//  const res = arr[0] * 2 + arr[1] * 2;
//  console.log(res); //36

//  const value = "8 10";
//   const arr = value.split(" ");
//   const res = (Number(arr[0]) + Number(arr[1])) * 2;
//   console.log(res); //36

//  const value = "8 10";
//   const arr = value.split(" ");
//   const res = (+arr[0] + +arr[1]) * 2;
//   console.log(res); //36

// const fruits = ["apple", "lemon", "banana"];
// for(let i = 0; i < fruits.length; i++){
// console.log(`${i + 1}: ${fruits[i]}`)
// }

// const fruits = ["apple", "lemon", "banana"];
// for(let i = 0; i < fruits.length; i++){
// console.log(`${i++}: ${fruits[i]}`) //0: lemon
//                                     //2: undefined
//                                     //(не те що нам потрібно!!!)
// }

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for(const number of numbers){
    
//     if(number % 2 === 0){
//         total += number;
        
//     }
// }
// console.log(total); //86

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for(const number of numbers){
//       не  false
//     if(!(number % 2)){
//         total += number;
        
//     }
// }
// console.log(total); //86 (number % 2=0 = false)


//  const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
//  let total = 0;
//  for(const number of numbers){
      
//      if(number % 2 !== 0){
//         continue;
//          } 
//         total += number;
//  }
//  console.log(total); //86

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "38001234567,38008509476,38004639782,38009724721";
// const namesArr = names.split(",");
// const pfonesArr = phones.split(",");
// for(let i = 0; i < namesArr.length; i++){
// console.log(`${namesArr[i]}: ${pfonesArr[i]}`);//Jacob: 38001234567
//                                                //William: 38008509476
//                                                //Solomon: 38004639782
//                                                //Artemis: 38009724721
// }

// const string = "Welcome to the future";
// const arr = string.trim().split(" ");
// const result = arr.slice(1, arr.length - 1)
// console.log(result); //(2) ['to', 'the']


// const string = "Welcome to the future";
// const arr = string.trim().split(" ");
// const result = arr.slice(1, arr.length - 1).join(" ");
// console.log(result); //to the


// const values = [2, 17, 94, 1, 23, 37]
// let min;
// for(let i = 0; i < values.length; i++){
//   if(i === 0) {
//     min = values[i];
//   } else if (values[i] < min){
//     min = values[i];
//   }
// }
// console.log(min); //1

// ----------   Конспект ----------

//  const fruits = ["apple", "plum", "pear", "orange"];
//  console.log(fruits); //(4) ['apple', 'plum', 'pear', 'orange']
//  const firstElement = fruits[0];
//  const secondElement = fruits[1];
//  const lastElement = fruits.pop();
//  console.log(firstElement); //apple
//  console.log(secondElement); //plum
//  console.log(lastElement); //orange

// const fruits = ["apple", "plum", "pear", "orange"];
//   console.log(fruits); //(4) ['apple', 'plum', 'pear', 'orange']
//  fruits[1] = "peach";
//   fruits[3] = "banana";
//   console.log(fruits); //(4) ['apple', 'peach', 'pear', 'banana']


// function getOrderQuantity(order) {
// return order.length;
// }
// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"])); //4


// function getLastElementMeta(array) {
//     const index = array.length - 1; 
//     const lastElement = array[index]; 
    
//     return [index, lastElement]; 
// }
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); //(2) [3, 'banana']


// function getExtremeElements(array) {
//     const firstElement = array[0];
//     const lastElement = array[array.length - 1];
//   return [firstElement, lastElement];  
// }
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); //(2) ["Earth", "Venus"]

// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];

// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true

// if(emptyArray) {
// 	console.log("1", "if is in progress") // "1", "if is in progress"
// } else {
// 	console.log("2","else is not performed")
// }

// if(nonEmptyArray) {
// 	console.log("3","if is in progress")  //"3","if is in progress"
// } else {
// 	console.log("4","else is not performed")
// }

// const array= [false];
// const result = array ? "A" : "B";
// console.log(result); //A - масив навіть[] = true




// - join() - перетворює на рдочок в дужках символ який розділяє ел-ти масиву

// function transformString(string) {
// 	const words = string.split("_");
// 	return words.join("-");
// }
// console.log(transformString("user_age")); // "user-age"
// console.log(transformString("price_per_droid")); // "price-per-droid"


// function getLength(array) {
//     const arr = array.join("");
//      console.log(array); //(5) ['Mango', 'hurries', 'to', 'the', 'train']
//      return  arr.length;
//    }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"])); //22



// - split() - перетворити рядок на масив, розбивши його за вказаним роздільником

// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]

// function calculateEngravingPrice(message, pricePerWord) {
//   const mes =  message.split(" ").length;
//   const totalPrise = mes * pricePerWord;
// return totalPrise;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); //100




// slice() -повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); //(2) ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); //(4) ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); //(2) ['Mars', 'Venus']
//console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, (fruits.length - 1));
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls); //["apple", "plum"]
// console.log(nonExtremeEls); //["plum", "pear", "orange"]
// console.log(lastThreeEls); //["pear", "orange", "banana"]





// concat() - (arr1, arr2, ..., arrN) використовується для об'єднання двох або більше масивів.


// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);

// console.log(firstArray); // ["Mercury", "Venus"];
// console.log(secondArray); // ["Mars", "Jupiter"];
// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients); //(6) ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Peach', 'Houston']




// indexOf() - повертає індекс елемента, якщо він знайдений, або -1, якщо елемент не знайдений

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// function getSlice(array, value) {
//     for(let i = 0; i < array.length; i++){
//   if(array.indexOf(value) === -1){
// return array.slice(array.length);
//     } 
//       return array.slice(0, (array.indexOf(value) + 1));  
// }
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); //(2) ["Mango", "Poly"]




// - push() - для додавання одного або більше елементів у кінець масиву

// const planets = ["Earth", "Mars", "Venus"];
// planets.push("Jupiter");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// planets.push("Saturn", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

// const tags = [];
// for(let i = 0; i < 3; i += 1) {
// 	tags.push(`tag-${i}`);
// }
// console.log(tags); // ["tag-0", "tag-1", "tag-2"]

// function createArrayOfNumbers(min, max) {
//     let minMax = [];
//     for(let i = min; i <= max; i++){
//      minMax.push(i);
//     }
//     return minMax;
// }
// console.log(createArrayOfNumbers(14, 17)); //(4) [14, 15, 16, 17]




//-----  Ітерація по масиву -----

// const planets = ["Earth", "Mars", "Venus"];
// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);//Earth
//                           //Mars
//                           //Venus
// }


// function calculateTotalPrice(order) {
//     let sum = 0;
// for(let i = 0; i < order.length; i++){
// sum += Number(order[i]);
// }
// return sum;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116


// function getEvenNumbers(start, end) {
//     let startEnd = [];
//     for(let i = start; i <= end; i++){
//         if(i % 2 === 0){
//             startEnd.push(i);
//     }
//        }
// return startEnd;
// }
// console.log(getEvenNumbers(3, 11)); //(4) [4, 6, 8, 10]




// - includes() - повертає логічне значення true, якщо елемент знайдено в масиві, і false, якщо елемент відсутній.

// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false


// const fruits = ["apple", "banana", "orange"];
// if (fruits.includes("banana")) {
//   console.log("The array has an element banana"); //The array has an element banana
// } else {
//   console.log("Array does not contain banana element");
// }

// function checkStorage(storage, item) {
//     const newItem = item.toLowerCase();
//     for(let i = 0; i < storage.length; i++){
// if(storage.includes(newItem) === true){
//     return `${newItem} is available to order!`;
// }
//     }
// return 'Sorry! We are out of stock!';
// }
// console.log(checkStorage(["apple", "plum", "pear"], "PluM")); // "plum is available to order!"


// function getCommonElements(array1, array2) {
//     let commonElements = []; // Створюємо порожній масив для спільних елементів

//     for (let i = 0; i < array1.length; i++) { // Перебираємо елементи першого масиву
//         if (array2.includes(array1[i])) { // Перевіряємо, чи елемент є в другому масиві
//             commonElements.push(array1[i]); // Додаємо його до масиву
//         }
//     }

//     return commonElements; // Повертаємо масив зі спільними елементами
// }

// console.log(getCommonElements([1, 3, 5], [0, 8, 5, 3])); // Виведе: [3, 5]
// console.log(getCommonElements([10, 20, 30], [20, 40, 50])); // Виведе: [20]
// console.log(getCommonElements([7, 8, 9], [1, 2, 3])); // Виведе: [] (немає спільних елементів)




//-------  Цикл for...of   ---------

// const planets = ["Earth", "Mars", "Venus"];
// for (const planet of planets) {
//   console.log(planet);//Earth
//                       //Mars
//                       //Venus
// }


// function calculateTotalPrice(order) {
//     let sum = 0;

//     for (const item of order) { // Проходимо кожен елемент у масиві
//         sum += item; // Додаємо значення до загальної суми
//     }

//     return sum; // Повертаємо загальну суму
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // Виведе: 1116
// console.log(calculateTotalPrice([100, 200, 300])); // Виведе: 600
// console.log(calculateTotalPrice([])); // Виведе: 0 (якщо масив порожній)}




//---------   Функції (частина 2)   ----------
// - Псевдомасив arguments

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// sum(2, 5); //Arguments(2) [2, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// у неї є деякі властивості масивів, наприклад length;
// у неї є можливість звернутися до елемента за індексом;
// у неї немає методів для роботи з масивом;
// її можна перебирати за допомогою циклів.

// function multiply() { //повертає результат множення будь-якої кількості аргументів
//   let total = 1;

//   for (const arg of arguments) {
//     total *= arg;
//   }

//   return total;
// }
// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

//---------   Array.from() - створить масив із псевдомасиву

// function foo() {
//   // У змінній args буде повноцінний масив з усіх аргументів
//   const args = Array.from(arguments);
// 	return args.join("-");
// }
// console.log(foo(1, 2, 3)); // Поверне "1-2-3"

// -----   toReversed(); // Перевертаємо масив і повертаємо його

// function createReversedArray() {
//     const args = Array.from(arguments); // Перетворюємо `arguments` у масив
//     return args.toReversed(); // Перевертаємо масив і повертаємо його
// }
// console.log(createReversedArray(12, 85, 37, 4)); // Виведе: [4, 37, 85, 12]
// console.log(createReversedArray("a", "b", "c")); // Виведе: ["c", "b", "a"]



// function createReversedArray() {
//     const args = Array.from(arguments); // Перетворюємо `arguments` у масив
//     let reversedArray = []; // Створюємо порожній масив для перевернутих значень

//     for (let i = args.length - 1; i >= 0; i--) { // Починаємо з останнього елемента
//         reversedArray.push(args[i]); // Додаємо елементи у зворотному порядку
//     }

//     return reversedArray; // Повертаємо перевернутий масив
// }
// console.log(createReversedArray(12, 85, 37, 4)); // Виведе: [4, 37, 85, 12]
// console.log(createReversedArray("apple", "banana", "cherry")); // Виведе: ["cherry", "banana", "apple"]
// console.log(createReversedArray(100, 200, 300)); // Виведе: [300, 200, 100]


//    function calculateTax(amount, taxRate = 0.2) {
//     return amount * taxRate;
//    }
//    console.log(calculateTax(200, 0.3)); //60

//  function foo(a, b, c) {
//  console.log(arguments);
//  }
// foo(1, 2, 3); //Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// foo(10, 11, 12, 13, 14); //Arguments(5) [10, 11, 12, 13, 14, callee: ƒ, Symbol(Symbol.iterator): ƒ]


// псевдомасив arguments та Array.from(лала) - перевіряє чи лала масив чи ні

//   function foo(a, b, c) {
//   const arr = Array.from(arguments);
//   console.log(arguments); //Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//   console.log(arr); //(3) [1, 2, 3]
//   console.log("arguments", Array.isArray(arguments)); //arguments false (немасив)
// console.log("arr", Array.isArray(arr));  //arr true (масив)
// }
//  foo(1, 2, 3); 


// const add = function(){
//     console.log("add"); //add
// }
// add() //--- not  !!!


// function add(){
//     const arr = Array.from(arguments);
//     let total = 0;
//    for(const item of arr){
//     total +=item;
//   }
//   return total;
// }
// console.log(add(1, 2, 3)); //6
// console.log(add(10, 20, 30, 4, 5)); //69


// function calAverage(){
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++){
//     total += arguments[i];
//     }
//     return total / arguments.length;
// }
// console.log(calAverage(1, 2, 3)); //2
// console.log(calAverage(10, 12, 31, 5)); //14.5
// console.log(calAverage(1, 22, 4, 7, 9, 8)); //8.5


// function fnA(){
//    console.log("fnA"); 
// }
// function fnB(){
//    console.log("fnB"); 
// }
// function fnC(){
//    console.log("fnC"); 
// }
//  console.log("befor fnA"); 
//  fnA();
//   console.log("after fnA"); 
//   console.log("befor fnB"); 
//  fnB();
//   console.log("after fnB"); 
//   console.log("befor fnC"); 
//  fnC();
//   console.log("after fnC"); 
//     befor fnA
//     fnA
//     after fnA
//     befor fnB
//     fnB
//     after fnB
//     befor fnC
//     fnC
//     after fnC


// function logItems(items){
// for(let i = 0; i < items.length; i++){
// console.log(`${i + 1} - ${items[i]}`); 
// }
// }  
// logItems(["Mango", "Poly", "Ajax"]);// 1 - Mango
//                                     // 2 - Poly
//                                     // 3 - Ajax
 


// function printInfo(names, phones){
// const nameArr = names.split(",");
// const phoneArr = phones.split(",");
// for(let i = 0; i < nameArr.length; i++){
// console.log(nameArr[i], phoneArr[i]); //Jacob 89004683649
//                                       //William 89006985335
//                                       //Solomon 89002344332
//                                       //Artemis 89007689854
// }

// }
// printInfo("Jacob,William,Solomon,Artemis",
//     "89004683649,89006985335,89002344332,89007689854");



// -----    padEnd/padStart(a, "b") - (а) - перевіряє довжину рядка ,якщо менше додає (b)


// function formatTime(totalMinutes){
//     const hours = Math.floor(totalMinutes / 60);
//    const minutes = totalMinutes % 60;
//    const doubleHours = String(hours).padStart(2, 0);
//    const doubleMinutes = String(minutes).padStart(2, 0);
// return `${doubleHours}:${doubleMinutes}`
// }
// console.log(formatTime(70)); //01:10
// console.log(formatTime(460)); //07:40
// console.log(formatTime(1441)); //24:01


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function foo(array, count){
//     const res = [];
//     for(let i = 0; i < array.length; i += count){
// const a = array.slice(i, i + count);
// res.push(a);
//     }
//     return res;
// }
// console.log(foo(numbers, 3));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function foo(array, count) {
    const res = [];
    
    for (let i = 0; i < array.length; i += count) {
        const a = array.slice(i, i + count);
        res.push(a);
    }
    
    return res;
}

console.log(foo(numbers, 4)); //(3) [Array(4), Array(4), Array(1)]
                              // 0: (4) [1, 2, 3, 4]
                              // 1: (4) [5, 6, 7, 8]
                              // 2: [9]
                              // length: 3
                              // [[Prototype]]: Array(0)