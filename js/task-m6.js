// this:
//     розумієш, що таке ключове слово this в контексті окремої функції
//     значення this - Під час виклику методу user.showName() значенням this
//     буде посилання на об’єкт user, у контексті якого вона була викликана.

// вмієш визначати this у глобальній області видимості,

// в методі об'єкта, в стрілочних та callback-функціях
// Що треба запам’ятати про this у стрілочних функціях?

// 1.Контекст **this** усередині стрілочної функції 
// визначається місцем її оголошення, а не виклику.

// 2.Стрілочні функції ігнорують наявність суворого режиму.
//  Тому в глобальному контексті у стрілці завжди this
//   посилається на об'єкт window.

// 3.Неможливо змінити значення this усередині стрілочних
//  функцій після її оголошення. Методи call, apply і bind
//   не впливають на значення this у стрілках.

//Object.create(obj) - створює і повертає новий об'єкт,
                   //  зв'язуючи його з об'єктом obj 

//objA.isPrototypeOf(objB) -  Перевірка чи є об'єкт 
                          // прототипом іншого об'єкта
                          // повертає true  або false

//obj.hasOwnProperty(key) - перевіряє наявність власної властивості з ім'ям
                        //console.log(dog.hasOwnProperty("name"));
                        // повертає true  або false

//for(const key of Object.keys(dog)) {
//	console.log(key); // "name"
//}

//  методи функції :
// f.call(obj, a, b) - прив'язує об'єкт до функції
               // і викликає f
              //(this = посилання на obj)
// f.apply(obj, []) -  прив'язує об'єкт до функції
               // і викликає f
              //(this = посилання на obj)
//  f.bind(obj, a, b) - const lala = f.bind(obj)
              //  прив'язує об'єкт до функції
              //(this = посилання на obj)
              //повертає копію цієї f (не викликає її)
//Object.create(obj) -  створює і повертає новий об'єкт,
                  // зв'язуючи його з об'єктом obj
                               
// розумієш сутність ООП, поняття класа, екземпляра, інтерфейса

// знаєш що таке прототипне наслідування та специфіку його використання

// використовуєш прототипне наслідування,
//  класи для створення однотипних об'єктів 
// з однаковим набором властивостей,
//   але різними значеннями


class User {
  constructor(email) {
    this._email = email; // Використовуємо `_email`, щоб уникнути рекурсії
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, access }) {
    super(email); // Викликаємо конструктор `User`
    this.access = access; // Додаємо `access` як окрему властивість
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // ✅ "mango@mail.com"
console.log(mango.access); // ✅ "superuser"
//hello