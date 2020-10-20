const initOwl = function() {
    $(".owl-carousel").owlCarousel({
        nav:true,
    });
}


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


// Pop-up

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


// Фильмы

const url = 'https://kinopoiskapiunofficial.tech/api/v2.1/'
const filmsElement = document.getElementById('posters')
const tableFilmsElement = document.getElementById("filmsHire")
const films = [
    464963,
    301,
    535341,
    2213,
    1005878,
    1236063
];


const getFilmById = function (id) {
    return new Promise (function(resolve, reject){
        fetch (`${url}/films/${id}`, {
            headers: {
                'X-API-KEY': '90a9c8fa-9698-4c1e-9886-2073350b4a64'
            }
        }).then(response => response.json()).then(resolve)
    })
}

const parseFilm = function (data) {
    data=data.data;
    let countries = '';
    let genres = '';
    data.countries.forEach(function(item){
        countries += `${item.country}`
    });
    data.genres.forEach(function(item){
        genres += `${item.genre} `
    });

    return {
        name: data.nameRu,
        country: countries,
        genre: genres,
        year: data.year,
        description: data.description,
        img: data.posterUrl,
        link: data.webUrl
    }
}

const film = 
{
    getName: function() {
        return this.nameRu;
    },

    getCountry: function() {
        let countries = '';
        this.countries.forEach(function(item){
            countries += `${item.country} `
        });
        return countries
    },

    getYear: function() {
        return this.year;
    },

    getDescription: function() {
        return this.description;
    },

    getImg: function() {
        return this.posterUrl;
    },

    getLink: function() {
        return this.webUrl;
    },

    getStart: function() {
        function getRandomNumber(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random()*(max-min+1)) + min;
        }
    
        let time1, time2, time3, time4;
    
        time1 = getRandomNumber(0, 2);
        time3 = getRandomNumber(0, 5);
        time4 = getRandomNumber(0, 9)
    
            switch(time1){
            case 0:
            case 1:
                time2 = getRandomNumber(0, 9)
            default:
                time2 = getRandomNumber(0, 3)
        }
    
        return `${time1}${time2} : ${time3}${time4}`
    },

    getGenre: function() {
        let genres = '';
        this.genres.forEach(function(item){
            genres += `${item.genre}`
        });
        return genres;

    },

    // renderFilmRow: function() {
    //    return `<tr class="table-body__row">
    //    <td>
    //      <input type="checkbox" class= "block-table__checkbox">
    //      <label for="block-table__checkbox"><i class= "icon icon-check" title="check"></i></label>
    //    </td>
    //    <td id="film_start_1" class="table__row-time">${film.getStart.call(this)}</td>
    //    <td id="film_name_1">${this.nameRu}</td>
    //    <td id="film_genre_1">${film.getGenre.call(this)}</td>
    //     </tr>`
    // },

    // renderFilmBlock: function() {
    //     return `<div class="block-films__movie">
    //     <div class="block-films__relative">
    //         <div class="block-films__table__bg"><img class="link-img" src="${this.getImg}"></div>
    //             <div class="block-films__table__description">
    //             <div class="block-films__table__header">${this.name}</div>
    //             <div class="block-films__table__sep"></div>
    //             <div class="block-films__table__text">${this.description}</div>
    //             <div class="block-films__table__links">
    //             <a href='https://www.facebook.com/' target="_blank"><i class="icon" title="facebook">
    //                 <img src="icons/facebook.png">
    //                 </i></a>
    //             <a href='https://twitter.com/' target="_blank"><i class="icon" title="twitter">
    //                 <img src="icons/twitter.png">
    //                 </i></a>
    //             <a href='https://www.behance.net/' target="_blank"><i class="icon" title="behance">
    //                 <img src="icons/behance.png">
    //                 </i></a>
    //             <a href='https://dribbble.com/' target="_blank"><i class="icon" title="dribbble">
    //                 <img src="icons/dribbble.png">
    //                 </i></a>
    //             </div>
    //         </div>
    //     </div>
    // </div>`;     
    // }

}



const generateFilmItem = function ({name, country, genre, year, description, img, link}) {
    return `<div class="block-films__movie">
                <div class="block-films__relative">
                    <div class="block-films__table__bg"><img class="link-img" src="${img}"></div>
                        <div class="block-films__table__description">
                        <div class="block-films__table__header">${name}</div>
                        <div class="block-films__table__sep"></div>
                        <div class="block-films__table__text">${description}</div>
                        <div class="block-films__table__links">
                        <a href='https://www.facebook.com/' target="_blank"><i class="icon" title="facebook">
                            <img src="icons/facebook.png">
                            </i></a>
                        <a href='https://twitter.com/' target="_blank"><i class="icon" title="twitter">
                            <img src="icons/twitter.png">
                            </i></a>
                        <a href='https://www.behance.net/' target="_blank"><i class="icon" title="behance">
                            <img src="icons/behance.png">
                            </i></a>
                        <a href='https://dribbble.com/' target="_blank"><i class="icon" title="dribbble">
                            <img src="icons/dribbble.png">
                            </i></a>
                        </div>
                    </div>
                </div>
            </div>`;     
}

const generateTableItem = function ({name, genre}){
    function getRandomNumber(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max-min+1)) + min;
    }

    let time1, time2, time3, time4;

    time1 = getRandomNumber(0, 2);
    time3 = getRandomNumber(0, 5);
    time4 = getRandomNumber(0, 9)

        switch(time1){
        case 0:
        case 1:
            time2 = getRandomNumber(0, 9)
        default:
            time2 = getRandomNumber(0, 3)
    }

    const time = `${time1}${time2} : ${time3}${time4}`

        return `<tr class="table-body__row">
            <td>
            <input type="checkbox" class="block-table__checkbox" id="tick" value="yes">
            <label for="tick"><i class= "icon icon-check" title="check"></i></label>
            </td>
            <td id="film_start_1" class="table__row-time">${time}</td>
            <td id="film_name_1">${name}</td>
            <td id="film_genre_1">${genre}</td>
          </tr>`       
};


let element, prepareFilm;
const requests = [];
films.forEach(function(item, i, arr){
    let film = getFilmById(item)
        film.then(result => {
            // let name = film.renderFilmRow.call(result.data)
            // console.log(name)
            prepareFilm = parseFilm(result);
            element = generateFilmItem({...prepareFilm});
            tableElement = generateTableItem({...prepareFilm})
            filmsElement.insertAdjacentHTML('beforeEnd', element)
            tableFilmsElement.insertAdjacentHTML('beforeEnd', tableElement)
        })
    requests.push (film)
})
console.log(requests)
Promise.all(requests).then(()=>{initOwl()})