import { GET_NEWS } from "./types";
import { api_key, startDate, endDate } from "../sensitiveData";

console.log(startDate, endDate);

export const getNewsAction = () => (dispatch) => {
  console.log("getting news");
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${startDate}&end_date=${endDate}`
  )
    .then((res) => res.json())
    .then((news) =>
      dispatch({
        type: GET_NEWS,
        payload: news,
      })
    );
};
