import { GET_NEWS, GET_IMG } from "./types";

export const getImgAction = () => (dispatch) => {
  console.log("getting imgs");
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-08&end_date=2017-07-10"
  )
    .then((res) => res.json())
    .then((imgs) =>
      dispatch({
        type: GET_IMG,
        payload: imgs,
      })
    );
};
