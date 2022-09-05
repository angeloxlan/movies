const URL = 'https://api.themoviedb.org/3';
export const POSTER_PATH = 'https://image.tmdb.org/t/p/w342';

export async function getTrendingDay() {
    return fetch(
        `${URL}/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`,
        {
            mode: 'cors',
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }
    )
        .then((res) => res.json())
        .then((res) => res);
}
