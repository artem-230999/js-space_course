/** Оператори
 * Математичні +, -, /, *, %, **
 * Логічні !(NOT), ||(OR), &&(AND)
 * порівняння >, <, >=, <=
 * рівности ==, ===
 * нерівності !=, !==
 * Види запису
res = res + 30;
res += 30;
  * Для записів, які збільшуємо на 1
sum++; // - інкремент - збільшення на 1
  * Для записів, які зменшуємо на 1
sum--; // - дикремент - зменшення на 1
  * можна записати після змінної і перед нею
++sum\sum++  --sum/sum--
  * Оператори рівності
console.log('name' == 'name');
console.log('1' + 1); // Приводить тип данних до строки
console.log('1' == true);
  * Оператори нерівності
console.log(0 != false);
console.log(1 !== '1');
  * порівняння >, <, >=, <=
console.log(1 < 2);
console.log(2 <= 2);
console.log(5 <= 3);
  * Логічні !(NOT), ||(OR), &&(AND)
||(OR) - зупиняється на 1-й правді
console.log(0 || 10 || 2 || 3);
&&(AND) - зупиняється на 1-й неправді NaN, undefined, null, 0, false, ''
console.log(0 && 10 && 2);
!(NOT) - 
console.log(!true);
 */


/** Перетворення типів данних
const str = 'It is a string';
const num = 12345;
const bol = true;
const obj = {name: 'Vasul'};
const arr = [1, 2, 3, 4];
const ndf = undefined;
const nll = null;
* Щоб визначити тип данних є оператор typeof
console.log(typeof num);
* Є загально прийнята помилка, null тип данних визначається як обект
console.log(typeof nll); // Object


 * Перетворення типів данних на рядок
 * Ф-ція String()
console.log(String(num)); // 12345
console.log(String(bol)); // true
console.log(String(obj)); // [object Object]
console.log(String(arr)); // 1,2,3,4
console.log(String(ndf)); // undefined
console.log(String(nll)); // null
 * Конкатинація з порожнім рядком. Такі ж результати, як і з ф-цією String()
console.log(num + ''); // 12345
console.log(bol + ''); // true
console.log(obj + ''); // [object Object]
console.log(arr + ''); // 1,2,3,4
console.log(ndf + ''); // undefined
console.log(nll + ''); // null
 * Шаблонні рядки Такі ж результати, як і з ф-цією String()
console.log(`${num}`); // 12345
console.log(`${bol}`); // true
console.log(`${obj}`); // [object Object]
console.log(`${arr}`); // 1,2,3,4
console.log(`${ndf}`); // undefined
console.log(`${nll}`); // null
 * Метод .toString() не працює на типи данних undefined, null
console.log(num.toString()); // 12345
console.log(bol.toString()); // true
console.log(obj.toString()); // [object Object]
console.log(arr.toString()); // 1,2,3,4
console.log(ndf.toString()); // error
console.log(nll.toString()); // error


 * Перетворення типів данних на число
 * Ф-ція Number()
console.log(Number(str)); // NaN
console.log(Number(strWithNum)); // NaN
console.log(Number(numString)); // NaN
console.log(Number(num)); // 12345
console.log(Number(bol)); // 1
console.log(Number(obj)); // NaN
console.log(Number(arr)); // NaN
console.log(Number(ndf)); // NaN
console.log(Number(nll)); // 0
 * Ф-ція parseInt(). null, boolean перетворюэться на NaN. Якщо на початку строки число, то виводить її. з Масива виводить перщше число, якщо воно на початку.
console.log(parseInt(str)); // NaN
console.log(parseInt(strWithNum)); // NaN
console.log(parseInt(numString)); // 12
console.log(parseInt(num)); // 12345
console.log(parseInt(bol)); // NaN
console.log(parseInt(obj)); // NaN
console.log(parseInt(arr)); // 435
console.log(parseInt(ndf)); // NaN
console.log(parseInt(nll)); // NaN
* Є особливість, можна вказати другиимм аргументом сисутему зчислення (2, 10, 16). parseInt(prompt(''), 10) - за замовченням 10 система зчислення. Наприцклад
const prom = parseInt(prompt(''), 2);
console.log(prom);
 *  Ф-ція parseFloat() - для отримання дробових чисел від користувача
const prom = parseInt(prompt(''), 10);
console.log(prom); // 3
const prom1 = parseFloat(prompt(''));
console.log(prom1); // 3.342343
 * додавання унарного плюса (+). Перетворює, як і з ф-цією Number()
console.log(+str); // NaN
console.log(+strWithNum); // NaN
console.log(+numString); // NaN
console.log(+num); // 12345
console.log(+bol); // 1
console.log(+obj); // NaN
console.log(+arr); // 435
console.log(+ndf); // NaN
console.log(+nll); // 0


 * Перетворення типів данних на булевий тип
 * Ф-ція Boolean()
console.log(Boolean(str)); // false - пустий рядок
console.log(Boolean(strWithNum)); // true
console.log(Boolean(numString)); // true
console.log(Boolean(num)); // true
console.log(Boolean(bol)); // true
console.log(Boolean(obj)); // true
console.log(Boolean(arr)); // true
console.log(Boolean(ndf)); // false - undefined
console.log(Boolean(nll)); // false - null
 * Подвійне заперечення !! - таке саме перетворення, як в Ф-ції Boolean()
console.log(!!str); // false - пустий рядок
console.log(!!strWithNum); // true
console.log(!!numString); // true
console.log(!!num); // true
console.log(!!bol); // true
console.log(!!obj); // true
console.log(!!arr); // true
console.log(!!ndf); // false - undefined
console.log(!!nll); // false - null
 */


