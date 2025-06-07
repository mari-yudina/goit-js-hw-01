// Після вивчення матеріалів цього модулю ти:

// розумієш принцип роботи колбек-функцій --- Колбек-функція – це функція,
//                                           яка передається як аргумент до іншої 
//                                           функції і викликається пізніше, 
//                                           коли вона знадобиться.
//  та стрілочних функцій --- Стрілкові функції – це скорочений запис 
//                            звичайних функцій, який зручний для простих операцій.
// вмієш застосовувати ці функції на практиці ---
// знаєш, як працювати з масивом об'єктів ---
// знаєш такі методи масивів:

// - forEach(callback)* Поелементно перебирає масив array
//                    * Викликає колбек-функцію для кожного елемента масиву
//                    * Повертає undefined, навіть якщо явно задати вираз після return
//                    * Використовується для запуску функції на кожному елементі масиву.
// - map() - * Поелементно перебирає оригінальний масив
//           * Не змінює оригінальний масив
//           * Результат роботи колбек-функції записується в новий масив
//           * Повертає новий масив такої ж довжини, як і в масиву, до якого він був застосований
//           * Використовується для перетворення масиву.
// - flatMap() - Метод  аналогічний методу map(), 
//               але застосовується у випадках, коли результат — 
//               це багатовимірний масив, який необхідно «розгладити».
//               * Використовується для роботи з вкладеними масивами.
// - filter() - * Не змінює оригінальний масив.
//              * Поелементно перебирає оригінальний масив.
//              * Повертає новий масив.
//              * Додає в масив, що повертається, елементи, які задовольняють умову колбек-функції.
//              * Якщо колбек повернув , елемент додається в масив, що повертається.true
//              * Якщо колбек повернув , елемент не додається в масив, що повертається.false
//              * Якщо жоден елемент не задовольнив умову, повертає порожній масив.
//              * Використовується для відбору потрібних елементів.
// - find() - * Не змінює оригінальний масив
//            * Поелементно перебирає оригінальний масив
//            * Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true
//            * Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув , метод повертає falseundefined
//            * Використовується для пошуку першого співпадіння.
// - every() - * Не змінює оригінальний масив
//             * Поелементно перебирає оригінальний масив
//             * Повертає , якщо всі елементи масиву задовольняють умовуtrue
//             * Повертає , якщо хоча б один елемент масиву не задовольняє умовуfalse
//             * Перебирання масиву припиняється, якщо колбек повертає false
//             * Використовується для перевірки всіх елементів.
// - some() - * Не змінює оригінальний масив
//            * Поелементно перебирає оригінальний масив
//            * Повертає , якщо хоча б один елемент масиву задовольняє умовуtrue
//            * Повертає , якщо жоден елемент масиву не задовольняє умовуfalse
//            * Перебирання масиву припиняється, якщо колбек повертає true
//            * Використовується для перевірки окремих випадків.
// - reduce() - * Не змінює оригінальний масив
//              * Поелементно перебирає оригінальний масив
//              * Повертає все, що завгодно (об’єкт, масив, рядок, число тощо)
//              * Може замінити функціонал будь-якого іншого перебираючого методу масиву та навіть їх комбінацію
//              * Використовується для підсумкових обчислень.
// - toSorted() - * Сортує вихідний масив
//                * Повертає новий масив
//                * За замовчуванням сортує за зростанням
//                * Використовується для збереження оригінальних даних при сортуванні.
//  вмієш налаштувати свій порядок сортування чисел --- toSorted((a, b) => a - b)
//  та рядків --- toSorted((a, b) => a.localeCompare(b))
// знаєш, як використовувати методів масиву у ланцюжках --- Знаходимо книги з рейтингом > 8, сортуємо їх за автором та отримуємо лише назви
//                                                         const sortedTitles = books
//                                                         .filter(book => book.rating > 8) // Фільтруємо
//                                                         .toSorted((a, b) => a.author.localeCompare(b.author)) // Сортуємо за автором
//                                                         .map(book => book.title); // Отримуємо тільки назви книг



