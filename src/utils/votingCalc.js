export const getRatingVoteAverage = (voteAverage) => {
    return voteAverage / 2;
};

export const getRoundedVoteAverage = (voteAverage) => {
    return voteAverage.toFixed(1);
};
