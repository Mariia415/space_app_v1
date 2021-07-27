<<<<<<< HEAD
const api_key = "FssgzRxRGe1elBmwvuQYcqfZPBBSr4dX3HQryjFX";
export const newsNumber = 5;
export const request_url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=${newsNumber}`;
=======
export const api_key = `FssgzRxRGe1elBmwvuQYcqfZPBBSr4dX3HQryjFX`;
const period = 5;
const date = new Date();
const prevDate = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() - period
);

export const startDate = prevDate.toJSON().slice(0, 10);
export const endDate = date.toJSON().slice(0, 10);
>>>>>>> SAV-001-redux-thunk_implementation
