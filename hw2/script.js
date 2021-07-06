const WIN_POINTS = 10,
      MAX_POINTS = 50;
let userTotalPoints = 0,
    isPassed = "";

let firstAnswer = prompt("Сколько будет 2 + '2' в JavaScript?", ""),
    secondAnswer = prompt("Назовите оператор присваивания в JavaScript", ""),
    thirdAnswer = prompt("Сколько будет 5 / 0?", ""),
    forthAnswer = prompt("Одинаково ли работает == и === в JavaScript?", ""),
    fifthAnswer = prompt("Чему равно выражение Boolean(null) в JavaScript?", "");

if (firstAnswer == 22) userTotalPoints += WIN_POINTS;
if (secondAnswer == "=") userTotalPoints += WIN_POINTS;
if (thirdAnswer == "Infinity") userTotalPoints += WIN_POINTS;
if (forthAnswer == "No" || forthAnswer == "no") userTotalPoints += WIN_POINTS;
if (fifthAnswer == "false" || fifthAnswer == "False") userTotalPoints += WIN_POINTS;

if (userTotalPoints >= MAX_POINTS/2) {
    isPassed = "сдали";
} else {
    isPassed = "не сдали";
}

alert(`Ваш результат: ${userTotalPoints} баллов.\nВы ${isPassed} тест!`);