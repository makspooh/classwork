// task 1
function storeSale() {
    var from = +prompt('Введите время начала скидки');
    var to = +prompt('Введите время окончания скидки');
    var present = +prompt('Введите текущее время');

    if (from > to && present > to || present < from) {
        return 'Скидка действительна ночью';
    } else if (from < to && present < to) {
        return 'Скидка действительна днём';
    } else {
        return 'Скидка не действует';
    }
}

storeSale();

// task 2
function random(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return rand = Math.round(rand);
}

random(100, 20000);

// task 3
function reverse(str) {
    let reverseString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}

reverse('Hello world');

// task 4
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

fib(3);

// task 5

function fibo(n) {
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

fibo(77);

// task 6
function incCounter() {
    let counter = 0;
    return function() {
        return counter++
    }
}

let func1 = incCounter();
let func2 = incCounter();

func1();
func2();
func1();
func2();

// task 7
function multiA(a) {
    return function(b) {
       return (a * b);
    }
}

let multi3 = multiA(3);
let multi4 = multiA(4);

multi3(2);
multi4(2);

// task 8
function getName() {
    return this.name;
}

let obj = {
    name: 'Maks',
};

console.log(getName.call(obj));
console.log(getName());

// task 9
function getDoubled() {
    return this.number * 2 * 2;
}

function getDoubledTrippled() {
    return getDoubled.call(getDoubled()) * 3;
}

console.log(getDoubledTrippled.call(getDoubled()));

// task 10
let arr1 = [1, 2, 3, 4, 5];

function random1() {
    return Math.random() - 0.5;
}

arr1.sort(random1);

// task 11
let arr = [1, 2, 3, 4, 5];

function sum(a) {
    let arrSum = null;
    for (let i = 0; i < a.length; i++) {
        arrSum += a[i];
    }
    return arrSum;
}

sum(arr);

// task 12
let arr2 = [-1, -2, -3, -4, -5, 6];

function max(a) {
    let maxOfArr = Math.max.apply(null, a);

    return maxOfArr;
}

console.log(max(arr2));

// task 13
let string = 'оно';

function pal(str) {
    str = str.toLowerCase().replace(/ /g, '');
    return str.split('').reverse().join('') === str;
}

pal(string);