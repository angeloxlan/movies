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

export async function getTrendingDay(page = 1) {
    return fetch(
        `${URL}/trending/movie/day?page=${page}&api_key=${
            import.meta.env.VITE_API_KEY
        }`,
        params
    )
        .then((res) => res.json())
        .then((res) => res);
}

export async function getTopRated(page = 1) {
    return fetch(
        `${URL}/movie/top_rated?page=${page}&api_key=${
            import.meta.env.VITE_API_KEY
        }`,
        params
    )
        .then((res) => res.json())
        .then((res) => res);
}

export async function getUpcoming(page = 1) {
    return fetch(
        `${URL}/movie/upcoming?page=${page}&api_key=${
            import.meta.env.VITE_API_KEY
        }`,
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

export async function getMoviesByGenre(id, page = 1) {
    return fetch(
        `${URL}/discover/movie?page=${page}&api_key=${
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

export async function getRecommended(id, page = 1) {
    return fetch(
        `${URL}/movie/${id}/recommendations?page=${page}&api_key=${
            import.meta.env.VITE_API_KEY
        }`,
        params
    )
        .then((res) => res.json())
        .then((res) => res);
}

export async function getSearch(query, page = 1) {
    return fetch(
        `${URL}/search/movie?query=${query}&page=${page}&api_key=${
            import.meta.env.VITE_API_KEY
        }`,
        params
    )
        .then((res) => res.json())
        .then((res) => res);
}
