// const genre_1 = 'фэнтези';
// const genre_2 = 'боевик';
// const genre_3 = 'комедия';
// const genre_4 = 'мультфильм';
// const genre_5 = 'драма';
// const genre_6 = 'фантастика';
// const genre_7 = 'приключения';


// const films = [
//     {
//         start: '10:00',
//         name: 'Человек-паук',
//         genre: `${genre_6}, ${genre_2}, ${genre_7}`,
//     },

//     {
//         start: '12:00',
//         name: 'Собачья жизнь 2',
//         genre: `${genre_1}, ${genre_5}, ${genre_3}`,

//     },

//     {
//         start: '14:00',
//         name: 'История игрушек 4',
//         genre: `${genre_4}, ${genre_1}, ${genre_3}`,
    
//     },

//     {
//         start: '16:00',
//         name: 'Люди в черном: Интернэшнл',
//         genre: `${genre_6}, ${genre_2}, ${genre_3}`, 
//     },

    
// ];


// for (let i = 0; i < films.length; i++) {
//     const film = films[i];
//     const filmStartId = 'film_start_' + (i+1);
//     const filmNameId = 'film_name_' + (i+1);
//     const filmGenreId = 'film_genre_' + (i+1);
//     const filmName = document.getElementById (filmNameId);
//     filmName.innerHTML = film.name;
//     const filmStart = document.getElementById (filmStartId);
//     filmStart.innerHTML = film.start;
//     const filmGenre = document.getElementById (filmGenreId);
//     filmGenre.innerHTML = film.genre;
// }


// const button = $('#submit');
// const form = $('#form');
// button.on('click', function(event){
//     event.preventDefault();
//     let data = form.serialize()
//     console.log(data)
//     fetch({
//         method: "GET",
//         url: "#",
//         data: data
//     }).then(console.log)
// })


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

const closePopupButton = document.getElementById('popup-close');
const openPopupButton = document.getElementById('popup-open');
const sendForm = document.getElementById('submit');

const popup = document.getElementById('popup');


closePopupButton.onclick = function(event) {
    event.preventDefault();
    popup.classList.add('hidden')
}


openPopupButton.onclick = function(event) {
    event.preventDefault();
    popup.classList.remove('hidden')
}


sendForm.onclick = function(event) {
    event.preventDefault()
    let name = document.getElementById('name'); 
    let nameParent = name.parentNode;
    let select = document.getElementById('select');
    let selectParent = select.parentNode;
    let agree = document.getElementById('agree');
    let agreeParent = agree.parentNode;

    nameParent.classList.remove('error')
    nameParent.getElementsByClassName('popup-error-message')[0].innerHTML = ''
    selectParent.classList.remove('error')
    selectParent.getElementsByClassName('popup-error-message')[0].innerHTML = ''
    agreeParent.classList.remove('error')
    agreeParent.getElementsByClassName('popup-error-message')[0].innerHTML = ''

    if (!checkInput(name.value)){
        nameParent.classList.add('error')
        nameParent.getElementsByClassName('popup-error-message')[0].innerHTML = 'Заполните поле "Имя"'
       
    }
    
    if (select.value == 0){
        selectParent.classList.add('error')
        selectParent.getElementsByClassName('popup-error-message')[0].innerHTML = ''
       
    }
    
    if (!agree.checked){
        agreeParent.classList.add('error')
        agreeParent.getElementsByClassName('popup-error-message')[0].innerHTML = 'Подтвердите согласие'
       
    }

    }

function checkInput(value) {
    if (value)
        return true;
    return false;

}


// const aaa = new Promise ((res, rej) => {
//     setTimeout(function() {
//             res(222);
//     },1000)    
// }) 
// aaa.then((two) => {
//     console.log(two)
// })

// setTimeout(function() {
//     console.log('111')   
// },1000)    

