// Змінна - спеціальне сховище, де можна зберігати будь-що

// var - старий спосіб створення змінної. Є свої відмінності
// Let - Змінна, яку можна без проблем зінювати
// const - тип змінноЇ, яку не можна змінити. Але деякі данні можна змінити

/* Назви змінних
Дозволено
1. $ і _
2. a-z, A-Z
3. 0-9 (не на початку)

Заборонено
1. інші символи
2. Зарезервовані слова

Види запису
1. camelCase - основний вид запису
2. snake_case
*/

/** Види лапок
 * '' - краще використовувати зазвичай
 * "" - 
 * `` - використовуэться для написання змінних і т. д.
 * let name = `Petro`;
 */

// Не можимо двічі оголосити одну змінну
// let name = `Petro`;
// let name = `Vasyl`;
// Але, якщо написати по старому, то не буде проблеми. Одна із причин, чому не використовують 
// var name = `Petro`;
// var name = `Vasyl`;

/** Перезаписати значення
// let nameUser = `Petro`;
// nameUser = `Vasyl`;
// console.log(nameUser);
 */

/** Оголошееня пустої змінної
 // let userName;
 // console.log(userName); // undefined
 
 // Змінну const не можна оголошувати пусту
 //  const userName;
 //  const userName = 444;
 //  userName = 444; // Uncaught TypeError: Assignment to constant variable.
 */
 
