
/*Обьєкти

Створення обьєкта 
Вкладені властивості 
Доступ до властивостей через крапку 
Доступ до вкладених властивостей 
Доступ до властивостей через квадратні дужки 
Зміна значення властивостей 
Додавання властивостей
*/



//---------   Доступ до вкладених властивостей
/*const playlist = {
  name: "My playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavorite: true,
  userName: "Alice",
    skills: {
      html: true,
      css: true,
      js: false
    },
    numbers: [4, 65, 32]
  };
console.log(playlist["rating"]); // 5 -покаже значення ключа
//-------    Доступ до властивостей через крапку
playlist.name = "New playlist";
console.log(playlist.name); //New playlist
playlist.lalala = "Super puper"
console.log(playlist.lalala); //Super puper
//--------    Доступ до властивостей через квадратні дужки
console.log(playlist.skills.css);//true
playlist.skills.css = false; 
console.log(playlist.skills.css);//false
console.log(playlist.numbers[1]); //65
*/

/*const arr = [1, 2, 3];
arr.lalala = "tototo";
console.log(arr);//(3) [1, 2, 3, lalala: 'tototo']
*/


/*function foo(){
console.log("lalala");
}
foo.lalala = "tototo"
console.dir(foo);//lalala: "tototo"
                 //arguments: null
                 //caller: null
                 //length: 0
                 //name: "foo"
                 //prototype: {}
                 //[[FunctionLocation]]: task-m4.js:48
                 //[[Prototype]]: ƒ ()
                 //[[Scopes]]: Scopes[1]
*/



/*const a = {x: 1, y: 2} ;               
const b = a;
a.x = 100;
console.log("a", a); //a {x: 100, y: 2}
console.log("b", b); //b {x: 100, y: 2}
console.log(a === b); //true
const c = {x: 1, y: 2} ;
console.log(a === c); //false - обьєкти як і масиви порівнюються за посиланням
*/

/*const userName = "Alice";
const aje = 25
const obj = {
  userName: userName,//=== userName
  aje: aje//=== age
}
console.log(obj); //{userName: 'Alice', aje: 25}
*/

/*function foo(name, age){
  return {
    name,
    age
  }
}
console.log("Petya", 35);//Petya 35
*/

/*const inputName = "color";
const inputNameTwo = "color";
const obj = {
  inputName: "red",
  [inputNameTwo]: "red"
}
console.log(obj); //{inputName: 'red', color: 'red'} - inputName != "color",[inputNameTwo] = "color"
*/


// 2 - Цикл for...in
// // 3 - Метод Object.keys()
// // 4 - Метод Object.values()

/*const feedbacl = {
  good: 3,
  neutral: 5,
  bad: 10
}
let total = 0;
for(const key in feedbacl){
total += feedbacl[key];
console.log(feedbacl[key]);//3 
                           // 5 
                           // 10
}
console.log(total); //18
*/


/*const feedbacl = {
  good: 3,
  neutral: 5,
  bad: 10
}
const keys = Object.keys(feedbacl);
console.log(keys);//(3) ['good', 'neutral', 'bad']
const values = Object.values(feedbacl);
console.log(values); //(3) [3, 5, 10];
*/


/*const animal = {
  legd: 4
}
const dog = Object.create(animal);
dog.name = "Patron";
for(const key in dog){
  if(dog.hasOwnProperty(key)){
  console.log(key, dog[key]); //name Patron
}
}
*/

/*const animal = {
  legd: 4
}
const dog = Object.create(animal);
dog.name = "Patron";
for(const key in dog){
  console.log(key); // name //не треба так робити
                    //legd
 }
*/


/*const animal = {
  legd: 4
}
const dog = Object.create(animal);
dog.name = "Patron";
const keys = Object.keys(dog);
console.log(keys); //['name']
for(const key of keys){
  console.log(dog[key]); //Patron
}
*/


/*const user = {
  name: "Alice",
  age: 20,
  hobby: "html",
  premium: true
};
user.mood = "happy";
user.hobby = "skidiving";
user.premium = false;
const keys = Object.keys(user);
for(const key of keys){
console.log(`${key}: ${user[key]}`);// name: Alice
                                    // age: 20
                                    // hobby: skidiving
                                    // premium: false
                                    // mood: happy
}
*/

/*const user = {
  name: "Alice",
  age: 20,
  hobby: "html",
  premium: true
};
const userone = {
  name: "Petya",
  age: 25,
  hobby: "css",
  premium: true
};
function foo(obj){
obj.mood = "happy";
obj.hobby = "skydiving";
obj.premium = false;
const keys = Object.keys(obj);
for(const key of keys){
console.log(`${key}: ${obj[key]}`);//name: Alice
                                   //age: 20
                                   //hobby: skydiving
                                   //premium: false
                                   //mood: happy
                                   //name: Petya
                                   //age: 25
                                   //hobby: skydiving
                                   //premium: false
                                   //mood: happy
}
}
foo(user);
foo(userone);
*/


/*const salaries = {
  Alise: 160,
  Yura: 130,
  Petya: 100
}
function summa (obj){
let sum = 0;
const values = Object.values(obj);
for(const value of values){
sum += value;
}
return sum;
}
console.log(summa (salaries));//390
*/


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


