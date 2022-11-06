export const getYear = (date) => {
    const dateObject = new Date(date);
    return dateObject.getFullYear();
};
