import { GET_NEWS, GET_IMG } from "./types";

export const getNewsAction = () => (dispatch) => {
  console.log("getting news");
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-08&end_date=2017-07-10"
  )
    .then((res) => res.json())
    .then((news) =>
      dispatch({
        type: GET_NEWS,
        payload: news,
      })
    );
};
