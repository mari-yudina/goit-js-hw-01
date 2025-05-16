// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
//   }


// Методи рядків
// -  slice
// -  toLowerCase / toUpperCase
// -  includes
// -  startWith / endWith
// -  indexOf
// -  trim





// const user = "Alice Franco";
// const str = user.slice(0, 3);
// console.log(str); //Ali


// const user = "Alice Franco";
// const str = user.slice();
// console.log(str); //Alice Franco


//  const user = "Alice Franco";
//  const str = user.slice(1);
//  console.log(str); //lice Franco

//  const user = "Alice Franco";
//  const str = user.slice(-3);
//  console.log(str); //nco

// const user = "Alice Franco";
// const str = user.slice(2, 7);
// console.log(str); //ice F



// const user = "Alice Franco";
// console.log(user.toLowerCase()); //alice franco


// const user = "Alice Franco";
// console.log(user.toUpperCase()); //ALICE FRANCO




// const user = "Alice Franco";
// console.log(user.includes("li")); //true

// const user = "Alice Franco";
// console.log(user.includes("lalala")); //false

// const user = "Alice Franco";
// console.log(user.includes("ali")); //false




// const user = "Alice Franco";
// console.log(user.startsWith("Al")); //true

// const user = "Alice Franco";
// console.log(user.startsWith("l")); //false

//  const user = "Alice Franco";
//  console.log(user.endsWith("co")); //true

//  const user = "Alice Franco";
//  console.log(user.endsWith("liu")); //false




//   const user = "Alice Franco";
//  console.log(user.indexOf("c")); //3

//   const user = "Alice Franco";
//  console.log(user.indexOf("A")); //0

//    const user = "Alice Franco";
//  console.log(user.indexOf("ujh")); //-1




//   const user = "   Alice Franco   ";
//  console.log(user.trim()); // "Alice Franco"




// let link = "https://my-site.com/about";
// if(!link.endsWith("/")){
//     link += "/";
// }
// console.log(link); //https://my-site.com/about/




// let link = "https://my-site.com/about";
// if(!link.endsWith("/") && link.includes("my-site")){
//    link += "/";
    
//  }
//  console.log("ok");




// const blacklistedWord1 = "spam";
// const blacklistedWord2 = "sale";
// const string1 = "Hello spam";
// const string2 = "Biggest SALE";
// const string3 = "#fatlive";
// console.log(string1.includes(blacklistedWord1)); //true
// console.log(string1.includes(blacklistedWord2)); //false
// console.log(string3.includes(blacklistedWord1)); //false
// console.log(string3.includes(blacklistedWord2)); //false
// console.log(string2.includes(blacklistedWord1)); //false
// console.log(string2.includes(blacklistedWord2)); //false

// const normString = string2.toLowerCase();
// console.log(normString.includes(blacklistedWord2)); //true




// console.log("Before")
// for(let i = 0; i < 5; i++){
//   console.log(i); // 0 1 2 3 4  
// }
// console.log("after")


// console.log("Before")
// for(let i = 10; i >= 0; i--){
//   console.log(i); // 10 9 8 7 6 5 4 3 2 1 0  
// }
// console.log("after")


// const str = "Alice"
// for(let i = 0; i < str.length; i++){
//   console.log(str[i]); //  A l i c e 
// }


//  const str = "Alice"
//  for(let i = 0; i < str.length; i++){
//     if(str[i] === "i"){
//         break;
//     }
//    console.log(str[i]); //  A l
// }




//  let a = 10;
//  const b = a++;
// console.log("a", a); // 11
//  console.log("b", b); // 10


// let a = 10;
// const b = ++a;
// console.log("a", a); // 11
// console.log("b", b); //11


//  let a = 10;
//  const b = a--;
// console.log("a", a); // 9
//  console.log("b", b); // 10


// let a = 10;
// const b = --a;
// console.log("a", a); // 9
// console.log("b", b); // 9



// console.log("Befor");
// let counter = 0;
// while (counter < 5) {
//     console.log(counter); // 0 1 2 3 4
//     counter++;
// }
// console.log("after");


// console.log("Befor");
// let a = 10;
// do {
//   console.log(a); // 10
//   a++; 
// }
// while (a < 6)
// console.log("after");




// const a = 20;
// const b = 100;
//  for(let i = a; i <= b; i++){
     
//    console.log(i); // 20 -- 100
//  }


// const a = 20;
// const b = 100;
//  for(let i = a; i <= b; i++){
//    if(i % 10 === 0) {
//    console.log(i); // 20 30 40 50 60 70 80 90 100
//    } 
//  }


//  const a = 20;
// const b = 100;
//  for(let i = a; i <= b; i++){
//    if(!(i % 10)) {
//    console.log(i); // 20 30 40 50 60 70 80 90 100
//    } 
//  }


//   const a = 20;
// const b = 100;
//  for(let i = b; i >= a; i--){
//    if(!(i % 10)) {
//    console.log(i); // 100 90 80 70 60 50 40 30 20
//    } 
//  }


// const min = 0;
// const max = 5;
// let sum = 0;
// for(let i = min; i <= max; i++){
//     if(i % 2 === 0) {
//         sum += i ;
//     } 
//   }
// console.log(sum); // 6


// const min = 0;
// const max = 5;
// let sum = 0;
// for(let i = min; i <= max; i++){
//     if(i % 2 !== 0) {
//         sum += i ;
//     } 
//   }
// console.log(sum); // 9


const min = 0;
const max = 5;
let sum = 0;
for(let i = min; i <= max; i++){
    if(i % 2 !== 0) {
        continue;
    } 
    console.log("la", i); // "la 0" "la 2" "la 4" 
    
    }

