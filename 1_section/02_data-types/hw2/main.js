/* --- 01 ---
Створити дві змінних - a та b і присвоїти їм числові значення. 
Вивести окремо в консоль наступні арифметичні операції з цими змінними:   
-суму чисел a та b
-піднесення числа a до числа b
-добуток чисел a та b
-частку чисел a та b
let a = 5, 
    b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
*/

/* --- 02 ---
Створити дві константи message та name. 
Присвоїти message таке значення: 'Вітаю вас, шановний пане'. 
Для name присвоїти будь-яке ім'я.  
Вивести в консоль повідомлення, яке буде складатися з цих змінних. 
Використати обидва способи: конкатенацію та шаблонні рядки.
const message = 'Вітаю вас, шановний пане',
      name = 'JS';
console.log(message + ' ' + name);
console.log(`${message} ${name}`);
*/

/* --- 03 ---
Є масив літер українського алфавіту.
const alphabet = ['а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я'];
Скласти з літер алфавіту слово 'джаз'. Записати це в окрему змінну. Змінну вивести в консоль.*/
/* Підказка:
Звертаємося до кожної з літер за її індексом. Літери можна зліпити в слово за допомогою конкатенації або в шаблонному рядку з інтерполяцією
const alphabet = ['а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я'];
const alphabetWord = alphabet[5] + alphabet[8] + alphabet[0] + alphabet[9];
console.log(alphabetWord);
*/