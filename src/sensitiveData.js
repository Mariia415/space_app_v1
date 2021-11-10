export const api_key = `FssgzRxRGe1elBmwvuQYcqfZPBBSr4dX3HQryjFX`;
const period = 5;
const date = new Date();
const prevDate = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() - period
);

const accessCodes = ['1234', '2345', '3456', '78910', '23476', '2k4567', 'ff7869', '23gs'];

export const startDate = prevDate.toJSON().slice(0, 10);
export const endDate = date.toJSON().slice(0, 10);
export const guestAccessCodes = accessCodes.filter(item => {
  return item.length === 4 && !isNaN(Number(item));
});
