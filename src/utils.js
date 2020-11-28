export const getYear = (releaseDate) => {
  const date = new Date(releaseDate);
  const year = date.getFullYear();
  return year;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const ratingWord = (val) => {
  if (val === 0) {
    return `Nothing`;
  } else if (val >= 0 && val < 3) {
    return `Bad`;
  } else if (val >= 3 && val < 5) {
    return `Normal`;
  } else if (val >= 5 && val < 8) {
    return `Good`;
  } else if (val >= 8 && val < 10) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};