// ДЗ4
/* --- 01 ---
Створити змінну і присвоїти їй функцію prompt() для отримання даних зі сторінки
- перетворити отримані дані в тип Number будь-яким зручним способом
- записати це в нову змінну
- вивести в консоль рядок типу '___ перетворилося на ___', де замість пропусків буде перша змінна та друга відповідно
- перетворити отримані дані в тип Boolean будь-яким зручним способом
- записати це в нову змінну
- вивести в консоль рядок типу '___ перетворилося на ___', де замість пропусків буде перша змінна та третя відповідно
Після виконання можна закоментувати код задачі, щоб не заважав виконувати наступне завдання.
const prom1 = prompt('Скільки років?', '');
const prom1Age = +prom1;
const prom1Bol = !!prom1;

console.log(`${prom1} перетворилося на ${prom1Age}`);
console.log(`${prom1} перетворилося на ${prom1Bol}`);
*/



/* --- 02 ---
Створити дві змінних, присвоїти їм функції prompt() для отримання даних зі сторінки.
- створити нову змінну і "склеїти" в неї дані зі змінних, отриманих з promptів 

В отриманих рядках до склеювання мають відбутися зміни - на місці першої літери слова/рядка має стояти остання у верхньому регістрі.

Наприклад: Замість окремих слів 'hello' і 'world' маємо отримати 'Dorld Oello' тощо.
- вивести цю змінну в консоль

Після виконання можна закоментувати код задачі, щоб не заважав виконувати наступне завдання.
const prom1 = prompt('Your name?', '');
const prom2 = prompt('Your second name?', '');
const prom1LastLetterBig = prom1[prom1.length - 1].toUpperCase();
const prom2LastLetterBig = prom2[prom2.length - 1].toUpperCase();
// console.log(prom1LastLetterBig, prom2LastLetterBig);
const res = `${prom1LastLetterBig}${prom1.slice(1)} ${prom2LastLetterBig}${prom2.slice(1)}`;

console.log(res);
*/


/* --- 03 ---
Створити дві змінних, присвоїти їм функції prompt() для отримання даних зі сторінки. Дані мають конвертуватися в число на момент отримання.

- вивести в консоль повідомлення типу '__ плюс __ дорівнює __', де замість першого і другого пропуску мають бути дані, отримані з promptів, а замість останнього результат складання цих даних.

- вивести в консоль ще три різних повідомлення за аналогією на дії "мінус", "помножити" та "поділити"
const promNum1 = +prompt('Введіть перше число', '');
const promNum2 = +prompt('Введіть друге число', '');

console.log(`${promNum1} плюс ${promNum2} дорівнює ${promNum1 + promNum2}`);
console.log(`${promNum1} мінус ${promNum2} дорівнює ${promNum1 - promNum2}`);
console.log(`${promNum1} помножити на ${promNum2} дорівнює ${promNum1 * promNum2}`);
console.log(`${promNum1} поділити на ${promNum2} дорівнює ${promNum1 / promNum2}`);
*/