// Функция возвращает строку с сообщением клиенту.
// makePizza

// Завершите код так, чтобы переменная содержала результат 
// выполнения функции, а переменная — ссылку на функцию.
// result makePizza pointer makePizza

/*function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const pointer = makePizza; // Ссылка на функцию
const result = makePizza(); // Вызов функции и сохранение результата

console.log(pointer); // [Function: makePizza]
console.log(result);  // "Your pizza is being prepared, please wait."
*/

// Функция принимает один параметр, название доставляемой пиццы,
//  и возвращает строку с сообщением для клиента.makeMessage pizzaName

// Усовершенствуйте функцию таким образом, чтобы она ожидала 
// второй параметр (параметр) в качестве функции обратного вызова
//  и возвращала результат его вызова. 
//  Функции or будут переданы в качестве обратных вызовов
//   и будут ожидать имя доставленной пиццы в качестве 
//   аргумента.makeMessage callback deliverPizza makePizza makeMessage

/*function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage("Royal Grand", makePizza)); 
//"Pizza Royal Grand is being prepared, please wait..."
console.log(makeMessage("Ultracheese", deliverPizza));
 //"Delivering Ultracheese pizza."
 */

//  Функция имеет два параметра: — название пиццы,
//   и — функция обратного вызова.
//    Во время выполнения вызывает этот обратный вызов,
//     передавая его в качестве аргумента.
//     makePizza pizzaName callback makePizza pizzaName

// Завершите второй вызов функции,
//  передав встроенную функцию обратного вызова 
//  в качестве второго аргумента.
//   Обратный вызов записывает в журнал строку , 
//   где — значение параметра .makePizza(pizzaName, callback)
//   eatPizza(pizzaName) eatPizza "Eating pizza <pizza name>"
//   <pizza name> pizzaName

/*function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`); 
});
// Pizza Royal Grand is being prepared, please wait...
//  Delivering pizza Royal Grand

makePizza("Ultracheese",function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});
// Pizza Ultracheese is being prepared, please wait...
//  Eating pizza Ultracheese
*/

// Функция принимает один параметр — массив чисел,
//  и вычисляет общую сумму его элементов, 
//  которая хранится в переменной и возвращается в результате 
//  работы функции.calculateTotalPrice(orderedItems) orderedItems totalPrice

// Завершите вызов метода, передав ему функцию обратного вызова,
//  которая на каждой итерации прибавляет значение текущего 
//  элемента массива.forEach orderedItems totalPrice

/*function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function(number){
   totalPrice += number;
  });

  return totalPrice;
}
 console.log(calculateTotalPrice([12, 85, 37, 4])); //138
 */


//  Функция принимает массив чисел в качестве своего первого параметра
//   и возвращает новый массив, содержащий только те элементы
//    исходного массива, которые больше значения второго параметра .
//     Если такие значения не найдены, функция возвращает
//      пустой массив.filterArray(numbers, value)numbersvalue

// Рефакторьте функцию так, чтобы вместо использования цикла
//  она использовала метод.for forEach


/*function filterArray(numbers, value) {
    const result = [];
    numbers.forEach(function(number){
          if (number > value) {
            result.push(number);
        }
        
    });
    return result;
}
console.log(filterArray([12, 24, 8, 41, 76], 20)); 
//[24, 41, 76];
*/

/*function classicAdd(a, b, c) {
  return a + b + c;
}
============================
const arrowAdd = (a, b, c) => {
  return a + b + c;
};
*/


// Выполните рефакторинг функции, 
//  чтобы она была объявлена как стрелочная
//   функция.calculateTotalPrice()

//   function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem;
// }

/*const calculateTotalPrice = (quantity, pricePerItem) =>
     {return quantity * pricePerItem;
};*/

// Выполните рефакторинг функции, 
// заменив ее объявление стрелочной функцией. 
// Кроме того, замените переданную в метод 
// функцию обратного вызова на стрелочную функцию.
// calculateTotalPrice(orderedItems) forEach()

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

