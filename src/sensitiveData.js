export const api_key = `FssgzRxRGe1elBmwvuQYcqfZPBBSr4dX3HQryjFX`;
const date = new Date();
const period = 7;

export const startDate = `${date.getFullYear()}-${
  date.getMonth().toString().length < 2
    ? "0" + date.getMonth()
    : date.getMonth()
}-${date.getDate() - period}`;
export const endDate = `${date.getFullYear()}-${
  date.getMonth().toString().length < 2
    ? "0" + date.getMonth()
    : date.getMonth()
}-${date.getDate()}`;

console.log(typeof date.getMonth());
