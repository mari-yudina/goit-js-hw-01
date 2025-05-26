//------  літерал об'єкта.
// 1 - Вкладені властивості + методи масиву
// 2 - Цикл for...in - об'єкт — це не ітерабельна сутність,його не можна перебрати циклами for або for...of
// 3 - Метод Object.keys() - приймає об'єкт і повертає масив ключів його властивостей
// 4 - Метод Object.values() - повертає масив значень його властивостей.





// 1 - Вкладені властивості + методи масиву

/*const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],

  owner: {
    name: "Henry",
    phone: "982-126-1588", 
      email: "henry.carter@aptmail.com",
  }
};

console.log(apartment.tags);*/


/*const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

let ownerName = apartment.owner.name;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};
console.log(apartment);
console.log(ownerName);
ownerName = "Mari"
console.log(ownerName);
console.log(numberOfTags);
console.log(firstTag);
console.log(lastTag);*/


/*const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};
console.log(credentials);*/



//-------  Цикл for...in - об'єкт — це не ітерабельна сутність,його не можна перебрати циклами for або for...of

/*const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  console.log(key); // Ключ
  console.log(book[key]);  // Значення властивості з таким ключем
}*/

/*const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
console.log(keys); //(3) ['descr', 'rating', 'price']
console.log(values); // (3) ['Spacious apartment in the city center', 4, 2153]*/



//---   Метод Object.keys() - приймає об'єкт і повертає масив ключів його властивостей

/*const book = {
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  console.log(key); // Ключ
  console.log(book[key]); // Значення властивості
}*/

/*const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = Object.keys(apartment);
const values = [];

for (const key of keys) {
  values.push(apartment[key]);
}
console.log(values); // (3) ['Spacious apartment in the city center', 4, 2153]
*/


/*const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
function countProps(object) {
  return Object.keys(object).length;
}
console.log(countProps(apartment)); //3
*/

//------   Метод Object.values() - повертає масив значень його властивостей.

/*const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ["title", "author", "rating"]

const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]
*/


/*const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment);
console.log("keys", keys); // keys (3) ['descr', 'rating', 'price']
console.log("values", values); //values (3) ['Spacious apartment in the city center', 4, 2153]
*/


/*const apartment = {
  Max: 2,
  Lara: 4,
  Lena: 3,
};
function countTotalSalary(salaries) {
  let totalSalary = 0;
  for (const salary of Object.values(salaries)) {
    
    totalSalary += salary;
  }
  return totalSalary;
}
console.log(countTotalSalary(apartment)); //9
*/