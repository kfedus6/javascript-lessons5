//============== ДЗ ============\\
/*
class MacBookPro {
   #price;
   constructor(inches = 'default', processor = 'M1Pro', memory = '16GB', storage = '1TB-SSD', price = 0) {
      this.inches = inches;
      this.processor = processor;
      this.memory = memory;
      this.storage = storage;
      this.#price = price;
   }
   getMacBookInfo() {
      return `Inches: ${this.inches},<br>Procesor: ${this.processor},<br>Memory: ${this.memory},<br>Storage: ${this.storage},<br>Цина: ${this.#price} $`;
   }
   getInches() {
      menu = +prompt('Диагональ екрана:\n1 - 14inch - 2000$\n2 - 16inch - 2500$');
      switch (menu) {
         case 1: {
            this.inches = '14-inch';
            this.#price = 2000;
            break;
         }
         case 2: {
            this.inches = '16-inch';
            this.#price = 2500;
            break;
         }
      }
   }
   setProcessor() {
      menu = +prompt('Процесор:\n1 - M1Max - +700$\n2 - стандартни характеристики');
      switch (menu) {
         case 1: {
            this.processor = 'M1Max';
            this.#price += 700;
            break;
         }
         case 2: {
            return this.processor;
         }
      }
   }
   setMemory() {
      menu = +prompt('Оперативна память:\n1 - 32GB - +200$\n2 - 64GB - +400$\n3 - стандартни характеристики');
      switch (menu) {
         case 1: {
            this.memory = '32GB';
            this.#price += 200;
            break;
         }
         case 2: {
            this.memory = '64GB';
            this.#price += 400;
            break;
         }
         case 3: {
            return this.memory;
         }
      }
   }
   setStorage() {
      menu = +prompt('Объем памяти:\n1 - 2TB-SSD - +400$\n2 - 4TB-SSD - +800$\n3 - 8TB-SSD - 1200$\n4 - стандартни характеристики');
      switch (menu) {
         case 1: {
            this.storage = '2TB-SSD';
            this.#price += 400;
            break;
         }
         case 2: {
            this.storage = '4TB-SSD';
            this.#price += 800;
            break;
         }
         case 3: {
            this.storage = '8TB-SSD';
            this.#price += 1200;
            break;
         }
         case 4: {
            return this.storage;
         }
      }
   }
}
let menu;
const myNewMacBookPro = new MacBookPro();
myNewMacBookPro.getInches();
myNewMacBookPro.setProcessor();
myNewMacBookPro.setMemory();
myNewMacBookPro.setStorage();
document.write(myNewMacBookPro.getMacBookInfo());
*/

/*
function Human(name, age, eyes) {
   this.name = name;
   this.age = age;
   this.eyes = eyes;
   this.go = function () {
      console.log(this.name + "start go");
   }
   this.work = function () {
      console.log(this.name + " worked")
   }
   this.learn = function () {
      console.log(this.name + " learn")
   }
}
function Student(name, age, univer) {
   Human.call(this, name, age, eyes = 3);
   this.univer = univer;
   this.work = function () {
      console.log("error" + this.name + " learn")
   }
}
function Employee(name, age, work) {
   Human.call(this, name, age, work);
   this.work = work;
}
let anton = new Human("anton", 12);
let kiril_student = new Student("kirill", 16, "Metal");
console.log(anton);
console.log(kiril_student);
anton.go();
kiril_student.work();
*/
/*
class Animal {
   constructor(name, age) {
      this.age = age;
      this.name = name;
   }
   go() {
      console.log("Данное животное может")
   }
}

class Dog extends Animal {
   constructor(name, age, poroda) {
      super(name, age);
      this.poroda = poroda;
   }
   print() {
      console.log(this.name, "имеет породу", this.poroda, "возраст", this.age)
   }
   go() {
      super.go();
      console.log("Бегать")
   }
}

class Popugai extends Animal {
   constructor(name, age, country) {
      super(name, age);
      this.country = country
   }
   go() {
      super.go();
      console.log("Летать")
   }
}

const sharik = new Dog("sharil", 11, "alabai");
sharik.print()
sharik.go();

const besilka = new Popugai("besilka", 3, "Австралия");
besilka.go()
*/

/*
class Person {
   #name;
   #age;
   constructor(name, age) {
      this.#name = name;
      this.#age = age;
   }
   getName() {
      return this.#name;
   }
   print() {
      console.log(this.#name, this.#age);
   }
}

class Employee extends Person {
   constructor(name, age, company) {
      super(name, age);
      this.company = company;
   }
   work() {
      console.log(`${this.getName()} работает ${this.company}`);
   }
   print() {
      super.print();
      console.log(this.company);
   }
}

const a = new Employee("kolya", 22, "google");
a.work();
a.print();
a.getName();
*/

