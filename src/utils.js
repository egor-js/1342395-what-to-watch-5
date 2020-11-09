export const getYear = (releaseDate) => {
  const date = new Date(releaseDate);
  const year = date.getFullYear();
  return year;
};
