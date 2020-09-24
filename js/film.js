const url = 'https://kinopoiskapiunofficial.tech/api/v2.1/'
const filmsElement = document.getElementById('films')

const films = [
    464963,
    301,
    535341,
    2213,
    1005878
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
const generateFilmItem = function (name, country, genre, year, description, img, link) {
    return `<div>
            <h2>Название: <b>${name}</b></h2>
            <h3>Страна: <b>${country}</b></h3>
            <h3>Жанр: <b>${genre}</b></h3>
            <h3>Год: <b>${year}</b></h3>     
            <h3>Описание: <b>${description}</b></h3>
            <img src="${img}"></div>
            <div><a href="${link}">Ссылка на Кинопоиске</a></div>
            </div>`
}

let elemen, prepareFilm;
films.forEach(function(item, i, arr){
    let film = getFilmById(item);
    console.log(film)
    film.then(result => {
         prepareFilm = parseFilm(result);
         element = generateFilmItem(
            prepareFilm.name, 
            prepareFilm.country, 
            prepareFilm.genre, 
            prepareFilm.year, 
            prepareFilm.description,
            prepareFilm.img, 
            prepareFilm.link
            );
        filmsElement.insertAdjacentHTML('beforeend', element)
    })
})