//МАССИВАМ
/*
let names = ['kolya', 'timur', 'olya'];
names = new Array('kolya', 'timur', 'olya')
names = Array.of('kolya', 'timur', 'olya')

let tmp = Array.from("hellomyworld");
console.log(tmp);

x = [1, 2, 3, 4];
let num = Array.from(x, (n) => n * 2);
console.log(num);

let arr = Array.from({ length: 3, }, (element, idx) => {
   return idx;
})

console.log(arr);

arr = Array.from({ length: 3, "0": "Timur", "1": "Sasha", "2": "dima" }, (element, idx) => {
   console.log(element)
   console.log(idx);
   return element;
})

console.log(arr);
console.log(tmp);
let newArr = [...arr, 'alex', ...tmp];
console.log(newArr);

function sum(x1, x2, x3, x4, x5) {
   console.log(x1 + x2 + x3 + x4 + x5);
}

let s = [1, 5, 3, 2, 6];
let t = Array.of(...s)
t[2] = 55;
console.log(s);
console.log(t);
*/
//============== ДЗ ==============\\
/*
class Person {
   constructor(name, year, job) {
      this.name = name;
      this.year = year;
      this.job = job;
   }
   print() {
      console.log(`Имя: ${this.name}, Возраст: ${this.getFullYear()}, Робота: ${this.job}`);
   }
   getFullYear() {
      return new Date().getFullYear() - this.year;
   }
}

class Librarian extends Person {
   constructor(name, year, job) {
      super(name, year, job);
   }
}

let librarian = new Librarian("Наталя Петривна", 1975, "Библиотекар");

class Author extends Person {
   constructor(name, year, country) {
      super(name, year);
      this.country = country;
   }
   print() {
      console.log(`Имя: ${this.name}, Возраст: ${this.getFullYear()}, Страна: ${this.country}`);
   }
   setName(name) {
      if (name === '') {
         return this.name;
      } else {
         this.name = name;
      }
   }
   setYear(year) {
      if (year === '') {
         return this.year;
      } else {
         this.year = year;
      }
   }
   setCountry(country) {
      if (country === '') {
         return this.country;
      } else {
         this.country = country;
      }
   }
}

let author = [];

class Book extends Author {
   constructor(name, title, year, pages) {
      super(name, year)
      this.title = title;
      this.pages = pages;
   }
   print() {
      console.log(`Автор: ${this.name}, Название: ${this.title}, Год: ${this.year}, Сторинок: ${this.pages}`)
   }
   setTitle(title) {
      if (title === '') {
         return this.title;
      } else {
         this.title = title;
      }
   }
   setPages(pages) {
      if (pages === '') {
         return this.pages;
      } else {
         this.pages = pages;
      }
   }
}

let book = [];

console.log("1 - Добавить автора ");
console.log("2 - Добавить новую книгу");
console.log("3 - Посмотреть все книги");
console.log("4 - Посмотреть книги определенного автора");
console.log("5 - Посмотреть книги за определенный год");
console.log("6 - Изменить информацию об книге");
console.log("7 - Изменить информацию об автор");
console.log("8 - Посмотреть информацию об всей библиотеке.");
console.log("9 - Выйти");

let menu;
let exite = false;

while (!exite) {
   menu = +prompt();
   switch (menu) {
      case 1:
         console.log(1);
         author[author.length] = new Author(prompt("Имя"), prompt("Год рождения"), prompt("Страна"));
         break;
      case 2:
         console.log(2);
         book[book.length] = new Book(prompt("Автор"), prompt("Название"), prompt("Год"), prompt("Сторинок"));
         break;
      case 3:
         console.log(3);
         for (item of book) {
            item.print();
         }
         break;
      case 4:
         console.log(4)
         name = prompt("Автор");
         for (item of book) {
            if (item.name === name) {
               item.print();
            }
         }
         break;
      case 5:
         console.log(5);
         year = prompt("Год книги");
         for (item of book) {
            if (item.year === year) {
               item.print();
            }
         }
         break;
      case 6:
         console.log(6);
         title = prompt("название книги");
         for (item of book) {
            if (item.title === title) {
               item.setName(prompt("новый автор"));
               item.setTitle(prompt("новое название"));
               item.setYear(prompt("новый год"));
               item.setPages(prompt("новые страницы"));
            }
         }
         break;
      case 7:
         console.log(7);
         name = prompt("какова автора хотите изменить");
         for (item of author) {
            if (item.name === name) {
               item.setName(prompt("нове имя"));
               item.setYear(prompt("новый год"));
               item.setCountry(prompt("новая страна"));
            }
         }
         break;
      case 8:
         console.log(8);
         librarian.print();
         console.log(`Книг: ${book.length}`);
         for (item of author) {
            item.print();
         }
         break;
      case 9:
         console.log(9);
         exite = true;
         console.log("Вы выйшли");
         break;
   }
}

*/

