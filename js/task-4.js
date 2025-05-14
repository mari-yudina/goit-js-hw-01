// const hours = 14;
// const minutes = 0;
// let time;
// if(minutes > 0){
//     time = `${hours} h. ${minutes} min.`
    
// } else {
//     time = `${hours} h.`
// }
// console.log(time);




// const hours = 14;
// const minutes = 10;
// const message = minutes > 0 ? `${hours} h. ${minutes} min.` : `${hours} h.`;
// console.log(message);




// const dedline = 5;
// if(dedline === 0){
//     console.log("Today");  
// } else if(dedline === 1){
//     console.log("Tomorrow");
//   } else if(dedline === 2){
//     console.log("Overmorrow");
//       } else {
//         console.log("Date in the future");
//           }



// const dedline = 5;
//  switch(dedline) {
//      case 0:
//          console.log("Today");
//          break;
//      case 1:
//              console.log("Tomorrow");
//              break;
//      case 2:
//                  console.log("Overmorrow");
//                  break;
//                  default:
//                      console.log("Date in the future");
//  }






// const user = "alice";
// switch(user) {
//     case "Petya":
//         console.log("case 1");
//         break;
//     case "Alice":
//             console.log("case 2");
//             break;
//     case "Yura":
//                 console.log("case 3");
//                 break;
//                 default:
//                     console.log("default");
// }




// const option = 4;
// let message = "";
//  switch(option) {
//      case 1:
//         message = "зможете забрати завтра";
//          break;
//      case 2:
//             message = "курєр доставить";
//              break;
//      case 3:
//             message = "буде відправлена сьогодні";
//                  break;
//                  default:
//                     message = "вам передзвонять" ;
//  }
//  console.log(message);



//  const sub = "vip";
//  let canConnect;
// if(sub === "pro" || sub === "vip") {
//     canConnect = true;
// } else {
//     canConnect = false;
// }
// console.log(canConnect);



function isNumberInRange(start, end, number) {

  
  
    return start <= number && end >= number;
 
}
consol.log(isNumberInRange(10, 30, 17));



// const sub = "vip";
// const canConnect = sub === "pro" || sub === "vip" ? true : false;
// console.log(canConnect);


// const sub = "vip";
// const canConnect = sub === "pro" || sub === "vip";
// console.log(canConnect);



//  const isOnline = true;
//  const isFriend = true;
//  const isDnD = false;
//   const canOpenCart = isOnline && isFriend && !isDnD;
//  console.log("Can open", canOpenCart);



// console.log(Boolean(false));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(""));


// console.log(Boolean(true));
// console.log(Boolean(3.14));
// console.log(Boolean(-3.14));
// console.log(Boolean("hello"));
// console.log(Boolean("false"));

// console.log(5 && 4); //4
// console.log(null && 3); //null
// console.log(false && 3); //false

// console.log(false || 3); //3
// console.log(false || null); //null 
// console.log("lalala" || null); //lalala

// console.log(!false); //true
// console.log(!5); //false








