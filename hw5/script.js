let radius,
    option;

do {
    radius = prompt("Введите радиус круга:", "");
    if (isNaN(radius)) alert("Некорректный ввод! Введите число");
} while (isNaN(radius) === true);

function calcDiameter(r) {
    return r * 2;
}

function calcSquare(r) {
    return Math.PI * r ** 2;
}

function calcCircumference(r) {
    return Math.PI * calcDiameter(r);
}

for (let i = 0; i < 1; i++) {
    option = +prompt("Введите номер команды чтобы посчитать:\n1 - диаметр, 2 - площадь круга, 3 - длину окружности", "");
    switch (option) {
        case 1:
            alert(`Диаметр окружности с радиусом ${radius} равен ${calcDiameter(radius)}`);
            break;
        case 2:
            alert(`Площадь окружности с радиусом ${radius} равна ${calcSquare(radius)}`);
            break;
        case 3:
            alert(`Длина окружности с радиусом ${radius} равна ${calcCircumference(radius)}`);
            break;
        default:
            alert("Нет такой команды!\nВведите верное значение:");
            i--;
            break;
    }
}