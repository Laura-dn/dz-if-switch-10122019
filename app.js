/*
1. Запросить у пользователя его возраст и определить, кем он
является: ребенком (0–2), подростком (2–18), взрослым
(18-60) или пенсионером (60– ...).
 */
let age = (prompt("Введите Ваш возраст:")) * 1;

if((age >= 0) && (age <= 2)) {
    alert("Судя по возрасту, Вы - РЕБЕНОК");
} else if((age > 2) && (age < 18)) {
    alert("Судя по возрасту, Вы - ПОДРОСТОК");
} else if((age >= 18) && (age < 60)) {
    alert("Судя по возрасту, Вы - ВЗРОСЛЫЙ");
} else if(age >= 60) {
    alert("Судя по возрасту, Вы - ПЕНСИОНЕР");
} else {
    alert("Упс, что-то пошло не так!");
}


//Но лучше, наверное, было бы switch...

/*
2. Запросить у пользователя число от 0 до 9 и вывести ему
спецсимвол, который расположен на этой клавише (1–!,
2–@, 3–# и т. д).
 */
let digital = prompt("Введите число от 0 до 9");

switch (digital) {
    case "0":
        alert("Ваш спецсимвол: )");
        break;
    case "1":
        alert("Ваш спецсимвол: !");
        break;
    case "2":
        alert("Ваш спецсимвол: @");
        break;
    case "3":
        alert("Ваш спецсимвол: #");
        break;
    case "4":
        alert("Ваш спецсимвол: $");
        break;
    case "5":
        alert("Ваш спецсимвол: %");
        break;
    case "6":
        alert("Ваш спецсимвол: ^");
        break;
    case "7":
        alert("Ваш спецсимвол: &");
        break;
    case "8":
        alert("Ваш спецсимвол: *");
        break;
    case "9":
        alert("Ваш спецсимвол: (");
        break;
    default:
        alert("Упс, что-то пошло не так!");
        break;

}

/*
3. Запросить у пользователя трехзначное число и проверить,
есть ли в нем одинаковые цифры.
*/
let number, ed, des, sot;

number = prompt("Напишите любое трёхзначное число:");
ed = number % 10;
des = ((number - ed) / 10) % 10;
sot = (((number - ed) / 10 - des) / 10) % 10;

(ed === des || ed === sot || des === sot) ? alert("Ваше число содержит одинаковые цифры.") : alert("Ваше число не содержит одинаковые цифры.");

/*
4. Запросить у пользователя год и проверить, високосный он
или нет. Високосный год либо кратен 400, либо кратен 4 и
при этом не кратен 100.
 */
let year = prompt("Введите год:");

if(isNaN(year) || (year === "") || (year === " ") || (year < 0)) {
    alert("Упс, что-то пошло не так!");
} else {
    year = year * 1;
    ((year % 400) === 0) || (((year % 4) === 0) && ((year % 100) !== 0)) ? alert(year + " - високосный.") : alert(year + " - невисокосный.");
}

/*
5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
*/
let num, n1, n2, n3, n4, n5;

num = prompt("Введите пятиразрядное число:");
n1 = num % 10;
n2 = ((num - n1) / 10) % 10;
n3 = (((num - n1) / 10 - n2) / 10) % 10;
n4 = ((((num - n1) / 10 - n2) /10 - n3) / 10) % 10;
n5 = (((((num - n1) / 10 - n2) /10 - n3) / 10 - n4) / 10) % 10;

(n1 === n5 && n2 === n4) ? alert("Ваше число палиндром.") : alert("Ваше число не палиндром.");
    
/*
6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR,
UAH или AZN, и получает в ответ соответствующую сумму.
*/
const EUR = 0.9;
const UAH = 24.45;
const AZN = 1.7;
let exchangeRates = prompt("Введите сумму в долларах (USD): ");
let currency = prompt("Введите валюту: EUR, UAH или AZN").toUpperCase();

switch (currency) {
    case "EUR":
        alert("Вы получите: " + (exchangeRates * EUR).toFixed(2) + " EUR.");
        break;
    case "UAH":
        alert("Вы получите: " + (exchangeRates * UAH).toFixed(2) + " UAH.");
        break;
    case "AZN":
        alert("Вы получите: " + (exchangeRates * AZN).toFixed(2) + " AZN.");
        break;
    default:
        alert("Упс, что-то пошло не так!");
        break;
}

/*
7. Запросить у пользователя сумму покупки и вывести сумму
к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
до 500 – 5%, от 500 и выше – 7%.
*/
let sum = prompt("Введите сумму своей покупки: ");

