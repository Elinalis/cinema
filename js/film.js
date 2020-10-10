const initOwl = function() {
    $(".owl-carousel").owlCarousel({
        nav:true,
    });
}




const url = 'https://kinopoiskapiunofficial.tech/api/v2.1/'
const filmsElement = document.getElementById('posters')
const tableFilmsElement = document.getElementsByClassName("movie-list__table")
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
        countries += `${item.country} `
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
        return this.name;
    },

    getCountry: function() {
        let countries = '';
        this.countries.forEach(function(item){
            countries += `${item.country} `
        });
        return countries
    },

    getYear: function() {

    },

    getDescription: function() {

    },

    getImg: function() {

    },

    getLink: function() {

    },

    getStart: function() {

    },

    getGenre: function() {
        

    },

    renderFilmRow: function() {

    },

    renderFilmBlock: function() {

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

    const time = `${time1}${time2} : ${time3}${time4}`
    return ` <tr class="table-body__row table-body__row-dark">
                <td>
                    <input type="checkbox" class= "block-table__checkbox">
                    <label for="block-table__checkbox"><i class= "icon icon-check" title="check"></i></label>
                </td>
                <td>${time}</td>
                <td>${name}</td>
                <td>${genre}</td>
             </tr>`;
};



let element, prepareFilm;
const requests = [];
films.forEach(function(item, i, arr){
    let film = getFilmById(item)
        .then(result => {
            prepareFilm = parseFilm(result);
            element = generateFilmItem({...prepareFilm});
            tableElement = generateTableItem({...prepareFilm})
            filmsElement.insertAdjacentHTML('beforeEnd', element)
        })
    requests.push (film)
})
console.log(requests)
Promise.all(requests).then(()=>{initOwl()})