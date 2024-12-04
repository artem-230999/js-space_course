/** JS має 8 основних типів данних
 * Number
 * Bigint
 * String
 * Boolean
 * Null - значення відсутнє
 * Undefined - не вказане значення
 * Object - має спеціальні типи: массиви, ф-ції, дати, регулярні вирази, проміси і т.д.
 * Symbol - використовується зазвичай в об'єктах  
  let mySymbol = Symbol('mySymbol');
  console.log(mySymbol);
 */

/** Number
 * + - * - % **
const num1 = 10;
const num2 = 20;
let result;
result = num1 + num2;
console.log(result);
result = num1 - num2;
console.log(result);
result = num1 * num2;
console.log(result);
result = num1 / num2;
console.log(result);
result = num2 % num1;
console.log(result);
result = num1 ** num2;
console.log(result);  
  * можна використовувати і дробові чиисла
  * infinity, -infinity
  * NaN - не число. Результат операції не з числом
const num1 = 10;
const num2 = 20;
let result = num1 * 'string';
console.log(result);
 */

/** String
 * Рядки можна складати. Краще використовувати шаблонні рядки та інтерполяцію
 * шаблонні рядки - ` ${secondName}`
 * інтерполяція - ${name}
const name = 'Vasyl';
const secondName = 'Sirko';
console.log();
console.log(name + ' ' + secondName);
 */

/** Undefined
 *
let userName;
console.log(userName); // undefined
 */

/** Boolean
 * true
console.log(6 > 5);
 * false
console.log(1 == 2);
 */

/** Object
 * В об'єктах використовається ключ: значення
 * Щоб звернутись до елемента об'єкту obj.name
 * Можливо звернутись через квадратні дужки, але тоді краще взяти ключ в лапки obj['age']
const obj = {
  name: 'Vasyl',
  age: 33,
  weight: 80,
  height: 180
}
console.log(obj.name);
// console.log(obj['age']);

  * Массиви - будь-які данні, які розташовані по порядку від 0 до останнього елемента
  * Є багато методів массивів
  * Для звернення до елемента массива, через його індекс
const arr = ['Vasyl', 13, 14, {}]
console.log(arr[0]);
*/


