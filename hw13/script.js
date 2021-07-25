function createCalculator(res) {
    return {
        sum: function (val) {
            return res += val;
        },
        mult: function (val) {
            return res *= val;
        },
        sub: function (val) {
            return res -= val;
        },
        div: function (val) {
            return res /= val;
        },
        set: function (val) {
            return res = val;
        }
    }
}
const calc = createCalculator(10);
console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); // 100