/*
let arr = []

arr.push("qwe");
arr.push(1);
arr.push(false);

arr.pop();

console.log(arr);
*/

/*
let arr = [];
for (let i = 1; i <= 10; i++) {
   arr.push(i);
}

let ch = []
let nch = []
while (arr.length != 0) {
   if (arr[arr.length - 1] % 2 == 0) {
      ch.push(arr.pop());
   } else {
      nch.push(arr.pop());
   }
}

console.log(ch);
console.log(nch);
*/

/*
let arr = [80, 74]
arr.unshift(1, 5, 2);
console.log(arr);
arr.shift();
console.log(arr);
*/

/*
let arr = [];
for (let i = 1; i <= 10; i++) {
   arr.unshift(i);
}

let ch = []
let nch = []

while (arr.length != 0) {
   if (arr[0] % 2 === 0) {
      ch.unshift(arr.shift());
   } else {
      nch.unshift(arr.shift());
   }
}

console.log(ch);
console.log(nch);
*/

/*
let texts = ["I", "Love", "JS", ";)"];
texts.splice(1, 1, "hate", "php");
console.log(texts);
*/

/*
let texts = ["anton", "egor", "anya", "slavik"];


for (let i = 0; i < texts.length; i++) {
   if (texts[i][0] == "a") {
      if (i == 0) {
         texts.splice(i, i + 1);
      }
      else {
         texts.splice(i, i);
      }
   }
}
console.log(texts);
*/

/*
let texts = ["love", "js", "forever"];
for (let i = 0; i < texts.length; i++) {
   if (texts[i] === "love") {
      if (i === 0) {
         texts.splice(i, i + 1, "hate");
      }
      else {
         texts.splice(i, i, "hate");
      }
   }
}

console.log(texts);
*/

//=============== ДЗ =====================\\
//1)
/*
let arr = [];
for (let i = 1; i <= 10; i++) {
   arr.unshift(i);
}

let number = (word, num) => {
   let ch = [];
   let nch = [];
   if (word === "четные") {
      for (let i = 1; i <= 10; i++) {
         if (num[0] % 2 == 0) {
            ch.unshift(num.shift());
         } else {
            nch.unshift(num.shift());
         }
      }
      for (item of ch) {
         console.log(item);
      }
   }
   else if (word === "нечетные") {
      for (let i = 1; i <= 10; i++) {
         if (num[0] % 2 == 0) {
            ch.unshift(num.shift());
         } else {
            nch.unshift(num.shift());
         }
      }
      for (item of nch) {
         console.log(item);
      }
   }
}
number("нечетные", arr);
*/
//2)

/*
class Person {
   constructor(name, age, year) {
      this.name = name;
      this.age = age;
      this.year = year;
   }
   print() {
      console.log(`Имя: ${this.name}, Возраст: ${this.age}, Год раджения: ${this.year}`);
   }
}

let user = [];
for (let i = 0; i < 2; i++) {
   user[i] = new Person(prompt("name"), prompt("age"), prompt("year"));
}
for (item of user) {
   item.print;
}

for (let i = 0; i < user.length; i++) {
   if (user[i].age < 18) {
      user.splice(i, i, "delete")
   }
}

for (key of user) {
   console.log(key)
}
*/

/*
let texts = ["hello", "my", "best", "world"];
let newTexts = texts.slice(1)
console.log(newTexts)
*/

/*
let arr = Array.from(prompt());
let newArr = arr.slice(-3)
console.log(newArr);
*/

/*
let n1 = [1, 2, 3];
let n2 = [4, 5, 6];
let sum = []
sum = sum.concat(n1, n2);
console.log(sum);
*/

/*
hello =  lohel
qwer = erqw
*/

/*
let word = Array.from(prompt());
len = word.length;
one = word.slice(len / 2);
console.log(one)
two = word.splice(0, len / 2);
console.log(two)
res = [];
res = res.concat(one, two)
console.log(res);
*/

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function (item, index) {
   console.log(`item ${item} имеет индекс ${index}`)
})
*/

/*
let res = [];
let names = ["anton", "egor", "anya", "timur"];
names.forEach((item, index) => {
   if (item[0] != "a") {
      res.push(item);
      names.splice(index, index);
   }
})
*/

//console.log(res);
//console.log(names)
//console.log(res) // egor,timur


//Достать все числа больше 5 и записать в новый список. и удалить все числа меньше 3
/*
let sum = [];
let num = [1, 2, 3, 4, 5, 6, 7, 8];

num.forEach((item, index) => {
   if (item > 5) {
      sum.push(item);
   }
})

num.forEach((item, idx) => {
   if (item < 3 || item > 5) {
      if (idx == 1) {
         num.splice(idx - 1, idx)
      }
      num.splice(idx, idx)
   }
})
console.log(sum); //6,7,8
console.log(num); //3,4,5
*/