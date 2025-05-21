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

// - join
// - split
// - slice
// - concat
// - indexOf
// - push/pop

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


function getLastElementMeta(array) {
   
const index = array.length - 1;
 fruits = array.pop();
 return `${index}, ${fruits}`
}
console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); //[3, "banana"]