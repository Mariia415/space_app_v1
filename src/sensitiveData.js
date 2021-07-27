export const api_key = `FssgzRxRGe1elBmwvuQYcqfZPBBSr4dX3HQryjFX`;
const period = 8;
const date = new Date();
const prevDate = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() - period
);

export const startDate = prevDate.toJSON().slice(0, 10);
export const endDate = date.toJSON().slice(0, 10);
