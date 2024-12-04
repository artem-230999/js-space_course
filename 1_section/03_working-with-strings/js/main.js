/** Методи рядків - це спеціальні ф-ції, які виконують певні дії з рядками або повертають певні значення, але не змінюють сам рядок.
const email = 'myemail@email.com';
 * length - визначити довжину рядка
console.log(email.length);
  * звернутись до конкретного символа
console.log(email[0]);
  * останній символ рядка
console.log(email[email.length - 1]);
  * передостанній символ рядка
console.log(email[email.length - 2]);
  * Звернення до неіснгуючого символа буде undefined
  * Метод дня написання з великої літери
console.log(email.toUpperCase());
  * Метод дня написання з маленької літери
const emailLover = email.toLowerCase();
  * Моэна використовувати ці методи, для отримання данних від користувача. 
let getMessage = prompt('');
console.log(getMessage.toLowerCase());
  * Метод знаходження позиції символа, коли треба щось вирізати або замінити
console.log(email.indexOf('@'));
  * Метод заміни символів
const emailReplace = email.replace('@', '34324324');
console.log(emailReplace);
  * Метод для перевірки, чи є такий символ. тим логічний
console.log(email.includes('@'));
  * Метод щоб позбавитись пробілів, що може ввести користува .trim()
const email = '             myemail@email.com            ';
console.log(email.trim().length);
  * Метод .slice() - дозволяє витянути декілька символів. Наприклад з 0 по 7
console.log(email.slice(0, 7));
  * Якщо не вказати 1-й параметр. Наприклад присто поставити 1 email.slice(1), то отримаємо всі символи піля 1-го символа
console.log(email.slice(1));
* Метод concat() (зчепити) значень String приєднує рядкові аргументи до свого рядка, і повертає результат як новий рядок.
const str1 = 'Привіт';
const str2 = 'Світе';
console.log(str1.concat(' ', str2)); // Очікуваний вивід: "Привіт Світе"
console.log(str2.concat(', ', str1)); // Очікуваний вивід: "Світе, Привіт"
*/

// https://webdoky.org/uk/docs/Web/JavaScript/Reference/Global_Objects/String/concat/

// Задачи
/* 
 Ви маєте рядок sentence з текстом 'Єхидна, ґава, їжак ще й шиплячі плазуни бігцем форсують Янцзи'. 
*/
// const sentence = 'Єхидна, ґава, їжак ще й шиплячі плазуни бігцем форсують Янцзи';
/* Використовуючи методи рядків, виконайте наступні завдання: 
(Результати кожної дії виводимо в консоль)
*/
const sentence = 'Єхидна, ґава, їжак ще й шиплячі плазуни бігцем форсують Янцзи';
/* --- 01 ---
Замініть слово 'плазуни' на 'гризуни' та запишіть виправлене речення в нову змінну. 
*/
const sentenceReplace = sentence.replace('плазуни', 'гризуни')
console.log(sentenceReplace);

/* --- 02 ---
Переведіть виправлений рядок в нижній регістр, запишіть це в нову змінну.
*/
const sentenceLover = sentenceReplace.toLowerCase();
console.log(sentenceLover);

/* --- 03 ---
Виріжте слово 'їжак' з рядка, запишіть виправлене речення в нову змінну. Має повертатися речення без слова 'їжак'. Використати метод slice()
*/
const sentenceSlice = sentence.slice(0, 14) + sentence.slice(19);
console.log(sentenceSlice);

/* --- 04 ---
Замініть кому перед словом 'ще' на порожнє місце.
*/
const sentenceRemove = sentenceSlice.replace(', ще', ' ще');
console.log(sentenceRemove);

/* --- 05 ---
Знайдіть позицію слова 'бігцем'.
*/
const sentenceIndexOF = sentenceRemove.indexOf('бігцем');
console.log(sentenceIndexOF);

/* --- 06 ---
Склейте за допомогою метода concat() початкове речення та фразу 'бо більше нічого робить', запишіть це в нову змінну. 
*/
const str2 = 'бо більше нічого робить';
const sentenceConcat = sentence.concat(', ', str2)
console.log(sentenceConcat);