//------    Масив об’єктів - використовується Для опису групи сутностей 





// for...of проходить через кожен об'єкт у масиві colors.
// color.hex додається в hexColors.
// color.rgb додається в rgbColors.
/*const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
*/


// for...of проходить через кожен об'єкт у масиві colors.
// color.hex додається в hexColors.
// color.rgb додається в rgbColors.
// Після завершення циклу hexColors та rgbColors містять усі відповідні значення
/*const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
*/


// Використовуємо for...of, щоб пройти по кожному об'єкту у products.
// Перевіряємо, чи product.name збігається з productName.
// Якщо так, повертаємо product.price.
// Якщо після завершення циклу продукт не знайдено, повертаємо null.
/*function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (const product of products) {
 	if(product.name === productName) {
	return product.price;
	}
}
return null;
}
console.log(getProductPrice("Radar"));   // 1300
console.log(getProductPrice("Scanner")); // 2700
console.log(getProductPrice("Tablet"));  // null
*/


// Правильна перевірка hasOwnProperty(propName) – функція перевіряє, чи кожен об'єкт містить властивість propName.
// Збереження значення product[propName] у allValues – додаємо значення потрібної властивості у масив.
// Завершення циклу перед поверненням результату – функція проходить усі об'єкти, а не завершується після першого збігу.
/*function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  const allValues = [];

  for (const product of products) {
    if (product.hasOwnProperty(propName)) {
      allValues.push(product[propName]);
    }
  }

  return allValues;
}

console.log(getAllPropValues("name"));     // ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("price"));    // [1300, 2700, 400, 1200]
console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
console.log(getAllPropValues("category")); // [] (оскільки такого ключа немає)
*/

// Проходження по масиву products – for...of перевіряє кожен товар у масиві.
// Перевірка назви – якщо product.name === productName, обчислюється загальна вартість.
// Повернення результату – якщо товар знайдено, повертається price * quantity; якщо ні – рядок "Товар не знайдено!".
/*function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
 
    for (const product of products) {
    if (product.name === productName) {
     return product.name + "-" + (product.price * product.quantity);

    }
    }
return `Товар ${productName} не знайдено!`;
}
console.log(calculateTotalPrice("Radar"));     // ["Radar", "Scanner", "Droid", "Grip"]
console.log(calculateTotalPrice("Droid"));    // [1300, 2700, 400, 1200]
console.log(calculateTotalPrice("Blaster"));
*/


//-----------   Методи об'єкта - значення властивості — це функція



// Свойство potions — пустой массив, куда будут добавляться зелья.
// Метод getPotions() — возвращает строку "List of all available potions".
// Метод addPotion(potionName) — возвращает строку "Adding <potionName>", где <potionName> — переданное название зелья.
/*const atTheOldToad = {
  potions: [],

  getPotions() {
    return "List of all available potions";
  },

  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
};

console.log(atTheOldToad.getPotions()); // "List of all available potions"
console.log(atTheOldToad.addPotion("Healing Potion")); // "Adding Healing Potion"
*/


// Метод getPotions() теперь возвращает this.potions вместо фиксированной строки.
// this.potions указывает на свойство potions объекта atTheOldToad, позволяя динамически получать список зелий.
// Теперь при вызове atTheOldToad.getPotions() возвращается актуальный список зелий.
/*const atTheOldToad = {
  potions: ["Healing Potion", "Invisibility Potion", "Mana Potion"],

  getPotions() {
    return this.potions; // Теперь метод возвращает массив зелий
  }
};

console.log(atTheOldToad.getPotions()); 
// ["Healing Potion", "Invisibility Potion", "Mana Potion"]
*/


// Метод getPotions() теперь возвращает this.potions вместо фиксированной строки.
// this.potions указывает на свойство potions объекта atTheOldToad, позволяя динамически получать список зелий.
// Теперь при вызове atTheOldToad.getPotions() возвращается актуальный список зелий.
/*const atTheOldToad = {
  potions: ["Healing Potion", "Invisibility Potion", "Mana Potion"],

  getPotions() {
    return this.potions; // Теперь метод возвращает массив зелий
  }
};

console.log(atTheOldToad.getPotions()); 
// ["Healing Potion", "Invisibility Potion", "Mana Potion"]
*/


// Замінено potions на this.potions, щоб отримувати дані з поточного об'єкта.
// Виправлено prise на price, щоб правильно звертатися до властивості ціни.
// Оптимізовано відступи та форматування для кращої читабельності.
/*const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    this.potions.push(newPotion);
  },

  getTotalPrice() {
    let total = 0;
    for (const potion of this.potions) { // Використання this.potions
      total += potion.price; // Виправлення ключа price
    }
    return total;
  },
};

console.log(atTheOldToad.getTotalPrice()); // 980
*/


// Порівняння potion.name === oldName – тепер перевіряється саме назва зілля.
// Оновлення potion.name = newName – тепер змінюється назва в конкретному об'єкті.
// Тестовий виклик updatePotionName() – показує, що назва успішно змінюється.
/*const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName; // Оновлення назви зілля
      }
    }
  },
};

atTheOldToad.updatePotionName("Speed potion", "Swift potion");
console.log(atTheOldToad.getPotions());
// [{ name: "Swift potion", price: 460 }, { name: "Stone skin", price: 520 }]
*/