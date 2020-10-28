const initOwl = function() {
    $(".owl-carousel").owlCarousel({
        nav:true,
    });
}



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





// Pop-up Получить подарок

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
        document.getElementById('select').classList.add('top-0')
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
const popupOrderElement = document.getElementById("modal__form2")
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

    getPrice: function () {
        function getRandomNumber(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random()*(max-min+1)) + min;
        }
    
        let price1, price2;
    
        price1 = getRandomNumber(1, 2);
        price2 = getRandomNumber(1, 9);
    
        return `${price1}${price2}0`
    },

    renderFilmRow: function() {
       return `<tr class="table-body__row">
                    <td>
                    <input type="checkbox" class="block-table__checkbox" id="tick" value="yes">
                    <label for="tick"><i class= "icon icon-check" title="check"></i></label>
                    </td>
                    <td id="film_start_1" class="table__row-time">${film.getStart.call(this)}</td>
                    <td id="film_name_1">${film.getName.call(this)}</td>
                    <td id="film_genre_1">${film.getStart.call(this)}</td>
                    <td id="film_genre_1">${film.getPrice.call(this)}</td>
                </tr>` 
    },

    renderFilmBlock: function() {
        return `<div class="block-films__movie">
        <div class="block-films__relative">
            <div class="block-films__table__bg"><img class="link-img" src="${film.getImg.call(this)}"></div>
                <div class="block-films__table__description">
                <div class="block-films__table__header">${film.getName.call(this)}</div>
                <div class="block-films__table__sep"></div>
                <div class="block-films__table__text">${film.getDescription.call(this)}</div>
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

    let price1, price2;

    price1 = getRandomNumber(1, 2);
    price2 = getRandomNumber(1, 9);

    const time = `${time1}${time2} : ${time3}${time4}`
    const price = `${price1}${price2}0`

    return `
            <td>
            <input type="checkbox" class="block-table__checkbox" id="tick" value="yes">
            <label for="tick"><i class= "icon icon-check" title="check"></i></label>
            </td>
            <td id="film_start_1" class="table__row-time">${time}</td>
            <td id="film_name_1">${name}</td>
            <td id="film_genre_1">${genre}</td>
            <td id="film_genre_1">${price}</td>`
               
};

// Pop-up Таблица



const closePopupOrder = document.getElementById('closeOrderFrom');
const sendForm2 = document.getElementById('sendOrder');
const popup2 = document.getElementById('orderForm');

closePopupOrder.onclick = function(event) {
    event.preventDefault();
    orderForm.classList.add('hidden')
}

tableFilmsElement.onclick = function(event) {
    event.preventDefault();
    orderForm.classList.remove('hidden')
}

const generateModalFormItem = function (){

    function getRandomNumber(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max-min+1)) + min;
    }

    let time5, time6, time7, time8;

    time5 = getRandomNumber(0, 2);
    time7 = getRandomNumber(0, 5);
    time8 = getRandomNumber(0, 9)

        switch(time5){
        case 0:
        case 1:
            time6 = getRandomNumber(0, 9)
        default:
            time6 = getRandomNumber(0, 3)
    }

    let price4, price5;

    price4 = getRandomNumber(1, 2);
    price5 = getRandomNumber(1, 9);

    const timeOrder = ` ${time5}${time6} : ${time7}${time8}`
    const priceOrder = ` ${price4}${price5}0`
    const nameOrder = ` Матрица`
    const genreOrder = ` Боевик, фантастика`

    return `<div id="orderFilmName">Фильм:${nameOrder}</div></div>
    <div id= "orderFilmStart">Время:${timeOrder}</div>  
    <div id= "orderFilmGanar">Жанр:${genreOrder}</div>  
    <div  id="orderFilmPrice">Цена:${priceOrder}</div>  
    <div>
      <table class="places">
        <tr>
          <td><div class="place">1</div></td>
          <td><div class="place booking">2</div></td>
          <td><div class="place">3</div></td>
          <td><div class="place">4</div></td>
          <td><div class="place booking">5</div></td>
          <td><div class="place booking">6</div></td>
          <td><div class="place booking">7</div></td>
          <td><div class="place">8</div></td>
          <td><div class="place">9</div></td>
          <td><div class="place">10</div></td>
        </tr>
        <tr>
          <td><div class="place booking">11</div></td>
          <td><div class="place">12</div></td>
          <td><div class="place">13</div></td>
          <td><div class="place booking">14</div></td>
          <td><div class="place booking">15</div></td>
          <td><div class="place">16</div></td>
          <td><div class="place">17</div></td>
          <td><div class="place booking">18</div></td>
          <td><div class="place booking">19</div></td>
          <td><div class="place booking">20</div></td>
        </tr>
        <tr>
          <td><div class="place">21</div></td>
          <td><div class="place">22</div></td>
          <td><div class="place booking">23</div></td>
          <td><div class="place booking">24</div></td>
          <td><div class="place">25</div></td>
          <td><div class="place">26</div></td>
          <td><div class="place booking">27</div></td>
          <td><div class="place">28</div></td>
          <td><div class="place booking">29</div></td>
          <td><div class="place">30</div></td>
        </tr>
      </table>`       
};

let element;
const requests = [];
films.forEach(function(item, i, arr){
    let filmRequest = getFilmById(item)
        .then(result => {
            const prepareFilm = parseFilm(result);
            element = generateFilmItem({...prepareFilm});
            const tableElement = generateTableItem({...prepareFilm})
            const trElement = document.createElement('tr')
            trElement.classList.add('table-body__row')
            trElement.innerHTML = tableElement
            filmsElement.insertAdjacentHTML('beforeEnd', element)
            tableFilmsElement.appendChild(trElement)
            trElement.onclick = function() {
                document.getElementById('orderFilmName').innerText = `Фильм: ${prepareFilm.name}`
                document.getElementById('orderFilmStart').innerText = `Время: `
                document.getElementById('orderFilmGanar').innerText = `Жанр: ${prepareFilm.genre}`
            }

        
        })
    requests.push (filmRequest)
})

const popupElement = generateModalFormItem();
popupOrderElement.insertAdjacentHTML('beforeEnd', popupElement);


console.log(requests)
Promise.all(requests).then(()=>{initOwl()})





