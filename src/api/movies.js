const URL = 'https://api.themoviedb.org/3';
export const POSTER_PATH = 'https://image.tmdb.org/t/p/w342';
export const POSTER_PATH_DETAIL = 'https://image.tmdb.org/t/p/w780';
export const CAST_IMG_PATH = 'https://image.tmdb.org/t/p/w185';

const params = {
    mode: 'cors',
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
};

export async function getTrendingDay() {
    return fetch(
        `${URL}/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`,
        params
    )
        .then((res) => res.json())
        .then((res) => res);
}

export async function getTopRated() {
    return fetch(
        `${URL}/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`,
        params
    )
        .then((res) => res.json())
        .then((res) => res);
}

export async function getUpcoming() {
    return fetch(
        `${URL}/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`,
        params
    )
        .then((res) => res.json())
        .then((res) => res);
}

export async function getMovieGenres() {
    return fetch(
        `${URL}/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`,
        params
    )
        .then((res) => res.json())
        .then((res) => res);
}

export async function getMoviesByGenre(id) {
    return fetch(
        `${URL}/discover/movie?api_key=${
            import.meta.env.VITE_API_KEY
        }&with_genres=${id}`,
        params
    )
        .then((res) => res.json())
        .then((res) => res);
}

export async function getDetail(id) {
    return fetch(
        `${URL}/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`,
        params
    )
        .then((res) => res.json())
        .then((res) => res);
}

export async function getCast(id) {
    return fetch(
        `${URL}/movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`,
        params
    )
        .then((res) => res.json())
        .then((res) => res);
}