switch (true) {
    case sum > 0 && sum < 200:
        alert("У Вас пока нет скидки");
        break;
    case (sum >= 200) && (sum < 300):
        alert("Ваша скидка составляет 3% и равна: " + (sum * 3 / 100) + " грн.");
        break;
    case (sum >= 300) && (sum < 500):
        alert("Ваша скидка составляет 5% и равна: " + (sum * 5 / 100) + " грн.");
        break;
    case (sum >= 500):
        alert("Ваша скидка составляет 7% и равна: " + (sum * 7 / 100) + " грн.");
        break;
    default:
        alert("Упс, что-то пошло не так!");
        break;
}

/*
8. Запросить у пользователя длину окружности и периметр
квадрата. Определить, может ли такая окружность поместиться в указанный квадрат. 
*/
let circle = prompt("Введите длину окружности: ");
let square = prompt("Введите периметр квадрата: ");
let diameterCircle = (circle / 3.14);
let sideSquare = (square / 4);

(sideSquare > diameterCircle) ? alert("Эта окружность поместится в указанный квадрат.") : alert("Эта окружность не поместится в указанный квадрат.");

/*
9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2
балла. После вопросов выведите пользователю количество
набранных баллов.
*/
let quest1, quest2, quest3, totalPoints;

totalPoints = 0;

quest1 = prompt("Раздел зоологии, изучающий пауков - это: 1) арахнология; 2) серпентология; 3) хироптерология.");
if(quest1 == 1) {
    totalPoints +=2;
}

quest2 = prompt("Сколько пар ребер считается нормой у человека: 1) 22; 2) 23; 3) 24.");
if(quest2 == 3) {
    totalPoints +=2;
}

quest3 = prompt("Раздел ботаники, изучающий водоросли: 1) кромалогия; 2) альгология; 3) микология.");
if(quest3 == 2) {
    totalPoints +=2;
}

alert("Вы набрали: " + totalPoints + " балла(-ов).");

/*
10. Запросить дату (день, месяц, год) и вывести следующую
за ней дату. Учтите возможность перехода на следующий
месяц, год, а также високосный год. 
*/
let myDate, myMonth, myYear, leap, userDate, myNewDate;

myDate = prompt("Введите день месяца (1-31): ") * 1;
myMonth = prompt("Введите месяц (1-12): ") * 1;
myYear = prompt("Введите год: ") * 1;
userDate = myDate + "." + myMonth + "." + myYear; //пользовательская дата
myNewDate = myDate + 1; //следующий день

//Високосный год = Y-yes || N-no
((myYear % 400) === 0) || (((myYear % 4) === 0) && ((myYear % 100) !== 0)) ? leap = "Y" : leap = "N";

switch (true) {
    //проверка пользователя
    case (myDate < 1 || myDate > 31 || myMonth < 1 || myMonth > 12 || isNaN(myYear) || myYear === "" || myYear === " " || myYear < 0):
        alert("Не верно введена дата!");
        break;
    //все числа до 31 исключая февраль и декабрь
    case ((myNewDate < 31) && (myMonth != 2) && (myMonth != 12)):
        alert("Следующий день за: " + userDate + ": " + myNewDate + "." + myMonth + "." + myYear);
        break;
    //если в месяце 31 день
    case ((myMonth == 1 || myMonth == 3 || myMonth == 5 || myMonth == 7 || myMonth == 8 || myMonth == 10) &&
         (myNewDate == 31)):
        alert("Следующий день за: " + userDate + ": " + myNewDate + "." + myMonth + "." + myYear);
        break;
    //Високосный февраль
    case (myMonth == 2 && leap == "Y" && myNewDate <= 29):
        alert("Следующий день за " + userDate + ": " + myNewDate + "." + myMonth + "." + myYear);
        break;
    //Не високосный февраль
    case (myMonth == 2 && leap == "N" && myNewDate <= 28):
        alert("Следующий день за " + userDate + ": " + myNewDate + "." + myMonth + "." + myYear);
        break;
    //декабрь
    case (myMonth == 12 && myNewDate < 31):
        alert("Следующий день за: " + userDate + ": " + myNewDate + "." + myMonth + "." + myYear);
        break;
    //НГ
    case (myMonth == 12 && myNewDate > 31):
        alert("Следующий день за " + userDate + ": " + "1.1." + (myYear + 1));
        break;
    //1е число следующего месяца
    default:
        alert("Следующий день за " + userDate + ": " + "1." + (myMonth + 1) + "." + myYear);
        break;
}
