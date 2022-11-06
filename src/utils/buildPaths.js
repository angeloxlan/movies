import placeholder1 from '@/assets/img/movie-placeholder-1.svg';
import placeholder2 from '@/assets/img/movie-placeholder-2.svg';
import placeholder3 from '@/assets/img/movie-placeholder-3.svg';
import castPlaceholder from '@/assets/img/cast-placeholder.svg';

export const getIMDBLink = (imdb_id) => {
    return `https://www.imdb.com/title/${imdb_id}`;
};

export const getFullPosterPath = (posterPath) => {
    if (!posterPath) return getPlaceholderImage();
    return `https://image.tmdb.org/t/p/w780${posterPath}`;
};

export const getFullCastImagePath = (profilePath) => {
    if (!profilePath) return castPlaceholder;
    return `https://image.tmdb.org/t/p/w185${profilePath}`;
};

export const getPosterPath = (posterPath) => {
    if (!posterPath) return getPlaceholderImage();
    return `https://image.tmdb.org/t/p/w342${posterPath}`;
};

export const getPlaceholderImage = () => {
    const num = randomNumber(1, 3);

    switch (num) {
        case 1:
        return placeholder1;
        case 2:
        return placeholder2;
        case 3:
        return placeholder3;
    }
};

const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