/*const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach( (item) => {
    totalPrice += item;
  });

  return totalPrice;
};
console.log(calculateTotalPrice([164, 48, 291])); //503
*/

// Замените объявление функции и обратные вызовы для метода 
//  на стрелочные функции.filterArray() forEach()

//  function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

/*const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach( (number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};
*/

// Функция принимает массив чисел и обновляет каждый элемент, 
//  значение которого является четным числом, 
//  добавляя значение параметра, которое в точности является числом.
//  changeEven(numbers, value)numbersvalue

// Рефакторит функцию так, чтобы она стала чистой — 
// она не меняет массив чисел, а создает, заполняет и 
// возвращает новый массив с обновленными значениями.numbers

// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }

/*function changeEven(numbers, value) {
    let newArr = [];
      numbers.forEach( (number) => {
       if (number % 2 === 0) {
            newArr.push(number + value);
        } else {
            newArr.push(number);
        }
    });
     return newArr;
  };
console.log(changeEven([1, 2, 3, 4, 5, 6], 10)); // [1, 12, 3, 14, 5, 16]
*/


// Массив содержит названия планет. Измените код таким образом,
//  чтобы переменная содержала массив,
//   состоящий из длин названий каждой планеты в массиве. 
//   Обязательно воспользуйтесь 
//   этим методом.planetsplanetsLengthsplanetsmap()

  /*const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map(planet => planet.length);
console.log(planetsLengths); // [5, 4, 5, 7]
*/


// Массив содержит коллекцию объектов книги, 
//  каждый из которых содержит свойства , .
//   С помощью метода сделаем так, чтобы переменная содержала массив
//    названий всех книг (свойство ) из массива .
//    books title author rating map() titles title books

 /* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles = books.map(book => book.title);
console.log(titles); 
//(5) ['The Last Kingdom', 'Beside Still Waters', 
// 'The Dream of a Ridiculous Man', 'Redder Than Blood', 'Enemy of God']
*/


// Массив содержит коллекцию объектов книги,
//  каждый из которых содержит свойство, 
//  значением которого является массив жанров.
//   С помощью метода сделаем так, чтобы переменная 
//   содержала массив жанров всех книг (свойство) из массива.
//   books genres flatMap() genres genres books

 /* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = books.flatMap(book => book.genres);
console.log(genres); //(5) ['adventure', 'history', 'fiction', 'horror', 'mysticism']
*/

// Усовершенствуйте стрелочную функцию так,
//  чтобы она возвращала массив адресов
//   электронной почты пользователей (свойство)
//    из массива объектов в параметре.
//    getUserEmails(users)emailusers

/*const getUserEmails = users =>
     users.map(user => user.email);
console.log(getUserEmails([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
]));
*/

// Завершите код так, чтобы переменная содержала массив
//  четных чисел из массива , а переменная —
//   массив нечетных чисел. Обязательно воспользуйтесь 
//   этим методом.evenNumbers numbers oddNumbers filter()

/*const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(evenNumbers); //(5) [24, 82, 36, 18, 52]
console.log(oddNumbers); //(4) [17, 61, 47, 73]
*/

// Массив содержит коллекцию объектов книги,
//  каждый из которых обладает свойствами , , и .
//   С помощью метода измените код следующим 
//   образом:books title author rating filter()

// Переменная становится массивом книг,
//  рейтинг (свойство) которых больше или равен
//   значению переменной .topRatedBooks rating MIN_RATING
// Переменная становится массивом книг, написанных автором,
//  с именем (свойством), которое совпадает со значением
//   в переменной .booksByAuthor author AUTHOR

/*const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);
console.log(topRatedBooks);
console.log(booksByAuthor);
*/


// Усовершенствуйте функцию так, 
// чтобы она возвращала массив пользователей,
//  цвет глаз (свойство) которых совпадает со 
//  значением второго параметра.
//  getUsersWithEyeColour(users, colour) eyeColour colour

