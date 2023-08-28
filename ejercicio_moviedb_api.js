
const apikey = '8fa8fe67b5f6b84aedfe04b2350639db';

const peticion = fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apikey}`);

peticion
    .then(resp => resp.json())
    .then(movieData => {
        const originalTitle = movieData.original_title;
        const overview = movieData.overview;
        const posterPath = movieData.poster_path;

        const movieInfo = document.createElement('div');
        movieInfo.innerHTML = `
            <h2>${originalTitle}</h2>
            <p>${overview}</p>
            <img src="https://image.tmdb.org/t/p/w500/${posterPath}" alt="Poster">
        `;

        document.body.append(movieInfo);
    })
    .catch(console.warn);
