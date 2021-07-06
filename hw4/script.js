let radius = +prompt("Введите радиус круга:", "");
let option;

function findDiameter(r) {
    return r * 2;
}

function findSquare(r) {
    return Math.PI * r ** 2;
}

function findCircumference(r) {
    return Math.PI * findDiameter(radius);
}

if (radius == "" || radius == null || isNaN(radius)) {
    option = 0;
} else {
    option = +prompt("Введите номер команды, чтобы посчитать:\n1 - диаметр\n2 - площадь круга\n3 - длинну окружности", "");
}

switch (option) {
    case 0:
        alert("Введите число!");
        break;
    case 1:
        alert(`Диаметр окружности с радиусом ${radius} равен ${findDiameter(radius)}`);
        break;
    case 2:
        alert(`Площадь окружности с радиусом ${radius} равна ${findSquare(radius)}`);
        break;
    case 3:
        alert(`Длина окружности с радиусом ${radius} равна ${findCircumference(radius)}`);
        break;
    default:
        alert("Нет такой команды!");
        break;
}