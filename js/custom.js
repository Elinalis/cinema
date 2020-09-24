const initOwl = function() {
    $(".owl-carousel").owlCarousel({
        nav:true,
    });
}

$(document).ready(initOwl);

const genre_1 = 'фэнтези';
const genre_2 = 'боевик';
const genre_3 = 'комедия';
const genre_4 = 'мультфильм';
const genre_5 = 'драма';
const genre_6 = 'фантастика';
const genre_7 = 'приключения';


const films = [
    {
        start: '10:00',
        name: 'Человек-паук',
        genre: `${genre_6}, ${genre_2}, ${genre_7}`,
    },

    {
        start: '12:00',
        name: 'Собачья жизнь 2',
        genre: `${genre_1}, ${genre_5}, ${genre_3}`,

    },

    {
        start: '14:00',
        name: 'История игрушек 4',
        genre: `${genre_4}, ${genre_1}, ${genre_3}`,
    
    },

    {
        start: '16:00',
        name: 'Люди в черном: Интернэшнл',
        genre: `${genre_6}, ${genre_2}, ${genre_3}`, 
    },

    
];


for (let i = 0; i < films.length; i++) {
    const film = films[i];
    const filmStartId = 'film_start_' + (i+1);
    const filmNameId = 'film_name_' + (i+1);
    const filmGenreId = 'film_genre_' + (i+1);
    const filmName = document.getElementById (filmNameId);
    filmName.innerHTML = film.name;
    const filmStart = document.getElementById (filmStartId);
    filmStart.innerHTML = film.start;
    const filmGenre = document.getElementById (filmGenreId);
    filmGenre.innerHTML = film.genre;
}


const button = $('#submit');
const form = $('#form');
button.on('click', function(event){
    event.preventDefault();
    let data = form.serialize()
    console.log(data)
    console.log('work');
    fetch({
        method: "GET",
        url: "http://ya.ru",
        data: data
    }).then(console.log)
})


// form.onsubmit = function(event){
//     event.preventDefault();

//     const name = document.getElementsById('name');
//     const select = document.getElementsById('select');
//     const radio = document.getElementsById('radio1');
//     console.log(name, select, radio)
// }    


// function someFormSubmit(){
//     console.log(5+1);
// }

//     Object.keys(form.elements).forEach(function(elements){
//         console.log()
//         if(form.elements[elements].type != "submit"){
//             if (form.elements[elements].type == "text"){
//                 let error = ifExist(form.elements[elements].value);
//                 if (error){
//                     alert('Заполните поле')
//                 }
//             }
//         }           
//     })
// }

// function ifExist(value){
//     let error = false;
//     if(value.trim() == "")
//         error = true;
//     return error;
// }


// Домашка ТЗ-16

// Задача 1

// const superHeroes = [
//     {
//         name: 'Thor',
//         age: 389,
//         god: true,

//     },
//     {
//         name: 'Loki',
//         age: 234,
//         god: true,

//     },
//     {
//         name: 'IronMan',
//         age: 38,
//         god: false,

//     },
    
// ];

// console.log (superHeroes)


// Задача 2

// let a3 = {
//     3 : 'hello',
//     'one' : 'hi',
//     'testt' : 'vodoley',
//     'ivan' : 'ivanov'
// };

//  for(let key in a3) {
//     if (key.length > 4){
//         console.log(a3[key]);
//     };
//  };

// Задача 3 получилась

// const a7 = {
//      'key1':'value1',
//      'key2':'value2', 
//      'key3':'value3',};
// const inp_1 = document.getElementById("a7-key_input");
// const inp_2 = document.getElementById("a7-value_input");
// const btn = document.getElementById("button_1");

// btn.addEventListener('click', function() {
//     let key = inp_1.value;
//     let valInp2 = inp_2.value;
//     a7[key] = valInp2
//     console.log(a7);
//     inp_1.value = "";
//     inp_2.value = "";

//   })

// Задача 4
// const a = ['Tor', 'Lokki', 'Odin', 34, 'privet']
// console.log(a.length) 

// Задача 5 и 6 тоже не получились :(

// const d = [0, 2, 5, -4, 6, 22, -9, -12, ,13, 78];

// for (let i = 0; i < d.length; i++){
//     if (d[i] % 2 == 0) {
//         d.push(d.splice(i, 1)[0]);
// }

// console.log(d);


// const a = [2, 3, 4, 5];
// let result = 1
// for (let i = 0; i < a.length; i++){
//  result = result * a[i];}
// console.log(result);

//Домашка Т3-17

