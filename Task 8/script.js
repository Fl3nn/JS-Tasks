/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(num1, num2) {
    this.a = num1;
    this.b = num2;
    this.sum = function () {
        return this.a + this.b;
    }

    this.subtraction = function () {
        return this.a - this.b;
    }
    this.multiplication = function () {
        return this.a * this.b;
    }
    this.division = function () {
        return this.a / this.b;
    }

}


const calculator = new Calculator(10, 2);
console.log(calculator.sum());
console.log(calculator.subtraction());
console.log(calculator.multiplication());
console.log(calculator.division());