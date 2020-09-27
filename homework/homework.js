// Домашка ТЗ-16

// Задача 1

const superHeroes = [
    {
        name: 'Thor',
        age: 389,
        god: true,

    },
    {
        name: 'Loki',
        age: 234,
        god: true,

    },
    {
        name: 'IronMan',
        age: 38,
        god: false,

    },
    
];

console.log (superHeroes)


// Задача 2

const ts_2 = document.getElementById('ts_2');

let ts_2_content;

let a3 = {
    3 : 'hello',
    'one' : 'hi',
    'testt' : 'vodoley',
    'ivan' : 'ivanov'
};

 for(let key in a3) {
    if (key.length > 4){
        ts_2_content = a3[key];
    };
 };

 ts_2.innerHTML = ts_2_content

// Задача 3 

const ts_3 = document.getElementById('ts_3');

let ts_3_content = "";


let a7 = {
     'key1':'value1',
     'key2':'value2', 
     'key3':'value3',};

const inp_1 = document.getElementById("a7-key_input");
const inp_2 = document.getElementById("a7-value_input");
const btn = document.getElementById("button_1");

btn.addEventListener('click', function() {
    let key = inp_1.value;
    let valInp2 = inp_2.value;
    ts_3_content = "";
    a7[key] = valInp2
    for (key in a7){
        ts_3_content += `${key} : ${a7[key]} </br> `};
    inp_1.value = "";
    inp_2.value = "";
    ts_3.innerHTML = ts_3_content
 })


  
// Задача 4

const ts_4 = document.getElementById('ts_4');
let ts_4_content;
const a = ['Tor', 'Lokki', 'Odin', 34, 'privet'];

ts_4_content = a.length;
ts_4.innerHTML = ts_4_content

// Задача 5 

const ts_5_even = document.getElementById('ts_5_even')
const ts_5_odd = document.getElementById('ts_5_odd')

const d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
let d_even = [];
let d_odd = [];

for (let i = 0; i < d.length; i++){
    if (d[i] % 2 == 0) {
        d_even.push(d[i]);
    } 
    else 
        d_odd.push(d[i]);
}

ts_5_even.innerHTML =  d_even;
ts_5_odd.innerHTML =  d_odd;

// Задача 6

const ts_6 = document.getElementById('ts_6');
let ts_6_content = "";

const p = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];

for (let i = 0; i < p.length; i++){
    ts_6_content += `${p[i]} </br>`;

}
console.log(ts_6_content)

ts_6.innerHTML = ts_6_content

// Домашка ТЗ-17

// Задача 1

const name_input = document.getElementById("name_input");
const answer = document.getElementById("answer");
const btn_2 = document.getElementById("button_2");
function getName(name_input){
    return name_input.value
}


btn_2.addEventListener('click', function (){
    console.log (getName(name_input))
    answer.innerHTML = getName(name_input)
})


// Задача 2

function getLargestExpression(a, b) {
    
    if (a >= b) return a;
        else return b;
    };

console.log (getLargestExpression(2,10))
console.log (getLargestExpression(5,1))
console.log (getLargestExpression(5,5))

// Задача 3

function getRandomNumber(min, max){
    return min + (Math.random())*(max-min) 
}

console.log(getRandomNumber(5, 189))
console.log(getRandomNumber(1, 67))
console.log(getRandomNumber(9834, 0))
console.log(getRandomNumber(6, 6))


// Домашка Т3-18

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
// setTimeout(function() {
// console.log('Index: ' + i + ', element: ' + arr[i]);
// }, 3000);
// }

// Вариант 1

// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
// setTimeout(function() {
// console.log('Index: ' + i + ', element: ' + arr[i]);
// }, 3000);
// }

// Вариант 2

// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
// setTimeout(function() {
// console.log('Index: ' + i + ', element: ' + arr[i]);
// }, 3000);
// }