/*const getUsersWithEyeColor = (users, color) =>
     users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
],"green"));
*/

// Усовершенствовать код функции для возврата массива 
// пользователей, возраст которых (хранящийся в свойстве)
//  попадает в указанный диапазон от до .
//  getUsersWithAge(users, minAge, maxAge)agemin Age maxAge


/*const getUsersWithAge = (users, minAge, maxAge) => 
 users.filter(user => user.age >= minAge && user.age <= maxAge) ;
console.log(getUsersWithAge([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
],20,30));
*/

// Расширьте функцию так, чтобы она проверяла,
//  все ли пользователи в данный момент активны (свойство),
//   и возвращала либо .isEveryUserActive(users)isActive true false

/*const isEveryUserActive = (users) => users.every(user => user.isActive === true);
console.log(isEveryUserActive([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
])); // false
*/

// Усовершенствуйте функцию так, чтобы она проверяла наличие
//  по крайней мере одного активного пользователя (свойства)
//   и возвращала либо .isAnyUserActive(users)isActive true false

/*const isEveryUserActive = (users) => 
    users.some(user => user.isActive === true);
console.log(isEveryUserActive([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
])); //true
*/


// Игровому сервису необходим функционал для расчета
//  среднего времени пребывания в играх одним игроком.
// Переменная хранит объект, где ключом является имя 
// игрока, а значением — его игровое время.
// Переменная хранит массив значений из объекта,
//  то есть массив игровых времен для всех игроков.
// Значением переменной будет среднее время, 
// проведенное одним игроком в играх.
// players playtimes players averagePlayTime

// Завершите код так, чтобы переменная содержала 
// общее время воспроизведения из массива.
//  Воспользуйтесь этим методом.totalPlayTime playtimes reduce()

/*const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
const totalPlayTime = playtimes.reduce((total, time) =>
    total + time, 0);
const averagePlayTime = totalPlayTime / playtimes.length;

console.log(averagePlayTime); //673
*/


// В переменной , находится массив объектов, 
// каждый из которых обладает свойствами , , 
// и .players name playtime gamesPlayed

// Нашему сервису необходимо рассчитать среднее 
// время, проведенное в одной игре для каждого
//  игрока, и получить общую сумму этих значений
//   времени в переменной . Время для каждого 
//   игрока можно рассчитать, разделив его 
//   время (свойство) на количество игр (свойство)
//   .totalAveragePlaytimePerGame playtime gamesPlayed

/*const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
const totalAveragePlaytimePerGame = 
  players.reduce((total, player) => 
    total + (player.playtime / player.gamesPlayed), 0);

console.log(totalAveragePlaytimePerGame); // 1023
*/

// Усовершенствуйте функцию так, чтобы она вычисляла и
//  возвращала сумму всех средств (свойств) ,
//   которые хранятся пользователями из массива.
//   calculateTotalBalance(users) balance users

/*const calculateTotalBalance = (users) =>
     users.reduce((total, user) => total + user.balance,0);
console.log(calculateTotalBalance([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
])); //20916
*/

// Переменная представляет собой массив чисел,
//  представляющих годы издания книг.
// Переменная представляет собой массив строк,
//  представляющих авторов книг.releaseDates authors

// Завершите код таким образом, чтобы переменная стала копией
//  массива, отсортированного в порядке возрастания,
//   а переменная — копией массива, отсортированного
//    в алфавитном порядке. Воспользуйтесь этим методом.
//    ascendingReleaseDates releaseDates alphabeticalAuthors 
//    authors toSorted()

/*const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates = releaseDates.toSorted();
console.log(ascendingReleaseDates); 
//(7) [1967, 1973, 1984, 1997, 2008, 2012, 2016]
const alphabeticalAuthors = authors.toSorted();
console.log(alphabeticalAuthors); 
//(4) ['Bernard Cornwell', 'Fyodor Dostoevsky', 'Robert Sheckley', 'Tanith Lee']
*/

