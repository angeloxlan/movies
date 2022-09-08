const URL = 'https://api.themoviedb.org/3';
export const POSTER_PATH = 'https://image.tmdb.org/t/p/w342';

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
