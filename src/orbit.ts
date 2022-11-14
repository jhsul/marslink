// https://stackoverflow.com/questions/11759992/calculating-jdayjulian-day-in-javascript
export const getJulianDate = (date: Date) => {
  return date.getTime() / 86400000 + 2440587.5;
};