// Переменная представляет собой массив чисел,
//  представляющих годы издания книг.releaseDates

// В онлайн-библиотеке должны отображаться книги, 
// отсортированные по дате выпуска, в порядке возрастания
//  или убывания. Обновите код так, чтобы переменная 
//  содержала копию массива, отсортированную в порядке 
//  возрастания, а переменная — копию, отсортированную в 
//  порядке убывания.ascendingReleaseDates releaseDates descendingReleaseDates


/*const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);
console.log(ascendingReleaseDates); 
//(7) [1967, 1973, 1984, 1997, 2008, 2012, 2016]
const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
console.log(descendingReleaseDates);
//(7) [2016, 2012, 2008, 1997, 1984, 1973, 1967]
*/

// Переменная представляет собой массив строк,
//  представляющих авторов книг.authors

// В онлайн-библиотеке должны отображаться книги,
//  отсортированные по авторам как в алфавитном, 
//  так и в обратном алфавитном порядке. Завершите код так,
//   чтобы переменная содержала копию массива,
//    отсортированную в алфавитном порядке, 
//    а переменная — копию, отсортированную в обратном
//     алфавитном порядке.authorsInAlphabetOrder authors 
//     authorsInReversedOrder

/*const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = 
authors.toSorted((a,b) => a.localeCompare(b));
console.log(authorsInAlphabetOrder);
//(5) ['Bernard Cornwell', 'Fyodor Dostoevsky', 
// 'Howard Lovecraft', 'Robert Sheckley', 'Tanith Lee']
const authorsInReversedOrder = 
authors.toSorted((a,b) => b.localeCompare(a));
console.log(authorsInReversedOrder);
//(5) ['Tanith Lee', 'Robert Sheckley', 'Howard Lovecraft',
//  'Fyodor Dostoevsky', 'Bernard Cornwell']
*/

// Массив содержит массив объектов книги,
//  каждый из которых обладает свойствами , , и .
//  books title author rating

// Усовершенствуйте код таким образом, чтобы:

// Переменная содержит массив книг, 
// отсортированных по имени автора в алфавитном порядке.
// sortedByAuthorName
// Переменная содержит массив книг, 
// отсортированных по имени автора в обратном алфавитном порядке.
// sortedByReversedAuthorName
// Переменная содержит массив книг, 
// отсортированных по возрастанию рейтинга.
// sortedByAscendingRating
// Переменная содержит массив книг,
//  отсортированных по убыванию рейтинга.
//  sortedByDescendingRating

/*const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];
const sortedByAuthorName = books.toSorted((firstAuthor, secondAuthor ) => 
    firstAuthor.author.localeCompare(secondAuthor.author));
console.log(sortedByAuthorName);
//Переменная содержит массив книг,
//  отсортированных по имени автора в алфавитном порядке
const sortedByReversedAuthorName = books.toSorted((firstAuthor, secondAuthor ) => 
    secondAuthor.author.localeCompare(firstAuthor.author));
console.log(sortedByReversedAuthorName);
//Переменная содержит массив книг,
//  отсортированных по имени автора в обратном алфавитном порядке.
const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);
console.log(sortedByAscendingRating);
//Переменная содержит массив книг, 
// отсортированных по возрастанию рейтинга.sortedByAscendingRating
const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);
console.log(sortedByDescentingRating);
//Переменная содержит массив книг, 
// отсортированных по убыванию рейтинга.
*/

// Массив содержит массив объектов книги,
//  каждый из которых обладает свойствами , , и .
//  books title author rating

// Расширьте код таким образом, чтобы переменная
//  содержала массив имен авторов в алфавитном порядке,
//   рейтинги книг которых больше значения переменной .
//    Используйте цепочку методов.names MIN_BOOK_RATING

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
.filter(value => value.rating > MIN_BOOK_RATING)
.map(book => book.author)
.toSorted((firstAuthor, secondAuthor ) => 
    firstAuthor.localeCompare(secondAuthor))

;
console.log(names);